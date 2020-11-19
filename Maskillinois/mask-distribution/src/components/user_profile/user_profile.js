import React, {Component} from "react"
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl, ContentWithPaddingLg } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import axios from "axios";
import ReactLoading from 'react-loading';


const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 mr-10 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center border-2 pt-8 pb-8 bg-gray-100`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-20 h-20 bg-contain bg-center`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-sm font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.description = "Select one of our generous donors and contact them via email / phone number to request mask(s)"

        this.state = {
            all_users: []
        }
    }

    componentDidMount = () => {
        axios.get('https://maskillinois.web.illinois.edu/get-data').then(response => {
            const public_users = []
            for(var i=0; i<response.data.length; i++) {
                if(response.data[i].profile_visibility === 'Public' && response.data[i].verified === 0) public_users.push(response.data[i])
            }
            this.setState({all_users: public_users})
        })
    }

    render() {
        return (
            <Container>
              <ContentWithPaddingLg>
                <HeadingContainer>
                  <Heading>Donors Profiles</Heading> <br />
                  <Description>{this.description}</Description>
                </HeadingContainer>
                <br/>
                {this.state.all_users.length === 0 
                ?
                <center> <ReactLoading type={'spinningBubbles'} color={'light blue'} height={120} width={100} /> </center> 
                :
                <Cards>
                  {this.state.all_users.map((card, index) => (
                    <Card key={index}>
                      <CardImage imageSrc={card.profile_picture} />
                      <CardContent>
                        <span className="position"> {card.first_name} {card.last_name}</span>
                        <span className="name"> {card.email} </span>
                        <span className="name"> {card.user_location} </span>
                        <span className="name"> Masks available: {card.number_masks} </span>
                        <span className="name"> Type of masks: {card.type_masks} </span>
                        <span className="name"> Preferred exchange: {card.preferred_exchange} </span>
                      </CardContent>
                    </Card>
                  ))}
                </Cards>
                }
              </ContentWithPaddingLg>
            </Container>
          );
    }
    
}

export default UserProfile;