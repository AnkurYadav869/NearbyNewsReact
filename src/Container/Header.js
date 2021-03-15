import logo from '../Images/nearbynews.png';
const Header = ({ report, parentCallBack }) => {
	// TODO : Use props destructuring : https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0
	//TODO :  another Good Read https://americanexpress.io/clean-code-dirty-code/
	// DONE...
	console.log(report);
	const Cityselect = (e) => {
		console.log(e.target.value);
		parentCallBack(e.target.value);
	};

	return (
		<div>
			<div className='d-flex justify-content-between align-items-center'>
				<img src={logo} alt='Image1' />
				<div className='text-muted'>
					<div className='d-flex justify-content-between  text-center'>
						<div>
							<select className='city form-control' onChange={Cityselect} id=''>
								<option value='Hyderabad'>Hyderabad</option>
								<option value='Chennai'>Chennai</option>
								<option value='Mumbai'>Mumbai</option>
								<option value='New Delhi'>New Delhi</option>
							</select>
							<p className='lead'>{report.Temp && report.Temp + 'C'}</p>
							{/* // TODO : 'C'  is visible even if report.Temp is null, like below line */}
							{/* <p className="lead"> </p>{props.report.Temp && props.report.Temp + 'C'} </p>  */}
						</div>
						<img src={report.icon} alt='' width='70' />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
