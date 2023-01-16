import styled from 'styled-components';
import HeroImagePic from '../../images/AbiruSelected.png';

export const MasterDiv = styled.div`
    max-width: 100%;
    background: #f4f7f8;
    border-radius: 8px;
`;

export const Section = styled.section`
    text-align: center;
    padding: 40px 0;
    background: #EBF0F5;
    height: 800px;
    align-items: center;
    width: 100%;
    display: flex;
	flex-direction: column;
`;

export const Cond2Div = styled.div`
    border-radius:200px; 
    height:200px; 
    width:200px; 
    background: #F8FAF5; 
    margin:0 auto;
    margin-top: 10%;

    background-image: url(${HeroImagePic});
	height: 28vh;
	background-position: center;
	background-size: 15rem 17rem;
	background-repeat: no-repeat;
	width: 15vw;

    @media screen and (max-width: 600px) {
		background-size: 15rem 17rem;
		background-position: center;
		background-repeat: no-repeat;
		width: 0%;
        height: 28vh;
	};
`;

export const CheckMark = styled.i`
    color: #9ABC66;
    font-size: 100px;
    line-height: 200px;
    margin-left:-15px;
`;

export const Success = styled.h1`
    color: #88B04B;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
`;

export const Paragraph = styled.p`
    color: #404F5E;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-size:20px;
    margin: 0;
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
		background: #EBF0F5;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
		border: thick double #072886;
	};
`;