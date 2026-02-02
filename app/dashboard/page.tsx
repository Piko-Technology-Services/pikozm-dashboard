"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("digital");
  return (
    <>
      <div className="d-xl-flex justify-content-between align-items-start">
        <h2 className="text-dark font-weight-bold mb-2"> Overview dashboard </h2>
        <div className="d-sm-flex justify-content-xl-between align-items-center mb-2">

          <div className="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
            <button className="btn bg-white dropdown-toggle p-3 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-calendar mr-1"></i>Quick Actions</button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1">
              <h6 className="dropdown-header">Settings</h6>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="d-sm-flex justify-content-between align-items-center transaparent-tab-border">
            <ul className="nav nav-tabs tab-transparent" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "overview" ? "active" : ""}`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "digital" ? "active" : ""}`}
                  onClick={() => setActiveTab("digital")}
                >
                  Digital Impact
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "academy" ? "active" : ""}`}
                  onClick={() => setActiveTab("academy")}
                >
                  Academy
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "talent" ? "active" : ""}`}
                  onClick={() => setActiveTab("talent")}
                >
                  Talent
                </button>
              </li>
            </ul>

            <div className="d-md-block d-none">
              <a href="#" className="text-light p-1">
                <i className="mdi mdi-view-dashboard"></i>
              </a>
              <a href="#" className="text-light p-1">
                <i className="mdi mdi-dots-vertical"></i>
              </a>
            </div>
          </div>

          <div className="tab-content tab-transparent-content mt-3">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="tab-pane fade show active">
                <h3>Overview Content</h3>
                <p>This is where you show a summary or key stats about your platform.</p>
              </div>
            )}

            {/* Digital Impact Tab */}
            {activeTab === "digital" && (
              <div className="tab-pane fade show active">
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card digital-impact-card">
                    <a
                      href="dashboard/digital-impact/partners"
                      className="card text-decoration-none card-hover"
                    >
                      <div className="card-body text-center">
                        <h5 className="mb-2 text-dark font-weight-normal">Partners</h5>
                        <h2 className="mb-4 text-dark font-weight-bold">24</h2>
                        <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
                          <i className="mdi mdi-handshake-outline icon-md absolute-center text-dark"></i>
                        </div>
                        <p className="mt-4 mb-0">Active Partnerships</p>
                        <h3 className="mb-0 font-weight-bold mt-2 text-dark">12 New</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                    <a
                      href="dashboard/digital-impact/support"
                      className="card text-decoration-none card-hover"
                    >
                      <div className="card-body text-center">
                        <h5 className="mb-2 text-dark font-weight-normal">Support Donations</h5>
                        <h2 className="mb-4 text-dark font-weight-bold">$15,200</h2>
                        <div className="dashboard-progress dashboard-progress-2 d-flex align-items-center justify-content-center item-parent">
                          <i className="mdi mdi-cash-multiple icon-md absolute-center text-dark"></i>
                        </div>
                        <p className="mt-4 mb-0">Raised This Month</p>
                        <h3 className="mb-0 font-weight-bold mt-2 text-dark">+8%</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                    <a
                      href="dashboard/digital-impact/team"
                      className="card text-decoration-none card-hover"
                    >
                      <div className="card-body text-center">
                        <h5 className="mb-2 text-dark font-weight-normal">Team Members</h5>
                        <h2 className="mb-4 text-dark font-weight-bold">38</h2>
                        <div className="dashboard-progress dashboard-progress-3 d-flex align-items-center justify-content-center item-parent">
                          <i className="mdi mdi-account-group-outline icon-md absolute-center text-dark"></i>
                        </div>
                        <p className="mt-4 mb-0">Active Members</p>
                        <h3 className="mb-0 font-weight-bold mt-2 text-dark">3 Joined</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                    <a
                      href="dashboard/digital-impact/success-stories"
                      className="card text-decoration-none card-hover"
                    >
                      <div className="card-body text-center">
                        <h5 className="mb-2 text-dark font-weight-normal">Success Stories</h5>
                        <h2 className="mb-4 text-dark font-weight-bold">17</h2>
                        <div className="dashboard-progress dashboard-progress-4 d-flex align-items-center justify-content-center item-parent">
                          <i className="mdi mdi-star-outline icon-md absolute-center text-dark"></i>
                        </div>
                        <p className="mt-4 mb-0">Shared This Year</p>
                        <h3 className="mb-0 font-weight-bold mt-2 text-dark">+2</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Academy Tab */}
            {activeTab === "academy" && (
              <div className="tab-pane fade show active">
                <h3>Academy Content</h3>
                <p>Show your courses, trainings, or learning resources here.</p>
              </div>
            )}

            {/* Talent Tab */}
            {activeTab === "talent" && (
              <div className="tab-pane fade show active">
                <h3>Talent Content</h3>
                <p>Show talent profiles, internships, or recruitment opportunities here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
