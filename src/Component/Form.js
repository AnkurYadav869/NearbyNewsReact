// import InputText from './InputText';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const Form = () => {
	// TODO : Implement form Submission to some dummy api and redirection to a Thankyou page https://jsonplaceholder.typicode.com/
	// instad created a modal...
	const schema = yup.object().shape({
		pincode: yup
			.string()
			.matches(/^([0-9]*)$/)
			.min(6)
			.max(6),
		email: yup.string().email().required(),
	});
	const { register, handleSubmit } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});
	const history = useHistory();
	const onSubmit = (data) => {
		console.log(data);
		history.push('/Thanks');
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='my-5'>
			<div className='row no-gutter'>
				<div className='col-md-6'>
					<select className='form-control' name='city' ref={register}>
						<option value='Hyderabad'>Hyderabad</option>
						<option value='Chennai'>Chennai</option>
						<option value='Mumbai'>Mumbai</option>
						<option value='New Delhi'>New Delhi</option>
					</select>
				</div>
				<div className='col-md-6'>
					<input
						type='text'
						name='pincode'
						className='form-control'
						placeholder='Pincode'
						ref={register}
					/>
				</div>
				<div className='col-md-6'>
					<input
						type='text'
						name='email'
						className='form-control'
						placeholder='Email'
						ref={register}
					/>
				</div>
				<div className='col-md-6'>
					<input
						type='submit'
						value='Try it'
						className='btn btn-danger w-100'
					/>
				</div>
			</div>
		</form>
	);
};
export default Form;
