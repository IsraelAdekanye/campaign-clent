import styled from 'styled-components';
import FeaturePic from '../../images/5LGs.png';

export const FeatureContainer = styled.div`

	background-color: #072886;
	//background-image: url(${FeaturePic});
	opacity: 0.95;
	background-repeat: repeat;
	height: 100vh;
	max-height: 500px;
	background-position: center;
	background-size: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	padding: 0 1rem;

	h1 {
		font-size: clamp(3rem, 3vw, 3rem);
	}

	p {
		margin-bottom: 1rem;
		font-size: clamp(1rem, 2vw, 2rem);
	}
`;

export const FeatureButton = styled.button`
	font-size: 1.4rem;
	padding: 0.6rem 3rem;
	border: none;
	background: #072886;
	border-radius: 1rem;
	color: #fff;
	transition: 0.2s ease-out;
	border: thick double #f9b700;

	a {
		color: inherit;
		text-decoration: none;
	}

	&:hover {
		color: #000;
		background: #f9b700;
		transition: 0.2s ease-out;
		cursor: pointer;
		border: thick double #f9b700;
	}
`;
