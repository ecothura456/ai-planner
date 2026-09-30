import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================== */}
      <section className="travel-hero">

        {/* Large background title */}
        <div className="travel-tech-text">
          AI TRAVEL
        </div>

        {/* Main floating planner window */}
        <div className="planner-window">

          {/* Fake browser top bar */}
          <div className="planner-topbar">
            <div className="planner-logo">
              ✈ AI Planner
            </div>

            <div className="planner-nav">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
               <Link to="/saved-plans" >
              Plans
            </Link>
              <a href="#about">About</a>
            </div>

            <Link to="/create" className="small-plan-btn">
              Start Planning
            </Link>
          </div>

          {/* Hero content inside window */}
          <div className="planner-content" id="home">

            <span className="ai-badge">
              ✦ AI Powered Travel Planning
            </span>

            <h1>
              Your AI trip planner
              <br />
              in one click
            </h1>

            <p>
              Tell us where you want to go, your budget and
              interests. AI will create a personalized travel
              itinerary just for you.
            </p>

            <Link to="/create" className="hero-plan-btn">
              Start Planning →
            </Link>

          </div>
        </div>

        {/* Bottom mountain overlay */}
        <div className="mountain-overlay"></div>

      </section>


      {/* =========================
          FEATURES
      ========================== */}
      <section className="features-section" id="features">

        <div className="container">

          <div className="text-center mb-5">
            <span className="section-label">
              WHY AI PLANNER?
            </span>

            <h2 className="fw-bold mt-2">
              Travel smarter with AI
            </h2>

            <p className="text-secondary">
              Everything you need to create your perfect trip.
            </p>
          </div>


          <div className="row g-4">

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">✦</div>

                <h4>AI Planning</h4>

                <p>
                  Generate personalized travel itineraries
                  based on your destination and interests.
                </p>
              </div>
            </div>


            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">💰</div>

                <h4>Budget Friendly</h4>

                <p>
                  Create travel plans that match your
                  available budget.
                </p>
              </div>
            </div>


            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">✈</div>

                <h4>Easy Travel</h4>

                <p>
                  Keep your itinerary organized in one
                  simple application.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;