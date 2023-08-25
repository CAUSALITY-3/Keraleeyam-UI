import React, { useState } from "react";
import "./Modal.scss";

export default function Modal({ modal, toggleModal, modalTitle,children }: any) {
  //   const toggleModal = () => {
  //     setModal(!modal);
  //   };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{modalTitle}</h2>
           
            {children}
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
