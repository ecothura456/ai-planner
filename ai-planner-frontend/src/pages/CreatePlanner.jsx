import { useState } from "react";
import PlannerForm from "../components/PlannerForm";
import PlanResult from "../components/PlanResult";
import PlanSummary from "../components/PlanSummary";
import { createPlan } from "../api/planApi";

function CreatePlanner() {

  const [result, setResult] = useState(null);
  const [planData, setPlanData] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSave = async () => {
    if (!result || !planData) {
      setMessage("Please generate a travel plan first.");
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
      setMessage("✅ Plan saved successfully!");
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to save the plan.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="container">

        {/* Page Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">AI Travel Planner</h2>
          <p className="text-muted">
            Create your travel plan with AI
          </p>
        </div>

        {/* 3 Columns */}
        <div className="row g-4">

          {/* Column 1 - Planner Form */}
          <div className="col-12 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4">

              <div className="card-header bg-white border-0 pt-4 px-4">
                <h4 className="fw-bold mb-1">
                  Create Plan
                </h4>

                <p className="text-muted small mb-0">
                  Enter your travel information
                </p>
              </div>

              <div className="card-body p-4">
                <PlannerForm
                  setResult={setResult}
                  setPlanData={setPlanData}
                />
              </div>

            </div>
          </div>

          {/* Column 2 - Plan Result */}
          <div className="col-12 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4">

              <div className="card-header bg-white border-0 pt-4 px-4">
                <h4 className="fw-bold mb-1">
                  Plan Result
                </h4>

                <p className="text-muted small mb-0">
                  Your AI-generated travel plan
                </p>
              </div>

              <div className="card-body p-4">
                <PlanResult
                  result={result} />
              </div>

            </div>
          </div>

          {/* Column 3 - Plan Summary */}
          <div className="col-12 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4">

              <div className="card-header bg-white border-0 pt-4 px-4">
                <h4 className="fw-bold mb-1">
                  Plan Summary
                </h4>

                <p className="text-muted small mb-0">
                  Trip and budget summary
                </p>
              </div>

              <div className="card-body p-4">
                <PlanSummary
                  plan={planData}
                  onSave={handleSave}
                  saving={saving} />
              </div>

              {message && (
                <div className="mt-4">
                  <div className="alert alert-info">
                    {message}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CreatePlanner;