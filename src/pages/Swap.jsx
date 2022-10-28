import React from "react";
import { GrRotateRight } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const Swap = () => {
  return (
    <>
      <div className="swap">
        <div className="container d-flex justify-content-center " data-aos="zoom-in">
          <div>
            <div
              className="card"
              style={{ width: "28rem", boxShadow: "0 3px 8px #34c439" }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <p>S w a p</p>
                  <div>
                    <GrRotateRight
                      size={24}
                      color="#d4d2d1"
                      style={{ cursor: "pointer" }}
                    />
                    <AiFillSetting
                      className="mx-1"
                      size={24}
                      color="#d4d2d1"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <small>Fast, Secure, KYC-Free.</small>
                <div className="input_box mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <p>From:</p>
                    <strong>Balance: 0</strong>
                  </div>
                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <p className="value">0.00</p>
                    <small className="mx-2">
                      <span className="mx-2">Max</span> BNB
                    </small>
                  </div>
                </div>
                <div className="text-center py-3">
                  <AiOutlineArrowDown
                    color="white"
                    style={{ cursor: "pointer" }}
                    size={22}
                  />
                </div>
                <div className="input_box mt-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <p>To:</p>
                    <strong>Balance: 0</strong>
                  </div>
                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <p className="value">0.00</p>
                    <small className="mx-2 d-flex justify-content-end">
                      <span className="mx-2" style={{ width: "8%" }}>
                        <img
                          src="assets/images/logo.png"
                          className="img-fluid"
                          alt=""
                        />
                      </span>
                      SAFUU
                    </small>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center px-3 py-2">
                  <small>Slippage Tolerance</small>
                  <span
                    style={{
                      color: "#47bd4b",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    0.1%
                  </span>
                </div>
                <button>Connect Wallet</button>
                <div className="input_box mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Minimum received</p>
                    <strong>0 SAFUU</strong>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Price Impact</p>
                    <strong>0%</strong>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Liquidity Provider Fee</p>
                    <strong>0% - No Fee</strong>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Route</p>
                    <strong>SAFUU BNB</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swap;
