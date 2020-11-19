import React, {Component} from "react"
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
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
import SupportIconImage from "../../images/support-icon.svg";

import ShieldIconImage from "../../images/shield-icon.svg";
import cloth_mask from "../../Logo/cloth_mask.jpg";
import surgical_mask from "../../Logo/new_surgical.jpg";
import face_shield from "../../Logo/face_shield.jpg";
import simple from "../../images/simple-icon.svg";


const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 mr-10 w-full sm:w-1/2 lg:w-1/6 flex flex-col items-center m-20`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-24 h-24 bg-contain bg-center`}
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

const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg text-orange-500`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;
class Resources extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards : [
                {imageSrc: surgical_mask,
                  title: "Surgical Masks",
                  description: 
            "This mask filters out large particles in the air by reducing exposure to the saliva and respiratory secretions of the mask wearer.",
                  url: "https://www.youtube.com/watch?v=X0MRVPrePIg",
                },
            
                {imageSrc: cloth_mask,
                  title: "Fabric Masks",
                  description: "Cloth masks as well help reduce the spread of the virus. They can be made from common materials, such as sheets made of tightly woven cotton.",
                  url: "https://www.youtube.com/watch?v=uRfhuRNua_E",
                },
            
                {imageSrc: face_shield,
                  title: "Face Shields",
                  description: "Face shields are commonly used by front-line health workers. Manufacturing them usually requires professional expertise.",
                  url: "https://www.youtube.com/watch?v=HHUrSX2cJyA",
                },
            
                {
                  imageSrc: simple,
                  title: "When to Wear a Mask?",
                  description: "Short Answer: ALWAYS when you're stepping out of the house to reduce risk of catching the virus by 65%! They are most effective in enclosed spaces.",
                  url: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks",
                },
            
                { imageSrc: ShieldIconImage, 
                title: "How to Wear a mask?",
                description: "Wash your hands before putting on your face covering. Put it over your nose and mouth & secure it under your chin. Make sure you can breathe easily.",
                url: "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html",
                }
              ]
        }
    }


    render() {
        return (
            <Container>
              <ContentWithPaddingLg>
                <HeadingContainer>
                  <Description>{this.description}</Description>
                </HeadingContainer>
                <br/>
                <Cards>
                  {this.state.cards.map((card, index) => (
                    <Card key={index}>
                      <CardImage imageSrc={card.imageSrc} />
                      <CardContent>
                        <span className="title"> <b> {card.title || "Fully Secure"} </b></span> <br />
                        <p className="description"> {card.description}</p>
                        <PrimaryLink onClick={()=> window.open( card.url, "_blank")}>
                            Learn More <ArrowRightIcon />
                        </PrimaryLink>
                      </CardContent>
                    </Card>
                  ))}
                </Cards>
              </ContentWithPaddingLg>
            </Container>
          );
    }
    
}

export default Resources;