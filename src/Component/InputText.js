const InputText = ({ cname, name, place, value }) => {
	return (
		<div>
			<input
				type='text'
				className={cname + ' text-primary'}
				placeholder={place}
				defaultValue={value}
				name={name}
			/>
		</div>
	);
};
export default InputText;
