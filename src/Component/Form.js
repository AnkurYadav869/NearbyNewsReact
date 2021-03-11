import InputText from './InputText';
const Form = () => {
  // TODO : Implement form Submission to some dummy api and redirection to a Thankyou page https://jsonplaceholder.typicode.com/

  return (
    <div>
      <div className="row my-5">
        <div className=" col-sm-12 col-md-6">
          <div className="row">
            <div className="col-sm-6 p-1 ">
              {/* // TODO : use select */}
              <InputText name="form-control" place="" value="Bengalore" />

            </div>
            <div className="col-sm-6 p-1">
              <InputText name="form-control" place="PinCode" value="" />
            </div>
            <div className="col-sm-6 p-1">
              <InputText name="form-control" place="Email" value="" />
            </div>
            <div className="col-sm-6 p-1 ">
              <button className="btn btn-danger w-100"> Try it</button>
            </div>

          </div>
        </div>

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