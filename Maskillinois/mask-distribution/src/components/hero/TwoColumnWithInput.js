import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import Popup from 'reactjs-popup';
import Header from "../headers/light.js";
import logo from '../../Logo/clean_logo.png';
import "./home.scss";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-xl md:text-xl lg:text-2xl xl:text-3xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

export default function Home(roundedHeaderButton ) {
  return (
    <>
      {/* <Header roundedHeaderButton={roundedHeaderButton} /> */}
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
            Welcome to Mask-Illinois: UIUC's Premier Mask Exchange Platform
        <span tw="text-primary-500"> </span>
            </Heading>
            <Paragraph>
              This site provides a guide on making safe, home-made masks, and
              facilitates a seamless exhange process between Mask Donors and
              Donatees at the University of Illinois.

              Simply follow the steps outlined below based on your role in the mask exhange process to get involved. <br /> <br /> <br />

              <Popup trigger={<button className = 'donors_donatees'> <b> Mask Donors </b> </button>} position = "bottom left"> 
              <br />
              <div> 
              1. Select the Sign up button at the top right corner of the screen to create a user profile. <br />
              2. Fill out information related to the mask exhange including mask type and picture, <br/>
              number of masks available, and your location. <br />
              3. To make changes to your profile, select the Sign in button, 
              and upon successful sign in, <br/>
              select the Edit Profile button at the top right corner of the screen. <br />
              </div>
              <br /> <br />
              </Popup> 

              <Popup trigger={<button className = 'donors_donatees'> <b> Mask Donatees </b>  </button>} position = "bottom "> 
              <br />
              <div>
              1. Navigate to available donor profiles by selecting the I Need Masks button on the top navigation bar. <br />
              2. Select a Donor based on the criteria best suited for you. <br />
              3. Coordinate mask exchange via email. <br />
              </div>
              </Popup>

            </Paragraph>

          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="object-contain content-center h-144 min-w-0 w-full max-w-lg xl:max-w-xl" src={logo} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
      </Container>
    </>
  );
};
