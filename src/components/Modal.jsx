import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setModal } from "../redux/actions/modal";
import "./modal.scss";

const Modal = ({ result, testsCount }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goHome = () => {
    dispatch(setModal(false));
    history.push("/");
  };

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              className="btn-close"
              onClick={() => setModal(false)}
            ></button>
          </div>
          <div className="modal-body d-flex flex-column align-items-center">
            <p className="my-1 h4">
              {result} / {testsCount}
            </p>
            <span className="my-1">OR</span>
            <p className="my-1 h4">
              {((result / testsCount) * 100).toFixed(1)}%
            </p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(setModal(false))}
            >
              OK
            </button>
            <button className="btn btn-danger" onClick={goHome}>
              GO HOME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
