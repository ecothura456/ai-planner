import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

        console.log("Plan:", response.data);

        setPlan(response.data);
      } catch (error) {
        console.error("Planner Detail Error:", error);

        setError("Failed to load the travel plan.");
      } finally {
        setLoading(false);
      }
    };

    loadPlan();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          {error}
        </div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">
          Plan not found.
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">
        {plan.departure} → {plan.arrival}
      </h1>

      <div className="card mb-4">
        <div className="card-body">
          <p>
            <strong>Start Date:</strong> {plan.startDate}
          </p>

          <p>
            <strong>End Date:</strong> {plan.endDate}
          </p>

          <p>
            <strong>Budget:</strong>{" "}
            ¥{Number(plan.budget).toLocaleString()}
          </p>

          <p>
            <strong>Transportation:</strong>{" "}
            {plan.transportation}
          </p>

          <p>
            <strong>Interests:</strong>{" "}
            {plan.interests}
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h3 className="mb-3">
            AI Travel Plan
          </h3>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
              lineHeight: "1.8",
            }}
          >
            {plan.aiResult}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default PlannerDetail;