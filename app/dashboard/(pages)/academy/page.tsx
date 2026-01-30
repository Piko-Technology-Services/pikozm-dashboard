import React from "react";

export default function AcademyPage() {
  return (
    <div className="dashboard-page">
      <h1 className="text-dark font-weight-bold mb-4">Academy</h1>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Web Development Course</h5>
              <p className="card-text">Learn HTML, CSS, JavaScript, and React with hands-on projects.</p>
              <button className="btn btn-primary btn-sm">View Course</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Data Science Course</h5>
              <p className="card-text">Learn Python, Machine Learning, and Data Visualization techniques.</p>
              <button className="btn btn-primary btn-sm">View Course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
