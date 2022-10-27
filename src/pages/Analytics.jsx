import React from "react";

const Analytics = () => {
  return (
    <>
      <div className="analytics">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card " style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    How much you have invested so far?
                  </h5>
                  <div className="d-flex justify-content-center">
                    <img
                      src="assets/images/earn.png"
                      className="img-fluid w-25"
                      alt=""
                    />
                  </div>
                  <h2 className="card-text">Total Investment</h2>
                  <button>$0</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card text-center" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Risk Meter</h5>
                  <div className="d-flex justify-content-center position-relative">
                    <img
                      src="assets/images/meter.png"
                      style={{ width: "97%" }}
                      className="img-fluid "
                      alt=""
                    />
                    <div className="position-absolute">
                      <img
                        src="assets/images/after.png"
                        style={{ width: "97%" }}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card text-center" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    How much you have withdrawn so far?
                  </h5>
                  <div className="d-flex justify-content-center">
                    <img
                      src="assets/images/lose.png"
                      className="img-fluid w-25"
                      alt=""
                    />
                  </div>
                  <h2 className="card-text">Total Earned</h2>
                  <button>$0</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 col-12">
              <div className="card card_2  " style={{height: '250px'}}>
                <div
                  className="text-center mt-3"
                  style={{ display: "inline-block" }}
                >
                  <a>Recent Trading History</a>
                </div>
                <div className="card-body">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th scope="col">Transaction Hash</th>
                        <th scope="col">Block Number</th>
                        <th scope="col">Method</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">$ SAFUU</th>
                        <th scope="col">$ BNB</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
