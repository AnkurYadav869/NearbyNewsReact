import Img from '../Images/hyd.png'
const Showcase = () => {
  return (
    <div>
      <div className="shadow-lg my-3 bg-primary">
        <div className="row">
          <div className="col-sm-6 align-self-center text-center pl-5">
            <p className="lead text-white ">
              Hyderabad’s Hot News Served Hot
                </p>
            <p className="lead text-white">
              Social Media And News Media Houses Are Updating You With State And National News.

                </p>
            <p className="lead text-white">

              Are You Getting Updated On What’s Happening In The City?
                </p>
            <button className="btn btn-warning px-5 text-white">Check It</button>
          </div>
          <div className="col-sm-6">
            <img src={Img} alt="" className="responsive-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase;