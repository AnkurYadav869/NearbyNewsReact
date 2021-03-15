import Left from '../Component/Left';
import Right from '../Component/Right';
import Carousel from '../Component/Carousel';
import Social from '../Component/Social';
import './Section1.css';
import Showcase from '../Component/Showcase';
import About from '../Component/About';
const Section1 = () => {
	return (
		<div>
			<div className='grid-half'>
				<Left />
				<Right />
			</div>
			<About />
			<Carousel heading='Check out our rave reviews 🤩' />
			<Social />
			<Showcase />
			<Carousel heading='Hyderabad ❤️ us' />
			<Showcase />
		</div>
	);
};
export default Section1;
