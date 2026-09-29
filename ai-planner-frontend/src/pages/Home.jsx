import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Kyoto",
    country: "Japan",
    description: "Ancient temples, lantern-lit alleys, and peaceful tea houses.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Santorini",
    country: "Greece",
    description: "Blue domes, cliffside sunsets, and glamorous island views.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Paris",
    country: "France",
    description: "Art, romance, and effortless city walks through iconic landmarks.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
  },
];

const features = [
  {
    icon: "✈️",
    title: "AI-crafted itineraries",
    text: "Get a personalized trip plan built around your destinations, pace, and travel style.",
  },
  {
    icon: "💰",
    title: "Budget-aware planning",
    text: "Balance flights, hotels, activities, and daily spending without overshooting your budget.",
  },
  {
    icon: "🧭",
    title: "Smart recommendations",
    text: "Discover the best local spots, routes, and experiences based on your interests.",
  },
];

const steps = [
  { number: "01", title: "Tell us your trip", text: "Choose your location, budget, dates, and vibe." },
  { number: "02", title: "Let AI plan it", text: "We generate a day-by-day travel schedule tailored to you." },
  { number: "03", title: "Travel with confidence", text: "Save, adjust, and share your plans whenever needed." },
];

const stats = [
  { value: "25K+", label: "plans created" },
  { value: "4.9/5", label: "traveler rating" },
  { value: "120+", label: "destinations" },
];

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="container hero-shell">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="hero-copy">
                <span className="home-badge">✨ AI Travel Planner</span>
                <h1>
                  Turn every trip into a
                  <span> beautifully planned adventure</span>
                </h1>
                <p>
                  Build an itinerary that matches your budget, interests, and travel pace —
                  then explore the world with less stress and more excitement.
                </p>

                <div className="hero-actions">
                  <Link to="/create" className="btn btn-primary btn-lg home-primary-btn">
                    Start planning
                  </Link>
                  <Link to="/saved-plans" className="btn btn-outline-primary btn-lg home-secondary-btn">
                    View saved plans
                  </Link>
                </div>

                <div className="hero-stats row g-3 mt-4">
                  {stats.map((item) => (
                    <div className="col-4" key={item.label}>
                      <div className="mini-stat">
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="hero-image-card large-card">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                    alt="Beach destination"
                  />
                </div>

                <div className="hero-image-card small-card top-card">
                  <img
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=80"
                    alt="City skyline"
                  />
                </div>

                <div className="floating-card">
                  <span>Popular route</span>
                  <strong>Tokyo · 5 days</strong>
                  <small>From $1,280</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 destination-section">
        <div className="container">
          <div className="section-heading text-center mb-5">
            <span className="section-kicker">Popular destinations</span>
            <h2>Pick a place, and let the adventure begin</h2>
          </div>

          <div className="row g-4">
            {destinations.map((place) => (
              <div className="col-md-6 col-xl-4" key={place.name}>
                <article className="destination-card h-100">
                  <img src={place.image} alt={place.name} />
                  <div className="destination-content">
                    <div className="destination-meta">
                      <span>{place.country}</span>
                      <span>4.8 ★</span>
                    </div>
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                    <Link to="/create">Plan this trip →</Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works-section py-5">
        <div className="container">
          <div className="section-heading text-center mb-5">
            <span className="section-kicker">How it works</span>
            <h2>Plan smarter in three simple steps</h2>
          </div>

          <div className="row g-4">
            {steps.map((step) => (
              <div className="col-md-4" key={step.number}>
                <div className="step-card h-100">
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section py-5">
        <div className="container">
          <div className="section-heading text-center mb-5">
            <span className="section-kicker">Why travelers choose us</span>
            <h2>Everything you need for a better trip</h2>
          </div>

          <div className="row g-4">
            {features.map((feature) => (
              <div className="col-md-4" key={feature.title}>
                <div className="feature-card h-100">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section py-5">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="section-kicker light">Ready to go?</span>
              <h2>Build your next unforgettable journey</h2>
            </div>
            <Link to="/create" className="btn btn-light btn-lg">
              Create my plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;