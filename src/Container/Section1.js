import Left from '../Component/Left';
import Right from '../Component/Right';
import Form from '../Component/Form'
import Carousel from '../Component/Carousel';
import Social from '../Component/Social';
import './Section1.css'
import Showcase from '../Component/Showcase'
const Section1 = () => {

  return (
    <div>
      <div className="grid-half">
        <Left />
        <Right />
      </div>
      <Form />
      <Carousel heading="Check out our rave reviews 🤩" />
      <Social />
      <Showcase />
      <Carousel heading="Hyderabad ❤️ us" />
      <Showcase />
    </div>
  )
}
export default Section1