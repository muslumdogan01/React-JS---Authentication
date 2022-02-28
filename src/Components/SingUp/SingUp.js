import React, { useState } from "react";
import Control from "../Control/Control";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const SingUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errorMessage, setErrorerrorMessage] = useState("");

  const handleSubmit = () => {
    if (!values.email || !values.password || !values.name) {
      setErrorerrorMessage("Please fill all fields");
      return;
    } else {
      setErrorerrorMessage("");
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then( async(res) => {
          const user = res.user;
         await updateProfile(user, {
            displayName: values.name,
          });
          navigate("/SingUpSuccess");
        })
        .catch((error) => {
          setErrorerrorMessage(error.message);
        });
    }

    console.log(values);
  };

  return (
    <div id="deneme">
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">SingUp</h5>
          <Control
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
            label="Name"
            placeholder="Enter your Name"
          />
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
            SingUp
          </button>
          <p className="mt-2">
            Already have an account?
            <span className="px-2">
              <Link to={"/Login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
