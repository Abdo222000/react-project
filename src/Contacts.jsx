function Contacts() {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-evenly gap-4 text-center">
      <div>
        <p className="mb-1 fs-4">
          <i className="fa fa-phone"></i>
        </p>
        <p className="mb-0">Call: +0112345678990</p>
      </div>

      <div>
        <p className="mb-1 fs-4">
          <i className="fa fa-envelope-o"></i>
        </p>
        <p className="mb-0">Email: demo@gmail.com</p>
      </div>

      <div>
        <p className="mb-1 fs-4">
          <i className="fa fa-map-marker"></i>
        </p>
        <p className="mb-0">Location</p>
      </div>
    </div>
  );
}

export default Contacts;
