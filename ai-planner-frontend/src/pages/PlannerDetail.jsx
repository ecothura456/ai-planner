import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlanById } from "../api/planApi";

function PlannerDetail() {
  const { id } = useParams();

  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPlan = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getPlanById(id);
        setPlan(response.data);
      } catch (err) {
        console.error("Planner Detail Error:", err);
        setError("Failed to load the travel plan.");
      } finally {
        setLoading(false);
      }
    };

    loadPlan();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div
          className="spinner-border text-primary mb-3"
          role="status"
        ></div>

        <h5 className="text-primary">
          Loading Travel Plan...
        </h5>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          {error}
        </div>

        <Link
          to="/saved-plans"
          className="btn btn-outline-primary rounded-pill"
        >
          ← Back to Saved Plans
        </Link>
      </div>
    );
  }

  // No Plan
  if (!plan) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">
          Plan not found.
        </div>

        <Link
          to="/saved-plans"
          className="btn btn-outline-primary rounded-pill"
        >
          ← Back to Saved Plans
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">

      {/* Back Button */}
      <Link
        to="/saved-plans"
        className="btn btn-outline-primary rounded-pill mb-4"
      >
        ← Back to Saved Plans
      </Link>

      {/* Page Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-2">
          ✈️ {plan.departure} → {plan.arrival}
        </h2>

        <p className="text-muted mb-0">
          Your saved AI travel plan
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="row g-4">

        {/* ========================= */}
        {/* LEFT : SUMMARY */}
        {/* ========================= */}
        <div className="col-lg-5">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              {/* Summary Title */}
              <div className="d-flex align-items-center mb-4">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                >
                  📋
                </div>

                <div>
                  <h4 className="fw-bold mb-0">
                    Trip Summary
                  </h4>

                  <small className="text-muted">
                    Your travel information
                  </small>
                </div>

              </div>

              {/* Route */}
              <div className="mb-4">

                <small className="text-muted">
                  ROUTE
                </small>

                <h5 className="fw-bold mt-1">
                  📍 {plan.departure} → {plan.arrival}
                </h5>

              </div>

              {/* Dates */}
              <div className="mb-4">

                <small className="text-muted">
                  TRAVEL DATES
                </small>

                <div className="mt-2">

                  <div className="d-flex justify-content-between mb-2">
                    <span>
                      Start Date
                    </span>

                    <strong>
                      {plan.startDate}
                    </strong>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>
                      End Date
                    </span>

                    <strong>
                      {plan.endDate}
                    </strong>
                  </div>

                </div>

              </div>

              <hr />

              {/* Budget */}
              <div className="mb-4">

                <small className="text-muted">
                  BUDGET
                </small>

                <h4 className="fw-bold text-primary mt-1">
                  💴 ¥{Number(plan.budget).toLocaleString()}
                </h4>

              </div>

              {/* Transportation */}
              <div className="mb-4">

                <small className="text-muted">
                  TRANSPORTATION
                </small>

                <div className="mt-2">

                  <span className="badge bg-light text-dark border px-3 py-2 fs-6">
                    🚆 {plan.transportation}
                  </span>

                </div>

              </div>

              {/* Interests */}
              <div className="mb-4">

                <small className="text-muted">
                  INTERESTS
                </small>

                <p className="mt-2 mb-0">
                  {plan.interests || "No interests selected."}
                </p>

              </div>

              {/* Additional Request */}
              {plan.additionalRequest && (
                <>
                  <hr />

                  <div className="mb-2">

                    <small className="text-muted">
                      ADDITIONAL REQUEST
                    </small>

                    <p className="mt-2 mb-0">
                      {plan.additionalRequest}
                    </p>

                  </div>
                </>
              )}

            </div>

          </div>

        </div>


        {/* ========================= */}
        {/* RIGHT : AI PLAN */}
        {/* ========================= */}
        <div className="col-lg-7">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4 d-flex flex-column">

              {/* AI Header */}
              <div className="d-flex align-items-center mb-4">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                >
                  🤖
                </div>

                <div>
                  <h4 className="fw-bold mb-0">
                    AI Travel Plan
                  </h4>

                  <small className="text-muted">
                    Your personalized itinerary
                  </small>
                </div>

              </div>

              {/* AI Result */}
              <div
                className="bg-light rounded-4 p-4 flex-grow-1"
                style={{
                  maxHeight: "650px",
                  overflowY: "auto",
                }}
              >

                <pre
                  className="mb-0"
                  style={{
                    whiteSpace: "pre-wrap",
                    fontFamily: "inherit",
                    lineHeight: "1.8",
                    background: "transparent",
                    border: "none",
                    fontSize: "15px",
                  }}
                >
                  {plan.aiResult}
                </pre>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Buttons */}
      <div className="d-flex justify-content-between flex-wrap gap-2 mt-4">

        <Link
          to="/saved-plans"
          className="btn btn-outline-secondary rounded-pill px-4"
        >
          ← Saved Plans
        </Link>

        <Link
          to="/create"
          className="btn btn-primary rounded-pill px-4"
        >
          + Create New Plan
        </Link>

      </div>

    </div>
  );
}

export default PlannerDetail;

