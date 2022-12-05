import styled from 'styled-components';
import ImgBg from '../../images/Abiru.jpeg';
import HeroImagePic from '../../images/AbiruSelected.png';
import FeaturePic from '../../images/5LGs.png';

export const HeroContainer = styled.div`
	//background-image: url(${ImgBg});
	// height: 100vh;
	// background-position: center;
	// background-size: cover;
`;

export const HeroContent = styled.div`
	background: #f9b700;
	height: calc(100vh-80px);
	max-height: 100%;
	width: 100vw;
	padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
	background-color: #f9b700;
	background-image: url(${FeaturePic});
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	height: calc(100vh-80px);
	max-height: 100%;
	padding-right: 8rem;
	width: 100vw;
	color: #fff;
	// text-transform: uppercase;
	line-height: 1;
	font-weight: bold;
	//padding: 0rem calc((100vw - 1300px) / 2);

`;

export const HeroInnerItem = styled.div`
	width: 50%;
	padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroH1 = styled.h1`
	font-size: clamp(2.5rem, 10vw, 5rem);
	margin-bottom: 1rem;
	box-shadow: 3px 5px #e9ba23;
	letter-spacing: 3px;
`;

export const HeroP = styled.p`

	font-size: clamp(2rem, 2.5vw, 2.5rem);
	margin-bottom: 2rem;
	margin-top: 20rem;
	font-size: 3rem;
  	font-stretch: expanded;
	font-style: normal;
	font-weight: lighter;
	line-height: 1;
`;

export const HeroImage = styled.div`
	background-image: url(${HeroImagePic});
	height: 100vh;
	background-position: center;
	background-size: 35rem 40rem;
	background-repeat: no-repeat;
	width: 50%;
`

export const HeroBtnStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: flex-start;
	
`;

export const HeroBtn = styled.button`
	display: flex;
	flex-direction: row;
	padding: 1rem 1rem;
	border: none;
	background: #072886;
	color: #fff;
	border-radius: 0.5rem;
	transition: 0.2s ease-out;
	margin-right: 2rem;
	font-size: 1.2rem;
	font-weight: lighter;

	&:hover {
		background: #f9b700;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
		border: thick double #072886;
	}
`;
