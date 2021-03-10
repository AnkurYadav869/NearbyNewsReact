import logo from '../Images/nearbynews.png'
const Header = (props) =>{
  console.log(props)
  return (
  <div>
    <div className="d-flex justify-content-between align-item-center">
    <img src={logo} alt="Image1"/>
    <div className="text-muted">
      <div className="d-flex">
        <div>
            <p className="lead">{props.report.location}</p>
            <p className="lead">{props.report.Temp} C</p>

        </div>
      <img src={props.report.icon} alt=""/>

      </div>
    </div>

    </div>
  </div>
  )
}
export default Header;