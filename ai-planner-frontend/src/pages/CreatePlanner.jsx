import { useState } from "react";
import { Link } from "react-router-dom";
import PlannerForm from "../components/PlannerForm";
import PlanResult from "../components/PlanResult";
import PlanSummary from "../components/PlanSummary";
import { createPlan } from "../api/planApi";
import "./CreatePlanner.css";

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

      setMessage("✓ Plan saved successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Failed to save the plan.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="create-planner-page">

      {/* TOP */}
      <div className="planner-page-container">

        <div className="planner-mini-nav">
          <Link to="/">✈ AI Planner</Link>

          <div className="planner-mini-links">
            <Link to="/saved-plans" className="back-home">
              Saved Plans
            </Link>
            <Link to="/" className="back-home">
              Back to home ↗
            </Link>
          </div>
        </div>

        {/* HEADER */}
        <header className="planner-page-header">

          <div>
            <p className="planner-eyebrow">
              AI TRAVEL PLANNER
            </p>

            <h1>
              Plan Your Dream Trip
              <br />
              <em>in 3 Easy Steps</em>
            </h1>
          </div>

          <p className="planner-header-description">
            Simply tell us where you're going and what you love.
            Our AI will create a personalized itinerary made
            just for you.
          </p>

        </header>


        {/* THREE STEPS */}
        <section className="planner-steps">

          {/* STEP 1 */}
          <article className="planner-step">

            <div className="step-heading">
              <span className="step-number">1.</span>

              <div>
                <h2>Tell Us About Your Trip</h2>

                <p>
                  Share your destination, dates,
                  budget and travel preferences.
                </p>
              </div>
            </div>

            <div className="step-content form-step">
              <PlannerForm
                setResult={setResult}
                setPlanData={setPlanData}
              />
            </div>

          </article>


          {/* STEP 2 */}
          <article className="planner-step">

            <div className="step-heading">
              <span className="step-number">2.</span>

              <div>
                <h2>Let AI Create Your Itinerary</h2>

                <p>
                  AI builds a personalized travel
                  plan based on your choices.
                </p>
              </div>
            </div>

            <div className="step-content result-step">

              {!result && (
                <div className="empty-step">

                  <span className="empty-icon">✦</span>

                  <h3>Your itinerary starts here</h3>

                  <p>
                    Complete your trip details and let AI
                    design your journey.
                  </p>

                </div>
              )}

              {result && (
                <PlanResult result={result} />
              )}

            </div>

          </article>


          {/* STEP 3 */}
          <article className="planner-step">

            <div className="step-heading">
              <span className="step-number">3.</span>

              <div>
                <h2>Customize, Save & Explore</h2>

                <p>
                  Review your trip, save your plan
                  and get ready to explore.
                </p>
              </div>
            </div>

            <div className="step-content summary-step">

              {!planData && (
                <div className="empty-step">

                  <span className="empty-icon">⌖</span>

                  <h3>Your trip summary</h3>

                  <p>
                    Your destination and budget summary
                    will appear here.
                  </p>

                </div>
              )}

              {planData && (
                <PlanSummary
                  plan={planData}
                  onSave={handleSave}
                  saving={saving}
                />
              )}

              {message && (
                <div className="planner-message">
                  {message}
                </div>
              )}

            </div>

          </article>

        </section>


        {/* BOTTOM SECTION */}
        <section className="planner-bottom">

          <div>
            <p className="planner-eyebrow">
              BUILT FOR BETTER TRAVEL
            </p>

            <h2>
              Everything You Need to
              <br />
              <em>Plan Smarter Trips</em>
            </h2>
          </div>

          <p>
            From personalized itineraries to budget-friendly
            planning, AI Planner makes organizing your next
            adventure simple.
          </p>

        </section>

      </div>

    </main>
  );
}

export default CreatePlanner;