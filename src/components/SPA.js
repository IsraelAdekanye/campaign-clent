//import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero/Hero';
//import Products from './components/Products/Products';
import { GlobalStyle } from '../globalStyles';
//import { productData, productDataTwo } from './components/Products/data';
import Feature from './Feature/Feature';
import Footer from './Footer/Footer';
//import Donate from './Donate/Donate';

const SPA = () => {
	return (
        <div>
			<GlobalStyle />
			<Hero /> 
            <Feature />
			<Footer />
		</div>
	);
}

export default SPA;
