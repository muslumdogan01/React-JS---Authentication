import React, { useState } from "react";
import Control from "../Control/Control";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorerrorMessage] = useState("");

  const handleSubmit = () => {
    setIsloading(true);
    if (!values.email || !values.password) {
      setErrorerrorMessage("Please fill all fields");
      return;
    } else {
      setErrorerrorMessage("");
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async (res) => {
          await navigate("/Content");
          setIsloading(false);
        })
        .catch((error) => {
          setErrorerrorMessage(error.message);
          setIsloading(false);
        });
    }
  };

  if (isLoading) {
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>;
  }

  return (
    <div id="deneme">
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <Control
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            label="Email"
            type="email"
            id="exampleInputEmail1"
            placeholder="Enter your email adress"
          />
          <Control
            onChange={(event) =>
              setValues((prev) => ({ ...prev, password: event.target.value }))
            }
            label="Password"
            id="exampleInputPassword1"
            type="password"
            placeholder="Enter your password"
          />
          <p>
            <b className="text-danger">{errorMessage}</b>
          </p>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
          <p className="mt-2">
            Already have an account?
            <span className="px-2">
              <Link to={"/SingUp"}>Sing Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
