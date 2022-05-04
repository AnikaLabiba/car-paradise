import React from 'react';
import './ReactModal.css'

const ReactModal = ({ message, onDialog, nameProduct }) => {
    return (
        <div className='modal-container '
            onClick={() => onDialog(false)} >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    background: "white",
                    padding: "20px",
                    borderRadius: "10px"
                }}
            >
                <h3 stlye={{ color: "#111", fontSize: "16px" }}>{message}</h3>
                <h1 style={{ color: "blue", fontSize: "24px" }}>{nameProduct}</h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                        onClick={() => onDialog(true)}
                        style={{
                            background: "red",
                            color: "white",
                            padding: "10px",
                            marginRight: "4px",
                            border: "none",
                            cursor: "pointer"
                        }}
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => onDialog(false)}
                        style={{
                            background: "green",
                            color: "white",
                            padding: "10px",
                            marginLeft: "4px",
                            border: "none",
                            cursor: "pointer"
                        }}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReactModal;