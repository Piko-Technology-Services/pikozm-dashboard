import React from "react";

export default function TalentPage() {
  return (
    <div className="dashboard-page">
      <h1 className="text-dark font-weight-bold mb-4">Talent</h1>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body text-center">
              <img
                src="/assets/images/faces/face1.jpg"
                alt="Talent"
                className="img-fluid rounded-circle mb-3"
                width={80}
                height={80}
              />
              <h5 className="card-title">Jane Doe</h5>
              <p className="card-text">Frontend Developer | React, Next.js</p>
              <button className="btn btn-success btn-sm">View Profile</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body text-center">
              <img
                src="/assets/images/faces/face2.jpg"
                alt="Talent"
                className="img-fluid rounded-circle mb-3"
                width={80}
                height={80}
              />
              <h5 className="card-title">John Smith</h5>
              <p className="card-text">Data Scientist | Python, ML, AI</p>
              <button className="btn btn-success btn-sm">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
