import Slider from './Slider'
import feedback1 from '../Images/feedback-1.png'
import feedback2 from '../Images/feedback-2.png'
import feedback3 from '../Images/feedback-3.png'
import feedback4 from '../Images/feedback-4.png'
const Carousel = ({heading}) => {
  // TODO : Use props destructuring : https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0
// DONE......................
  return (
    <div>
      <h1 className="text-center my-5">{heading}</h1>
      <div className="carousel slide my-5 pb-5" data-ride="carousel" id="slider1">
        <div className="carousel-inner">
          <div className="container text-center">

            {/*
             // TODO : See this can be made as a <Slide /> compoenent, follow DRY principle
             <div className="carousel-item active">
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:6759075937368719360/">
                <img src={feedback1} alt="" />
              </a>
              <p className="h4 pt-5 text-info">Mohan Krishna | Government of Telangana</p>

            </div> 
              
              DONE....
              */}
            <Slider name = "carousel-item active"
                    imgLink = "https://www.linkedin.com/feed/update/urn:li:activity:6759075937368719360/"
                    feedback = {feedback1}
                    text = "Mohan Krishna | Government of Telangana"/>

            <Slider 
                    name = "carousel-item"
                    imgLink = "https://www.linkedin.com/posts/sandeepgangarapu_nearby-news-has-been-excellent-to-read-every-activity-6756868805315710976-FGbD/"
                    feedback = {feedback2} 
                    text = "Sandeep | Ex-Google, IIT Kharagpur Alum"
                        />
            <Slider 
                    name = "carousel-item"
                    imgLink ="https://www.linkedin.com/posts/nachson_hyderabad-local-news-updates-nearby-news-activity-6757199139043459072-PNNX/"
                    feedback = {feedback3} 
                    text = "Vinay Kumar | Ex-IRS and Solarpreneur"/>
            <Slider 
                    name = "carousel-item"
                    imgLink ="https://www.linkedin.com/feed/update/urn:li:activity:6757647641515040768/"
                    feedback = {feedback4} 
                    text = "Akhil Neelam | Central Square Foundation"/>
             
            <a href="#slider1" className="carousel-control-prev text-dark" data-slide="prev">
              <span className="carousel-control-prev-icon "></span>
            </a>
            <a href="#slider1" className="carousel-control-next" data-slide="next">
              <span className="carousel-control-next-icon text-warning"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Carousel;
