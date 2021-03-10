import InputText from './InputText'
const Social = () => {
  return (
    <div className=" my-5">
      <div className="container py-5 pt-5">
          <h3 className=" text-center">We take pride in attracting readers from organizations like...</h3>
      </div>

      <h3 className="text-center">join the tribe now !</h3>

     <div className="form-inline justify-content-center my-4">
        <InputText name="form-control m-1" place="PinCode" value = ""/>
        <InputText name="form-control m-1" place="Email" value = ""/>
        <button className="btn btn-danger m-1 ">Try it</button>
     </div>
</div>
   
  )
}

export default Social;