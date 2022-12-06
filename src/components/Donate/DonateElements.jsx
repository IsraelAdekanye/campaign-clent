import styled from 'styled-components';

export const Row = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    padding: 2rem 0rem 3rem 0rem;
    align-items: center;
`;

export const Title = styled.p`
    justify-content: center;
    font-size: clamp(3rem, 3vw, 3rem);
	color: #072886;
`;

export const DonationForm = styled.form`
    justify-content: center;
    align-items: center;        
`;

export const InDiv = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1rem 0rem 1rem 0rem;
    justify-content: center;
    justify-self: stretch;
`;

export const InnerDiv = styled.div`
    margin: 1rem 1rem 0rem 1rem
`;

export const Label = styled.label`
    margin: 0rem 1rem 0rem 1rem
`;

export const SubmitBtnStyle = styled.div`
    display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
    margin: 3rem 0rem 0rem 0rem
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

&:hover {
    background: #f9b700;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    border: thick double #072886;
};
`;