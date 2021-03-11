import logo from '../Images/nearbynews.png'
const Header = (props) => {
  // TODO : Use props destructuring : https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0
  //TODO :  another Good Read https://americanexpress.io/clean-code-dirty-code/ 
  console.log(props)
  return (
    <div>
      <div className="d-flex justify-content-between align-item-center">
        <img src={logo} alt="Image1" />
        <div className="text-muted">
          <div className="d-flex">
            <div>
              <p className="lead">{props.report.location}</p>
              <p className="lead">{props.report.Temp} C</p>
              {/* // TODO : 'C'  is visible even if report.Temp is null, like below line */}
              {/* <p className="lead"> </p>{props.report.Temp && props.report.Temp + 'C'} </p>  */}
            </div>
            <img src={props.report.icon} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}
export default Header;