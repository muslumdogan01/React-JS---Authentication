import React from "react";

const Control = (props) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          {props.label && (
            <label for="exampleInputEmail1" className="form-label">
              {props.label}
            </label>
          )}
          <input
            type={props.type}
            className="form-control"
            id={props.id}
            aria-describedby="emailHelp"
            {...props}
          />
        </div>
      </form>
    </div>
  );
};

export default Control;
