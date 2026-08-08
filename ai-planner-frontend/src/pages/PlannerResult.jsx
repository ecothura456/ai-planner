import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPlan } from "../api/planApi";
import PlanResult from "../components/PlanResult";
import PlanSummary from "../components/PlanSummary";

function PlannerResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result;
  const planData = location.state?.planData;

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSave = async () => {
    if (!result || !planData) {
      setMessage("Plan data is missing.");
      return;
    }

    const planToSave = {
      ...planData,
      budget: Number(planData.budget),
      aiResult: result,
    };

    try {
      setSaving(true);
      setMessage("");

      await createPlan(planToSave);

      setMessage("Plan saved successfully.");

      setTimeout(() => {
        navigate("/saved-plans");
      }, 800);
    } catch (error) {
      console.error(error);
      setMessage("Failed to save the plan.");
    } finally {
      setSaving(false);
    }
  };

  if (!result) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">
          No travel plan was generated.
        </div>

        <Link to="/create" className="btn btn-primary">
          Create a Plan
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">

  <div className="mb-4">
    <h1 className="fw-bold">
      Your AI Travel Plan
    </h1>

    <p className="text-secondary mb-0">
      {planData?.departure} → {planData?.arrival}
    </p>
  </div>

  <div className="row g-4">

    <div className="col-lg-8">
      <PlanResult result={result} />
    </div>

    <div className="col-lg-4">
      <PlanSummary plan={planData} />
    </div>

  </div>

  <div className="mt-4 d-flex gap-2">

    <button
      type="button"
      className="btn btn-success"
      onClick={handleSave}
      disabled={saving}
    >
      {saving ? "Saving..." : "Save Plan"}
    </button>

    <Link
      to="/create"
      className="btn btn-outline-primary"
    >
      Create Another Plan
    </Link>

  </div>

  {message && (
    <div className="alert alert-info mt-3">
      {message}
    </div>
  )}

</div>
  );
}

export default PlannerResult;