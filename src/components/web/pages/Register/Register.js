import React from "react";
import register_image from "../../../../assets/img/register-image.jpg";

function Register() {
  return (
    <>
      <div className="container mt-5">
        <dir className="row mt-5 d-flex justify-content-center align-items-center">
          <div className="col-md-12 mt-5 ">
            <div className="card my-5" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <div className="card-body">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-5">
                    <img src={register_image} alt="login" width={500} />
                  </div>
                  <div className="col-md-7">
                    <h1 className="my-5">Sign Up</h1>
                    <h4>Please enter your correct information below</h4>
                    <form>
                      <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" aria-describedby="emailHelp" />
                      </div>
                      <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />
                      </div>
                      <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Enter Password" id="exampleInputPassword1" />
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                    <h1 className="mt-5">Already have an account?</h1>
                    <h4>
                      You can login{" "}
                      <a style={{ textDecoration: "underline", textDecorationColor: "blue", color: "blue" }} href="/login">
                        here
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dir>
      </div>
    </>
  );
}

export default Register;
