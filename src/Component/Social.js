import Form from './Form';
const Social = () => {
	// TODO : Implement form Submission to some dummy api and redirection to a Thankyou page https://jsonplaceholder.typicode.com/
	//
	return (
		<div className=' my-5'>
			<div className='container py-5 pt-5'>
				<h3 className=' text-center'>
					We take pride in attracting readers from organizations like...
				</h3>
			</div>

			<h3 className='text-center'>join the tribe now !</h3>

			<div className='w-75 mx-auto'>
				<Form />
			</div>
		</div>
	);
};

export default Social;
