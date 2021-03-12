const InputText = ({name, place, value})=> {
return (
<div>
  <input type="text" className = {name +" text-primary"} 
         placeholder={place} 
         defaultValue ={value}
         />
</div>)
}
export default InputText;