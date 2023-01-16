import styled from 'styled-components';
import ImgBg from '../../images/Abiru.jpeg';
import HeroImagePic from '../../images/AbiruSelected.png';
import FeaturePic from '../../images/5LGs.png';

export const HeroContainer = styled.div`
	//background-image: url(${ImgBg});
	// height: 100vh;
	// background-position: center;
	// background-size: cove;
`;

export const HeroContent = styled.div`
	background: #f9b700;
	height: calc(100vh-80px);
	max-height: 100%;
	width: 100%;
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
	max-height: 100vh;
	padding-right: 8rem;
	width: 100%;
	color: #fff;
	line-height: 1;
	font-weight: bold;
	//padding: 0rem calc((100vw - 1300px) / 2);

	@media screen and (max-width: 600px) {
		flex-direction: column-reverse;
		height: 100vh;
		width:100vw;
		padding-right: 8rem;
		
	};
`;

export const HeroInnerItem = styled.div`
	width: 50%;
	padding: 0rem calc((100vw - 1300px) / 2);

	@media screen and (max-width: 600px) {
		width: 80vw;
		margin: -12rem 2rem 2rem 2rem;
		
	};
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

	@media screen and (max-width: 600px) {
		width: 90vw;
		padding-left: 2rem;
		padding-top: rem;
		font-size: 2rem;
		
	};
`;

export const HeroImage = styled.div`
	background-image: url(${HeroImagePic});
	height: 100vh;
	background-position: center;
	background-size: 35rem 40rem;
	background-repeat: no-repeat;
	width: 50%;

	@media screen and (max-width: 600px) {
		background-size: 18rem 20rem;
		background-position: center;
		background-repeat: no-repeat;
		width: 115%;
		margin: -20rem 2rem -20rem 2rem;
	};
`

export const HeroBtnStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: flex-start;

	@media screen and (max-width: 600px) {
		padding-left: 1rem;
	};
	
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

	@media screen and (max-width: 600px) {
		font-size: 0.8rem;
		margin-right: 1rem;
		margin-left: 1rem;
		padding: 0.6rem 0.6rem;

		&:hover {
		background: #f9b700;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
		border: thick double #072886;
	}
	};

	
`;
