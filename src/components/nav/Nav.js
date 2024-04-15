const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Notly</a>
        <div className="d-flex">
          <a className="btn btn-outline-success me-2" href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
