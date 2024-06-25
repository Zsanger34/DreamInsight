import React from 'react';
import styled from 'styled-components';

const JournalContent = () => {
    return (
        <JournalContentContainer>
            <h2>Journal Content</h2>
            {/* Add your journal content here */}
        </JournalContentContainer>
    );
};

const JournalContentContainer = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default JournalContent;
