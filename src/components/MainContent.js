import React from 'react';
import styled from 'styled-components';
import MyCards from './Dashboard/MyCards';
import JournalEntry from './Dashboard/JournalEntry';
import SleepTrends from './Dashboard/SleepTrends';
import RecentActivity from './Dashboard/RecentActivity';
import TotalHoursOfSleep from './Dashboard/TotalHoursOfSleep';
import Integration from './Dashboard/Integration';

const MainContent = () => {
    return (
        <MainContentContainer>
            <GridItem>
                <MyCards />
            </GridItem>
            <GridItem>
                <RecentActivity />
            </GridItem>
            <GridItem>
                <JournalEntry />
            </GridItem>
            <GridItem>
                <TotalHoursOfSleep />
            </GridItem>
            <GridItem>
                <SleepTrends />
            </GridItem>
            <GridItem>
                <Integration />
            </GridItem>
        </MainContentContainer>
    );
};

const MainContentContainer = styled.div`
    flex: 1;
    padding: 20px;
    display: grid;
    grid-template-columns: 3fr 1fr; /* 3:1 ratio */
    grid-gap: 20px;
    margin-top: 50px; /* Adjust based on TopNav height */
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default MainContent;
