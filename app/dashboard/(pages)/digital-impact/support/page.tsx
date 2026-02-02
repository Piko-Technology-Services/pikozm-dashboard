"use client";

import { useEffect, useState } from "react";

interface Donation {
    id: number;
    name: string;
    email: string;
    message: string;
    focus_area: string;
    amount: number;
    currency: string;
    status: "paid" | "pending" | "processing" | "failed";
    reference: string;
    created_at: string;
}

export default function DonationsPage() {
    const [donations, setDonations] = useState<Donation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/support`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setDonations(data.data.donations.data);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const statusBadge = (status: string) => {
        switch (status) {
            case "paid":
                return "badge-success";
            case "pending":
                return "badge-danger";
            case "processing":
                return "badge-warning";
            case "failed":
                return "badge-dark";
            default:
                return "badge-secondary";
        }
    };

    if (loading) {
        return <p>Loading donations...</p>;
    }

    return (

        <>
        <div className="d-xl-flex justify-content-between align-items-start">
        <h2 className="text-dark font-weight-bold mb-2"> Overview Support </h2>
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
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Donations</h4>
                    <p className="card-description">
                        Digital Impact donation records
                    </p>

                    {/* ================= DESKTOP TABLE ================= */}
                    <div className="d-none d-md-block">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Donor</th>
                                        <th>Focus Area</th>
                                        <th>Message</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {donations.map((donation) => (
                                        <tr key={donation.id}>
                                            <td>
                                                {donation.name}
                                                <br />
                                                <small className="text-muted">{donation.email}</small>
                                            </td>

                                            <td>{donation.focus_area}</td>

                                            <td className="text-wrap" style={{ maxWidth: 200 }}>
                                                {donation.message || "—"}
                                            </td>

                                            <td className="text-success font-weight-bold">
                                                {donation.currency}{" "}
                                                {donation.amount.toLocaleString()}
                                            </td>

                                            <td>
                                                <label
                                                    className={`badge ${statusBadge(donation.status)}`}
                                                >
                                                    {donation.status}
                                                </label>
                                            </td>

                                            <td>
                                                {new Date(
                                                    donation.created_at
                                                ).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ================= MOBILE CARDS ================= */}
                    <div className="d-block d-md-none">
                        {donations.map((donation) => (
                            <div key={donation.id} className="card mb-3 shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-1">{donation.name}</h6>
                                        <label
                                            className={`badge ${statusBadge(donation.status)}`}
                                        >
                                            {donation.status}
                                        </label>
                                    </div>

                                    <small className="text-muted">{donation.email}</small>

                                    <hr className="my-2" />

                                    <p className="mb-1">
                                        <strong>Focus:</strong> {donation.focus_area}
                                    </p>

                                    {donation.message && (
                                        <p className="mb-1 text-muted small">
                                            “{donation.message}”
                                        </p>
                                    )}

                                    <div className="d-flex justify-content-between mt-2">
                                        <span className="text-success font-weight-bold">
                                            {donation.currency}{" "}
                                            {donation.amount.toLocaleString()}
                                        </span>

                                        <small className="text-muted">
                                            {new Date(
                                                donation.created_at
                                            ).toLocaleDateString()}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {donations.length === 0 && (
                        <p className="text-center mt-3">No donations found</p>
                    )}
                </div>
            </div>
        </div>
        </>
        
    );

}
