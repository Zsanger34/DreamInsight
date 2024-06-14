import React from 'react';
import styled from 'styled-components';
import Analysis from'../images/Firstthing.webp';
import Trends from'../images/Anaylis.webp';
import Integrate from'../images/Integrations.webp';

const Services = () => {
    return (
        <ServicesContainer>
            <SectionTitle>Our Services</SectionTitle>
            <SectionSubtitle>We provide great services for our customers based on needs</SectionSubtitle>
            <ServiceCards>
                <ServiceCardGreen>
                    <ServiceIcon src={Analysis} alt="Dream Analysis" />
                    <ServiceTitle>Dream Analysis</ServiceTitle>
                    <ServiceDescription>
                        Unlock the meaning behind your dreams with our advanced AI-powered analysis.
                    </ServiceDescription>
                    <LearnMoreButton>Learn more</LearnMoreButton>
                </ServiceCardGreen>
                <ServiceCardBlue>
                    <ServiceIcon src={Trends} alt="Sleep Trends" />
                    <ServiceTitle>Sleep Trends</ServiceTitle>
                    <ServiceDescription>
                        Track and visualize your sleep patterns over time.
                    </ServiceDescription>
                    <LearnMoreButton>Learn more</LearnMoreButton>
                </ServiceCardBlue>
                <ServiceCardRed>
                    <ServiceIcon src={Integrate} alt="App Integrations" />
                    <ServiceTitle>App Integrations</ServiceTitle>
                    <ServiceDescription>
                        Connect with apps like Apple HealthKit and Oura Ring.
                    </ServiceDescription>
                    <LearnMoreButton>Learn more</LearnMoreButton>
                </ServiceCardRed>
            </ServiceCards>
        </ServicesContainer>
    );
};

const ServicesContainer = styled.div`
    text-align: center;
    padding: 50px;
    background-color: ${(props) => props.theme.colors.danger};
`;

const SectionTitle = styled.h2`
    font-size: 36px;
`;

const SectionSubtitle = styled.p`
    margin: 20px 0;
    ${(props) => props.theme.colors.danger};
`;

const ServiceCards = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
`;

const ServiceCard = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  text-align: center;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
  }  

`;
const ServiceCardRed = styled(ServiceCard)`
background-color:${(props) => props.theme.colors.thirdary};
  
`;
const ServiceCardGreen = styled(ServiceCard)`
background-color:${(props) => props.theme.colors.secondary};
  
`;
const ServiceCardBlue = styled(ServiceCard)`
background-color:${(props) => props.theme.colors.primary};
  
`;



const ServiceIcon = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
    margin-bottom: 20px;
    color: ;
`;

const LearnMoreButton = styled.button`
    background-color: #88C7D6;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.success};
      }
`;

export default Services;
