import React from "react";

const Account = () => {
  return (
    <>
      <div className="account">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-4 col-12">
              <div className="card text-center" >
                <div className="card-body">
                  <h5 className="card-title">Your Balance</h5>
                  <p className="card-text">$0</p>
                  <h4>0 SAFUU</h4>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-4 col-12">
              <div className="card text-center" >
                <div className="card-body">
                  <h5 className="card-title">APY</h5>
                  <p className="card-text">383,025.8%</p>
                  <h4>Daily ROI 2.28%</h4>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xl-4 col-12">
              <div className="card text-center" >
                <div className="card-body">
                  <h5 className="card-title">Next Rebase:</h5>
                  <p className="card-text">00:02:12</p>
                  <h4>Rebasing...</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 col-lg-12 col-xl-12 col-12">
            <div className="card ">
                <div className="card-body ">
                 <div className="py-2 px-2 d-flex justify-content-between">
                    <h1>Current SAFUU Price</h1>
                    <h2>$1.56</h2>
                 </div>
                 <div className="py-2 px-2 d-flex justify-content-between">
                    <h1>Next Reward Yield</h1>
                    <h2>0 SAFUU</h2>
                 </div>
                 <div className="py-2 px-2 d-flex justify-content-between">
                    <h1>Next Reward Amount USD</h1>
                    <h2>$0</h2>
                 </div>
                 <div className="py-2 px-2 d-flex justify-content-between">
                    <h1>Next Reward Yield</h1>
                    <h2>0.02355%</h2>
                 </div>
                 <div className="py-2 px-2 d-flex justify-content-between">
                    <h1>ROI(1-Day Rate) USD</h1>
                    <h2>$0</h2>
                 </div>
                 <div className="py-2 px-2 d-flex justify-content-between">
                    <h1>ROI(5-Day Rate)</h1>
                    <h2>11.96%</h2>
                 </div>
                 <div className="py-2 px-2 d-flex justify-content-between">
                    <h1>ROI(5-Day Rate) USD</h1>
                    <h2>$0</h2>
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

export default Account;
