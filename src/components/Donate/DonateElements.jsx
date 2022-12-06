import styled from 'styled-components';

export const Row = styled.div`
    padding: 3rem 0rem 3rem 0rem;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    justify-content: center;
    font-size: clamp(3rem, 3vw, 3rem);
	color: #072886;
`;

export const DonationForm = styled.form`
justify-content: center;
`;

export const InDiv = styled.form`
    display: flex;
    flex-direction: row;
    margin: 1rem 0rem 1rem 0rem;
    justify-content: center;
    justify-self: stretch;
`;

export const InnerDiv = styled.div`
    margin: 0rem 1rem 0rem 1rem
`;

export const Label = styled.label`
    margin: 0rem 1rem 0rem 1rem
`;

export const Submit = styled.button`
padding: 0.6rem 1rem;
border: none;
background: #072886;
color: #fff;
border-radius: 0.5rem;
transition: 0.2s ease-out;
font-size: 1rem;
font-weight: lighter;
align-self: center;
`;