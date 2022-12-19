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
    align-items: center bottom;
    width: 100%;
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
	background-size: 15rem 18rem;
	background-repeat: no-repeat;
	width: 15vw;
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