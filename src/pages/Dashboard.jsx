import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard_bg">
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-4 col-12 ">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div className="card text-center" >
                    <div className="card-body">
                      <h5 className="card-title">
                        Market Value of Treasury Asset
                      </h5>
                      <p className="card-text">$58,924,415</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-12">
                  <div className="card text-center" >
                    <div className="card-body">
                      <h5 className="card-title">Total Supply</h5>
                      <p className="card-text">61,634,066.59</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-12">
                  <div className="card text-center" >
                    <div className="card-body">
                      <h5 className="card-title">Circulating Supply</h5>
                      <p className="card-text">45,339,537.92</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div
                className="card text-center"
                style={{ height: "95%" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="#" className="mt-3">
                      SAFUU PRICE
                    </a>
                  </h5>
                  <p className="card-text">$1.56</p>
                  <div className="timer d-flex align-items-center justify-content-center">
                    <span>00:12:15</span>
                  </div>
                  <h4 className="text-white mt-3" style={{ fontSize: "20px" }}>
                    Rebasing...
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="row">
                <div className="col-md-12 col-12">
                  <div className="card text-center" >
                    <div className="card-body">
                      <h5 className="card-title">SAFUU Insurance Fund Value</h5>
                      <p className="card-text">$2,923</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-12">
                  <div className="card text-center" >
                    <div className="card-body">
                      <h5 className="card-title">MarketCap</h5>
                      <p className="card-text">$71,159,479</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-12">
                  <div className="card text-center" >
                    <div className="card-body">
                      <h5 className="card-title">Pool Value</h5>
                      <p className="card-text">$9,216,521</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4 col-12">
              <div
                className="card text-center"
                style={{ boxShadow: "0 3px 8px #34c439" }}
              >
                <div className="card-body">
                  <h5 className="card-title"># Value of FirePit</h5>
                  <p className="card-text">16,294,588.16 SAFUU</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div
                className="card text-center"
                style={{ boxShadow: "0 3px 8px #34c439" }}
              >
                <div className="card-body">
                  <h5 className="card-title">$ Value of FirePit</h5>
                  <p className="card-text">$25,574,057</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div
                className="card text-center"
                style={{ boxShadow: "0 3px 8px #34c439" }}
              >
                <div className="card-body">
                  <h5 className="card-title">% FirePit : Supply</h5>
                  <p className="card-text">26.43%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
