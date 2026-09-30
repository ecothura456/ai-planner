import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePlan, getAllPlan } from "../api/planApi";
import "./CreatePlanner.css";
import "./SavedPlans.css";

function SavedPlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const response = await getAllPlan();
        setPlans(response.data);
      } catch (requestError) {
        console.error(requestError);
        setError("Saved plans could not be loaded. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadPlans();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this plan?")) {
      return;
    }

    try {
      await deletePlan(id);
      setPlans((currentPlans) => currentPlans.filter((plan) => plan.id !== id));
      setError("");
    } catch (requestError) {
      console.error(requestError);
      setError("This plan could not be deleted. Please try again.");
    }
  };

  return (
    <main className="create-planner-page saved-plans-page">
      <div className="planner-page-container">
        <div className="planner-mini-nav">
          <Link to="/">✈ AI Planner</Link>
          <div className="planner-mini-links">
            <Link to="/create" className="back-home">
              Create a Plan
            </Link>
            <Link to="/" className="back-home">
              Back to home ↗
            </Link>
          </div>
        </div>

        <header className="planner-page-header saved-plans-header">
          <div>
            <p className="planner-eyebrow">YOUR TRAVEL COLLECTION</p>
            <h1>
              Saved
              <br />
              <em>Journeys</em>
            </h1>
          </div>
          <p className="planner-header-description">
            Revisit your travel plans, explore each itinerary, or start mapping
            out somewhere new.
          </p>
        </header>

        <section className="saved-plans-content" aria-live="polite">
          <div className="saved-plans-section-heading">
            <div>
              <p className="planner-eyebrow">THE ITINERARIES</p>
              <h2>Your saved plans</h2>
            </div>
            {!loading && plans.length > 0 && (
              <span className="saved-plans-count">
                {plans.length} {plans.length === 1 ? "plan" : "plans"}
              </span>
            )}
          </div>

          {error && <p className="saved-plans-message" role="alert">{error}</p>}

          {loading ? (
            <div className="saved-plans-empty">
              <span className="saved-plans-mark" aria-hidden="true">...</span>
              <h3>Gathering your plans</h3>
              <p>Your saved itineraries will be ready in a moment.</p>
            </div>
          ) : plans.length === 0 ? (
            <div className="saved-plans-empty">
              <span className="saved-plans-mark" aria-hidden="true">✦</span>
              <h3>No journeys saved yet</h3>
              <p>When you save an itinerary, you’ll find it here.</p>
              <Link to="/create" className="saved-plans-create-link">
                Create your first plan <span aria-hidden="true">↗</span>
              </Link>
            </div>
          ) : (
            <div className="saved-plans-grid">
              {plans.map((plan) => (
                <article className="saved-plan-item" key={plan.id}>
                  <div className="saved-plan-topline">
                    <span>AI TRAVEL PLAN</span>
                    <span className="saved-plan-budget">¥{plan.budget}</span>
                  </div>

                  <h3>
                    {plan.departure} <span aria-hidden="true">→</span>
                    <br />
                    <em>{plan.arrival}</em>
                  </h3>

                  <dl className="saved-plan-details">
                    <div>
                      <dt>DATES</dt>
                      <dd>{plan.startDate} – {plan.endDate}</dd>
                    </div>
                    <div>
                      <dt>GETTING AROUND</dt>
                      <dd>{plan.transportation}</dd>
                    </div>
                    <div>
                      <dt>INTERESTS</dt>
                      <dd>{plan.interests}</dd>
                    </div>
                  </dl>

                  <div className="saved-plan-actions">
                    <Link to={`/plans/${plan.id}`}>
                      View itinerary <span aria-hidden="true">↗</span>
                    </Link>
                    <button type="button" onClick={() => handleDelete(plan.id)}>
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default SavedPlans;