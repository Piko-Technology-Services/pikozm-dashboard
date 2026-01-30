import React from "react";

export default function DigitalImpactPage() {
  return (
    <div className="dashboard-page">
      <h1 className="text-dark font-weight-bold mb-4">Digital Impact</h1>

      <div className="row">
        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="mb-2 text-dark font-weight-normal">Orders</h5>
              <h2 className="mb-4 text-dark font-weight-bold">932.00</h2>
              <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
                <i className="mdi mdi-lightbulb icon-md absolute-center text-dark"></i>
              </div>
              <p className="mt-4 mb-0">Completed</p>
              <h3 className="mb-0 font-weight-bold mt-2 text-dark">5443</h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="mb-2 text-dark font-weight-normal">Unique Visitors</h5>
              <h2 className="mb-4 text-dark font-weight-bold">756,00</h2>
              <div className="dashboard-progress dashboard-progress-2 d-flex align-items-center justify-content-center item-parent">
                <i className="mdi mdi-account-circle icon-md absolute-center text-dark"></i>
              </div>
              <p className="mt-4 mb-0">Increased since yesterday</p>
              <h3 className="mb-0 font-weight-bold mt-2 text-dark">50%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
