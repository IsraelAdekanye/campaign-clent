import React, { useState } from 'react';
//import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {
	HeroContainer,
	//HeroContent,
	HeroItems,
	//HeroH1,
	HeroP,
	HeroBtn,
	HeroBtnStyle,
	HeroInnerItem,
	HeroImage
} from './HeroElements';

function Hero() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HeroContainer>
			{/* <NavBar toggle={toggle} /> */}
			<Sidebar isOpen={isOpen} toggle={toggle} />
			
				<HeroItems>
					{/* <HeroH1>The Greater Good</HeroH1> */}
					<HeroInnerItem>
						<HeroP>Crowdfund <br></br>Senator Abiru's <br></br> Re-Election Campaign</HeroP>
					
						<HeroBtnStyle>
							<HeroBtn>About Tokunbo Abiru</HeroBtn>
							<HeroBtn>Make Donations</HeroBtn>
						</HeroBtnStyle>

					</HeroInnerItem>

					<HeroImage></HeroImage>
				</HeroItems>
			
		</HeroContainer>
	);
}

export default Hero;
