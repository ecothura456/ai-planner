import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlanById } from "../api/planApi";
import "./CreatePlanner.css";
import "./PlannerDetail.css";

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
      } catch (requestError) {
        console.error("Planner Detail Error:", requestError);
        setError("Failed to load the travel plan.");
      } finally {
        setLoading(false);
      }
    };

    loadPlan();
  }, [id]);

  return (
    <main className="create-planner-page planner-detail-page">
      <div className="planner-page-container">
        <div className="planner-mini-nav">
          <Link to="/">✈ AI Planner</Link>
          <div className="planner-mini-links">
            <Link to="/saved-plans" className="back-home">
              Saved Plans
            </Link>
            <Link to="/create" className="back-home">
              Create a Plan
            </Link>
          </div>
        </div>

        {loading ? (
          <section className="planner-detail-state" aria-live="polite">
            <span className="planner-detail-state-mark" aria-hidden="true">...</span>
            <h1>Opening your itinerary</h1>
            <p>Your saved travel plan is on its way.</p>
          </section>
        ) : error || !plan ? (
          <section className="planner-detail-state" role="alert">
            <span className="planner-detail-state-mark" aria-hidden="true">!</span>
            <h1>{error ? "Plan unavailable" : "Plan not found"}</h1>
            <p>{error || "This saved itinerary may have been removed."}</p>
            <Link to="/saved-plans" className="planner-detail-back-link">
              Back to Saved Plans <span aria-hidden="true">↗</span>
            </Link>
          </section>
        ) : (
          <>
            <header className="planner-page-header planner-detail-header">
              <div>
                <p className="planner-eyebrow">YOUR SAVED ITINERARY</p>
                <h1>
                  {plan.departure}
                  <br />
                  <em>{plan.arrival}</em>
                </h1>
              </div>
              <p className="planner-header-description">
                A closer look at your trip details and personalized AI itinerary.
              </p>
            </header>

            <section className="planner-detail-layout" aria-label="Travel plan details">
              <article className="planner-detail-panel planner-summary-panel">
                <header className="planner-detail-panel-heading">
                  <span className="planner-detail-index">01</span>
                  <div>
                    <p className="planner-eyebrow">THE ESSENTIALS</p>
                    <h2>Trip summary</h2>
                  </div>
                </header>

                <dl className="planner-detail-list">
                  <div>
                    <dt>Travel dates</dt>
                    <dd>{plan.startDate} – {plan.endDate}</dd>
                  </div>
                  <div>
                    <dt>Total budget</dt>
                    <dd className="planner-detail-budget">
                      ¥{Number(plan.budget).toLocaleString()}
                    </dd>
                  </div>
                  <div>
                    <dt>Transportation</dt>
                    <dd>{plan.transportation}</dd>
                  </div>
                  <div>
                    <dt>Interests</dt>
                    <dd>{plan.interests || "No interests selected."}</dd>
                  </div>
                  {plan.additionalRequest && (
                    <div>
                      <dt>Additional request</dt>
                      <dd>{plan.additionalRequest}</dd>
                    </div>
                  )}
                </dl>
              </article>

              <article className="planner-detail-panel planner-itinerary-panel">
                <header className="planner-detail-panel-heading">
                  <span className="planner-detail-index">02</span>
                  <div>
                    <p className="planner-eyebrow">MADE FOR YOUR TRIP</p>
                    <h2>AI itinerary</h2>
                  </div>
                </header>
                <div className="planner-itinerary-content">
                  <pre>{plan.aiResult || "No itinerary details were saved for this plan."}</pre>
                </div>
              </article>
            </section>

            <nav className="planner-detail-footer" aria-label="Travel plan navigation">
              <Link to="/saved-plans" className="planner-detail-back-link">
                ← All saved plans
              </Link>
              <Link to="/create" className="planner-detail-create-link">
                Plan another trip <span aria-hidden="true">↗</span>
              </Link>
            </nav>
          </>
        )}
      </div>
    </main>
  );
}

export default PlannerDetail;