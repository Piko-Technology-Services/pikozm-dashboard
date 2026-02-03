"use client";

import { useEffect, useState } from "react";
import DashboardSkeleton from "../../components/DashboardSkeleton";

const API = process.env.NEXT_PUBLIC_API_URL;

type Stats = {
  donations: number;
  support: number;
  partners: number;
  volunteers: number;
};

type Activity = {
  type: string;
  title: string;
  meta: string;
  date: string;
};

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    donations: 0,
    support: 0,
    partners: 0,
    volunteers: 0,
  });

  const [activity, setActivity] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  async function fetchDashboard() {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API}/dashboard/overview`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const json = await res.json();
      if (!res.ok) throw json;

      setStats(json.data.stats);
      setActivity(json.data.recent_activity);
    } catch (err) {
      console.error("Failed to load dashboard", err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <>
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold text-dark">Dashboard Overview</h2>
        <p className="text-muted">Snapshot of platform activity</p>
      </div>

      {/* Stats */}
      <div className="row g-4">
        <StatCard title="Total Donations" value={stats.donations} icon="mdi-cash" />
        <StatCard title="Support Requests" value={stats.support} icon="mdi-lifebuoy" />
        <StatCard title="Partners" value={stats.partners} icon="mdi-account-group" />
        <StatCard title="Volunteers" value={stats.volunteers} icon="mdi-account-group" />
      </div>

      {/* Activity */}
      <div className="row mt-5">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body text-dark">
              <h5 className="fw-bold mb-3">Recent Activity</h5>

              <ul className="list-group list-group-flush">
                {activity.map((item, i) => (
                  <li key={i} className="list-group-item px-0">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="fw-semibold mb-1">{item.title}</p>
                        <small className="text-muted">{item.meta}</small>
                      </div>
                        <span className={`badge ${badge(item.type)} text-white d-flex align-items-center`} style={{ height: "100%" }}>
                        {item.type}
                        </span>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>

        {/* Quick Actions */}
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="fw-bold mb-3 text-dark">Quick Actions</h5>

                <div className="d-grid gap-3">
                  <a href="#" className="btn btn-outline-dark mb-3 d-flex align-items-center justify-content-between">
                    <span>
                      <i className="mdi mdi-file-chart me-2 mx-3"></i>
                      Donation Statements
                    </span>
                    <i className="mdi mdi-chevron-right"></i>
                  </a>

                  <a href="#" className="btn btn-outline-dark mb-3 d-flex align-items-center justify-content-between">
                    <span>
                      <i className="mdi mdi-bullhorn me-2 mx-3"></i>
                      Manage Support Campaigns
                    </span>
                    <i className="mdi mdi-chevron-right"></i>
                  </a>

                  <a href="#" className="btn btn-outline-dark mb-3 d-flex align-items-center justify-content-between">
                    <span>
                      <i className="mdi mdi-account-multiple-check me-2 mx-3"></i>
                      Review Applications
                    </span>
                    <i className="mdi mdi-chevron-right"></i>
                  </a>

                  <a href="#" className="btn btn-outline-dark mb-3 d-flex align-items-center justify-content-between">
                    <span>
                      <i className="mdi mdi-plus-circle me-2 mx-3"></i>
                      Create New Campaign
                    </span>
                    <i className="mdi mdi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

/* ---------- Helpers ---------- */

function badge(type: string) {
  switch (type) {
    case "donation":
      return "bg-success";
    case "partner":
      return "bg-primary";
    case "volunteer":
      return "bg-info";
    case "support":
      return "bg-warning";
    default:
      return "bg-secondary";
  }
}

function StatCard({ title, value, icon }: any) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card shadow-sm border-0 h-100">
        <div className="card-body d-flex align-items-center">
          <i className={`mdi ${icon} text-dark`} style={{ fontSize: 70 }} />
          <div className="ms-4 text-dark mx-5">
            <p className="mb-1">{title}</p>
            <h1 className="fw-bold">{value}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
