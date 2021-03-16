import React from 'react';

const Thanks = ({ email }) => {
	return (
		<div>
			<p className='lead'>
				Thank for your submission. An confirmation is sent to {email} register
				email.
			</p>
		</div>
	);
};

export default Thanks;
