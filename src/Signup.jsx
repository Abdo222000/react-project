function Signup() {
  return (
    <div>
      <h5 className="fw-bold mb-3">SIGN UP TO OUR NEWSLETTER</h5>

      <div className="input-group mb-3 d-flex flex-column flex-md-row justify-content-evenly gap-4 text-center">
        <div className="w-100">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Your Email"
        />
        </div>
        <div className="w-100 text-start">
          <button className="btn btn-info text-white">Subscribe</button>
        </div>
      </div>

      <div className="d-flex gap-3 fs-4">
        <a href="#" className="text-white">
          <i className="fa fa-facebook-official"></i>
        </a>
        <a href="#" className="text-white">
          <i className="fa fa-twitter-square"></i>
        </a>
        <a href="#" className="text-white">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#" className="text-white">
          <i className="fa fa-linkedin-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Signup;
