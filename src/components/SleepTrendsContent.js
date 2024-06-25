import React from 'react';
import styled from 'styled-components';

const SleepTrendsContent = () => {
    return (
        <SleepTrendsContentContainer>
            <h2>Sleep Trends Content</h2>
            {/* Add your sleep trends content here */}
        </SleepTrendsContentContainer>
    );
};

const SleepTrendsContentContainer = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default SleepTrendsContent;
