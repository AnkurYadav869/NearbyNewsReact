const InputText = (props)=> {
return (
<div>
  <input type="text" className = {props.name +" text-primary"} 
         placeholder={props.place} 
         defaultValue ={props.value}
         />
</div>)
}
export default InputText;