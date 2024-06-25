import React from 'react';
import styled from 'styled-components';

const JournalEntry = () => {
    return (
        <SectionContainer>
            <SectionTitle>Add a New Journal Entry</SectionTitle>
            {/* Add content here */}
        </SectionContainer>
    );
};

const SectionContainer = styled.div`
    flex: 1;
    margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
    margin-bottom: 10px;
`;

export default JournalEntry;
