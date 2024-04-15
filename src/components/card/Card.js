import React from "react";

const Card = () => {
  return (
    <div className="container mt-5 mb-3">
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  {" "}
                  <i className="bx bxl-mailchimp"></i>{" "}
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Usuarios</h6> <span>Registrados</span>
                </div>
              </div>
              <div className="badge">
                {" "}
                <span>Design</span>{" "}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Plan
                <br />
                Basico
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "87%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  {" "}
                  <span className="text1">
                    no se que poner <span className="text2">bla bla</span>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  {" "}
                  <i className="bx bxl-dribbble"></i>{" "}
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Usuarios</h6> <span>Registrados</span>
                </div>
              </div>
              <div className="badge">
                {" "}
                <span>Product</span>{" "}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Plan
                <br />
                Pro
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "42%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  {" "}
                  <span className="text1">
                    no se que poner <span className="text2">bla bla</span>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  {" "}
                  <i className="bx bxl-reddit"></i>{" "}
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Usuarios</h6> <span>Registrados</span>
                </div>
              </div>
              <div className="badge">
                {" "}
                <span>Design</span>{" "}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Plan <br />
                Master
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "13%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="mt-3">
                  {" "}
                  <span className="text1">
                    no se que poner <span className="text2">bla bla</span>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
