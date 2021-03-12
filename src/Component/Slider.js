const Slider = ({name, imgLink, feedback, text}) =>{
  return (
    
        <div className={name}>
              <a href={imgLink}>
                <img src={feedback} alt="" />
              </a>
              <p className="h4 pt-5 text-info">{text}</p>

        </div>
    
  )
}

export default Slider
