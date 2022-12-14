import styled from 'styled-components';
import FeaturePic from '../../images/5LGs.png';

export const MasterDiv = styled.div`
    background-color: #f9b700;
	background-image: url(${FeaturePic});
    max-width: 100%;
    //background: #f4f7f8;
    border-radius: 8px;
`;

export const Section = styled.section`
    text-align: center;
    padding: 40px 0;
    //background: #EBF0F5;
    height: 800px;
    align-items: center;
    width: 100%;
`;

export const Cond2Div = styled.div`
    border-radius:20px; 
    height:20rem; 
    width:20rem; 
    //background: #F8FAF5; 
    margin: auto;
    margin-top: 20%;
    align-items: center;
    display: flex;
	flex-direction: column;
`;

export const Button = styled.button`
    display: flex;
	flex-direction: column;
	padding: 1rem 1rem;
	border: none;
	background: #072886;
    margin: 1.2rem 0rem 1.2rem 0rem;
	color: #fff;
	border-radius: 0.5rem;
	transition: 0.2s ease-out;
	font-size: 1rem;
	font-weight: lighter;
    align-items: center;

    a {
		color: inherit;
		text-decoration: none;
	}

	&:hover {
		background: #f9b700;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
		border: thick double #072886;
	};
`;