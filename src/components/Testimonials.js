import React from 'react';
import styled from 'styled-components';
import Farjana from'../images/person.webp';

const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <SectionTitle>Testimonials</SectionTitle>
            <Testimonial>
                <Avatar src={Farjana} alt="User Avatar" />
                <TestimonialText>OMG! Zac is just so good at making websites and he is so so sexy. I would literally die for him!!!</TestimonialText>
                <TestimonialAuthor>Farjana S - My Wife</TestimonialAuthor>
            </Testimonial>
            <Testimonial>
                <Avatar src={Farjana} alt="User Avatar" />
                <TestimonialText>OMG! Zac is just so good at making websites and he is so so sexy. I would literally die for him!!!</TestimonialText>
                <TestimonialAuthor>Farjana S - My Wife</TestimonialAuthor>
            </Testimonial>
        </TestimonialsContainer>
    );
};

const TestimonialsContainer = styled.div`
    text-align: center;
    padding: 50px;
    background-color: ${(props) => props.theme.colors.danger};
`;

const SectionTitle = styled.h2`
    font-size: 36px;
`;

const Testimonial = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

const Avatar = styled.img`
    border-radius: 50%;
    width: 100px;
`;

const TestimonialText = styled.p`
    margin: 10px 0;
`;

const TestimonialAuthor = styled.p`
    font-weight: bold;
`;

export default Testimonials;
