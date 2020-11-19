const express = require('express');
const app = express();
const port = 5000;

var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require('body-parser');

var url = 'mongodb://localhost:27017/';

router.get('/', function(req, res, next) {
//res.render('index');
    res.end();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }))

app.get('/get-data', function(req, res, next) {
    var resultArray = [];
    //res.send('hello world');
    mongo.connect(url, function(err, client) {
        assert.equal(null, err);
        var db = client.db('testdb');
        var cursor = db.collection('profiles').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            client.close()
            //res.render('index', {items: resultArray});
            console.log(resultArray);
            res.send(resultArray);
            //toreturn = resultArray[0];
        });
    });
});

app.get('/get-user-data', function(req, res, next) {
    var resultArray = [];
    //res.send('hello world');
    var user_email = req.body.email ;
    mongo.connect(url, function(err, client) {
        assert.equal(null, err);
        var db = client.db('testdb');
        var cursor = db.collection('profiles').find({email : user_email});
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            client.close()
            //res.render('index', {items: resultArray});
            console.log(resultArray);
            res.send(resultArray);
            //toreturn = resultArray[0];
        });
    });
});

app.post('/insert', function(req, res, next ) {
    //console.log(req);
    var item = {
        email : req.body.email,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
    };
    console.log(item.email == null);
    if (item.email == null || item.first_name == null || item.last_name == null) {
        return res.send("Please enter all required information")
    }
    mongo.connect(url, function(err, client) {
        assert.equal(null, err);
        var db = client.db('testdb');
        db.collection('profiles').insert(item, function(err, result) {
            if (err) {
                if (err.code == 11000) {
                    //console.log(err);
                    res.send('Email already exists');
                    client.close()
                    res.end()
                } else {
                    console.log(err);
                    res.send('Unknown Error, please check console for further information');
                    client.close()
                    res.end()
                }
            } else {
                assert.equal(null, err);
                console.log('Item inserted');
                client.close();
                res.end();
            }

        });
    });
});


app.post('/update', function(req, res, next) {
    /*var item = {
        email : req.body.email,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
    }*/

    var objForUpdate = {};

    if (req.body.email == null) {
        console.log("User failed to input an email.");
        return res.end();

    } else {
    objForUpdate.email = req.body.email;
    if (req.body.first_name != null) objForUpdate.first_name = req.body.first_name;
    if (req.body.last_name != null) objForUpdate.last_name = req.body.last_name;

    // console.log(objForUpdate.email);
    var email_toUpdate = req.body.email;

    mongo.connect(url, function (err, client) {
        assert.equal(null, err);
        var db = client.db('testdb');
        db.collection('profiles').updateOne({email: email_toUpdate}, {$set: objForUpdate}, function (err, result) {
            assert.equal(null, err);
            console.log('Item Updated');
            client.close();
            res.end();
        });
    });
}
});

app.post('/delete', function(req, res, next) {
    var email_toDelete = req.body.email

    mongo.connect(url, function(err, client) {
        assert.equal(null, err);
        var db = client.db('testdb');
        db.collection('profiles').deleteOne({email : email_toDelete}, function(err, result){
            assert.equal(null, err);
            console.log('Item Deleted');
            client.close();
            res.end();
        });
    });
});


app.get('/', (req, res) => res.send('hello'));

app.listen(port, () => console.log(`Back End app listening on port ${port}!`));

/*          Server's actual code
* const express = require('express');
const app = express();
const port = 8080;

var url = 'mongodb+srv://rvchess:Coolguy29@maskillinois.ymbhz.mongodb.net/maskillinoisdb?retryWrites=true&w=majority';

var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

//console.log("testing");

app.get('/get-data', function(req, res, next) {
    var resultArray = [];
    //res.send('hello world');
    mongo.connect(url, function(err, client) {
        assert.equal(null, err);
        var db = client.db('maskillinoisdb');
        var cursor = db.collection('profiles').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            client.close()
            //res.render('index', {items: resultArray});
            console.log(resultArray);
            res.send(resultArray);
            //toreturn = resultArray[0];
        });
    });
});

app.get('/get-user-data', function(req, res, next) {
    var resultArray = [];
    //res.send('hello world');
    var user_email = req.body.email ;
    mongo.connect(url, function(err, client) {
        assert.equal(null, err);
        var db = client.db('maskillinoisdb');
        var cursor = db.collection('profiles').find({email : user_email});
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            client.close()
            //res.render('index', {items: resultArray});
            console.log(resultArray);
            res.send(resultArray);
            //toreturn = resultArray[0];
        });
    });
});

app.post('/insert', function(req, res, next ) {
    //console.log(req);
    var item = {
        email : req.body.email,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        number_masks : req.body.number_masks,
        type_masks : req.body.type_masks,
        phone_number : req.body.phone_number,
        preferred_exchange : req.body.preferred_exchange,
        profile_picture : req.body.profile_picture,
        additional_information : req.body.additional_information,
    };
    console.log(item.email == null);
    if (item.email == null || item.first_name == null || item.last_name == null || item.number_masks == null || item.type_masks == null || item.preferred_exchange == null) {
        return res.send("Please enter all required information")
    }

    if (item.phone_number == null) item.phone_number = "";
    if (item.profile_picture == null) item.profile_picture = "";
    if (item.additional_information == null) item.additional_information = "";

    mongo.connect(url, function(err, client) {
        assert.equal(null, err);
        var db = client.db('maskillinoisdb');
        db.collection('profiles').insert(item, function(err, result) {
            if (err) {
                if (err.code == 11000) {
                    //console.log(err);
                    res.send('Email already exists');
                    client.close()
                    res.end()
                } else {
                    console.log(err);
                    res.send('Unknown Error, please check console for further information');
                    client.close()
                    res.end()
                }
            } else {
                assert.equal(null, err);
                console.log('Item inserted');
                client.close();
                res.end();
            }

        });
    });
});

app.post('/update', function(req, res, next) {
    //var item = {
    //    email : req.body.email,
    //    first_name : req.body.first_name,
    //    last_name : req.body.last_name,
    // }

    var objForUpdate = {};

    if (req.body.email == null) {
        console.log("User failed to input an email.");
        return res.send("Enter an email to query");

    } else {
    objForUpdate.email = req.body.email;
    if (req.body.first_name != null) objForUpdate.first_name = req.body.first_name;
    if (req.body.last_name != null) objForUpdate.last_name = req.body.last_name;
    if (req.body.number_masks != null) objForUpdate.number_masks = req.body.number_masks;
    if (req.body.type_masks != null) objForUpdate.type_masks = req.body.type_masks;
    if (req.body.phone_number != null) objForUpdate.phone_number = req.body.phone_number;
    if (req.body.preferred_exchange != null) objForUpdate.preferred_exchange = req.body.preferred_exchange;
    if (req.body.profile_picture != null) objForUpdate.profile_picture = req.body.profile_picture;
    if (req.body.additional_information != null) objForUpdate.additional_information = req.body.additional_information;


    // console.log(objForUpdate.email);
    var email_toUpdate = req.body.email;

    mongo.connect(url, function (err, client) {
        assert.equal(null, err);
        var db = client.db('maskillinoisdb');
        db.collection('profiles').updateOne({email: email_toUpdate}, {$set: objForUpdate}, function (err, result) {
            assert.equal(null, err);
            console.log('Item Updated');
            client.close();
            res.end();
        });
    });
}
});

app.get('/', (req, res) => res.send('hello world 3'));
app.listen(port, () => console.log(`Back End app listening on port ${port}!`));
*
*
* */