import feedback1 from '../Images/feedback-1.png'
import feedback2 from '../Images/feedback-2.png'
import feedback3 from '../Images/feedback-3.png'
import feedback4 from '../Images/feedback-4.png'
const Carousel = (props)=>{
 
  return (
    <div>
        <h1 className="text-center my-5">{props.heading}</h1>
        <div className="carousel slide my-5 pb-5" data-ride="carousel" id="slider1">
        <div className="carousel-inner">
          <div className="container text-center">
            <div className="carousel-item active">
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:6759075937368719360/">
                <img src={feedback1} alt=""/>
              </a>
              <p className="h4 pt-5 text-info">Mohan Krishna | Government of Telangana</p>

            </div>
            <div className="carousel-item">
              <a href="https://www.linkedin.com/posts/sandeepgangarapu_nearby-news-has-been-excellent-to-read-every-activity-6756868805315710976-FGbD/">
                <img src={feedback2} alt=""/>
              </a>
              <p className="h4 pt-5 text-info">Sandeep | Ex-Google, IIT Kharagpur Alum</p>
              
            </div>
            <div className="carousel-item">
              <a href="https://www.linkedin.com/posts/nachson_hyderabad-local-news-updates-nearby-news-activity-6757199139043459072-PNNX/">
                <img src={feedback3} alt=""/>
              </a>
              <p className="h4 pt-5 text-info">Vinay Kumar | Ex-IRS and Solarpreneur</p>
              
            </div>
            <div className="carousel-item">
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:6757647641515040768/">
                <img src={feedback4} alt=""/>
              </a>
              <p className="h4 pt-5 text-info">Akhil Neelam | Central Square Foundation</p>
              
            </div>
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
