import InputText from './InputText';
import { Link } from 'react-router-dom';
const Form = () => {
	// TODO : Implement form Submission to some dummy api and redirection to a Thankyou page https://jsonplaceholder.typicode.com/
	// instad created a modal...

	return (
		<div className='row my-5'>
			<div className='col-sm-6 p-1 '>
				{/* // TODO : use select */}
				<select className='form-control'>
					<option value='Hyderabad'>Hyderabad</option>
					<option value='Bengalore'>Bangalore</option>
					<option value='Chennai'>Chennai</option>
					<option value='Mumbai'>Mumbai</option>
					<option value='New Delhi'>New Delhi</option>
				</select>
			</div>
			<div className='col-sm-6 p-1'>
				<InputText name='form-control' place='PinCode' value='' />
			</div>
			<div className='col-sm-6 p-1'>
				<InputText name='form-control' place='Email' value='' />
			</div>
			<div className='col-sm-6 p-1 '>
				<Link className='btn btn-danger w-100' to='/Thanks'>
					Try it
				</Link>
			</div>
		</div>
	);
};
export default Form;
