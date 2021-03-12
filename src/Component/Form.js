import InputText from './InputText';
import Thanks from './Thanks'
const Form = () => {
  // TODO : Implement form Submission to some dummy api and redirection to a Thankyou page https://jsonplaceholder.typicode.com/ 

 
  return (
    <div>

      <div className="row my-5">
     
        <div className=" col-sm-12 col-md-6">
          <div className="row">
            <div className="col-sm-6 p-1 ">
              {/* // TODO : use select */}
              <select className ="form-control">
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bengalore">bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="New Delhi">New Delhi</option>
              </select>

            </div>
            <div className="col-sm-6 p-1">
              <InputText name="form-control" place="PinCode" value="" />
            </div>
            <div className="col-sm-6 p-1">
              <InputText name="form-control" place="Email" value="" />
            </div>
            <div className="col-sm-6 p-1 ">
              <button className="btn btn-danger w-100" data-toggle="modal" data-target="#exampleModal"> Try it</button>
            </div>

          </div>
        </div>
      <Thanks/>

      </div>
      <div className="row text-center">
        <div className="col m4 s4">
          <p className="font-m  border-end  border-dark">News That Impact You Directly</p>
        </div>
        <div className="col m4 s4">

          <p className="font-m border-end border-start border-dark">News That Matter The Most</p>
        </div>
        <div className="col m4 s4">

          <p className="font-m  border-start border-dark">News That Are Nearby You</p>
        </div>
      </div>

    </div>
  )
}
export default Form