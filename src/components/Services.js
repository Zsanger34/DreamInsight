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
                <ServiceCard>
                    <ServiceIcon src={Analysis} alt="Dream Analysis" />
                    <ServiceTitle>Dream Analysis</ServiceTitle>
                    <ServiceDescription>
                        Unlock the meaning behind your dreams with our advanced AI-powered analysis.
                    </ServiceDescription>
                    <LearnMoreButton>Learn more</LearnMoreButton>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Trends} alt="Sleep Trends" />
                    <ServiceTitle>Sleep Trends</ServiceTitle>
                    <ServiceDescription>
                        Track and visualize your sleep patterns over time.
                    </ServiceDescription>
                    <LearnMoreButton>Learn more</LearnMoreButton>
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Integrate} alt="App Integrations" />
                    <ServiceTitle>App Integrations</ServiceTitle>
                    <ServiceDescription>
                        Connect with apps like Apple HealthKit and Oura Ring.
                    </ServiceDescription>
                    <LearnMoreButton>Learn more</LearnMoreButton>
                </ServiceCard>
            </ServiceCards>
        </ServicesContainer>
    );
};

const ServicesContainer = styled.div`
    text-align: center;
    padding: 50px;
    background-color: #fff;
`;

const SectionTitle = styled.h2`
    font-size: 36px;
`;

const SectionSubtitle = styled.p`
    margin: 20px 0;
`;

const ServiceCards = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
`;

const ServiceCard = styled.div`
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    max-width: 30%;
    text-align: center;
`;

const ServiceIcon = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
    margin-bottom: 20px;
`;

const LearnMoreButton = styled.button`
    background-color: #88C7D6;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
`;

export default Services;
