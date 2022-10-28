import React,{useState} from "react";
import Slider from "@mui/material/Slider";

const Calculator = () => {
  const [data, setdata] = useState([]);
  
  return (
    <>
      <div className="calculator">
        <div className="container" data-aos="zoom-in">
          <div className="card  ">
            <div className="card-title pt-3 px-4">
              <h4>Calculator</h4>
              <p>Estimate your returns</p>
            </div>
            <div className="card-body ">
              <div className="row text-center">
                <div className="col-md-4 col-12">
                  <h2>SAFUU Price</h2>
                  <p>$1.56</p>
                </div>
                <div className="col-md-4 col-12">
                  <h2>Current APY</h2>
                  <p>383,025.8%</p>
                </div>
                <div className="col-md-4 col-12">
                  <h2>Your SAFUU Balance</h2>
                  <p>0 SAFUU</p>
                </div>
              </div>
              <div className="row input_field">
                <div className="col-md-6">
                  <label htmlFor="amount">SAFUU Amount</label>
                  <br />
                  <input
                    type=""
                    className="form-control"
                    value={data}
                    placeholder="Amount"
                    onChange={(e) => setdata(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="amount">APY (%)</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    value={383025.8}
                    placeholder="Amount"
                  />
                </div>
              </div>
              <div className="row input_field mt-3">
                <div className="col-md-6">
                  <label htmlFor="amount">SAFUU price at purchase ($)</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    value={1.54}
                    placeholder="Amount"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="amount">Future SAFUU market ($)</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    value={1.54}
                    placeholder="Amount"
                  />
                </div>
              </div>
              <div className="row range mt-4">
                <div className="col-md-6 col-12">
                  <label htmlFor="amount">
                    <span>30 days</span> First Year : 0.02355% Per EPOCH
                  </label>
                  <br />
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    className="slider"
                  />
                </div>
                <div className="col-md-6 col-12">
                  <label htmlFor="amount">
                    Second Year : 0.00211% Per EPOCH
                  </label>
                  <br />
                  <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    className="slider"
                  />
                </div>
              </div>
              <div className="card_bottom mt-3">
                <div className=" px-2 d-flex justify-content-between">
                  <h1>Your initial investment</h1>
                  <h2>{`$${data * 1.5}`}</h2>
                </div>
                <div className="px-2 d-flex justify-content-between">
                  <h1>Current wealth</h1>
                  <h2>{`$${data * 2.5}`}</h2>
                </div>
                <div className=" px-2 d-flex justify-content-between">
                  <h1>SAFUU rewards estimation</h1>
                  <h2>{`$${data * 1.2} SAFUU`}</h2>
                </div>
                <div className=" px-2 d-flex justify-content-between">
                  <h1>Potential return</h1>
                  <h2>{`$${data * 3.5}`}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
