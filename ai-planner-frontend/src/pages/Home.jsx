import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-light min-vh-100">

      <section className="container text-center pt-5 pb-4">
        <span className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 mb-3">
          AI-Powered Travel Planning
        </span>

        <h1 className="display-3 fw-bold mb-3">
          Plan Smarter.
          <br />
          Travel Better.
        </h1>

        <p className="lead text-secondary mx-auto mb-4"
           style={{ maxWidth: "720px" }}>
          Create personalized travel plans with AI based on your destination,
          budget, interests, and travel preferences.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/create" className="btn btn-primary btn-lg px-4">
            Start Planning
          </Link>

          <Link to="/saved-plans" className="btn btn-outline-secondary btn-lg px-4">
            View Saved Plans
          </Link>
        </div>
      </section>

      <section className="container pb-5">
        <div className="bg-white rounded-4 shadow-lg p-3 p-lg-4">

          <div className="row g-3">

            {/* LEFT */}
            <div className="col-lg-3">
              <div className="border rounded-4 p-3 h-100">
                <h5 className="fw-bold mb-3">
                  Plan Your Trip
                </h5>

                <div className="mb-3">
                  <label className="form-label small text-secondary">
                    From
                  </label>
                  <div className="form-control bg-light">
                    Tokyo
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small text-secondary">
                    To
                  </label>
                  <div className="form-control bg-light">
                    Kyoto
                  </div>
                </div>

                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <label className="form-label small text-secondary">
                      Start
                    </label>
                    <div className="form-control bg-light small">
                      2026-08-10
                    </div>
                  </div>

                  <div className="col-6">
                    <label className="form-label small text-secondary">
                      End
                    </label>
                    <div className="form-control bg-light small">
                      2026-08-12
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small text-secondary">
                    Budget
                  </label>
                  <div className="form-control bg-light">
                    ¥50,000
                  </div>
                </div>

                <button className="btn btn-primary w-100">
                  Generate Plan
                </button>
              </div>
            </div>

            {/* CENTER */}
            <div className="col-lg-6">
              <div className="border rounded-4 p-3 h-100">

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <small className="text-primary fw-semibold">
                      AI ITINERARY
                    </small>

                    <h4 className="fw-bold mb-0">
                      Tokyo → Kyoto
                    </h4>
                  </div>

                  <span className="badge bg-success-subtle text-success">
                    Ready
                  </span>
                </div>

                <div className="mb-4">
                  <div className="d-flex gap-3">
                    <div className="fw-bold text-primary">
                      01
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Arrival & Historic Kyoto
                      </h6>

                      <p className="text-secondary small mb-2">
                        Visit Fushimi Inari, explore Gion, and enjoy local food.
                      </p>

                      <div className="rounded-3 bg-light p-3">
                        <strong>09:00</strong>
                        <span className="text-secondary ms-2">
                          Fushimi Inari Shrine
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex gap-3">
                    <div className="fw-bold text-primary">
                      02
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Temples & Nature
                      </h6>

                      <p className="text-secondary small mb-2">
                        Discover Kiyomizu-dera and peaceful surrounding streets.
                      </p>

                      <div className="rounded-3 bg-light p-3">
                        <strong>10:30</strong>
                        <span className="text-secondary ms-2">
                          Kiyomizu-dera
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="d-flex gap-3">
                    <div className="fw-bold text-primary">
                      03
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Arashiyama Day
                      </h6>

                      <p className="text-secondary small mb-0">
                        Bamboo forest, river views, and relaxing cafes.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-3">
              <div className="border rounded-4 p-3 h-100">

                <h5 className="fw-bold mb-4">
                  Trip Summary
                </h5>

                <div className="mb-4">
                  <small className="text-secondary">
                    Total Budget
                  </small>

                  <h3 className="fw-bold mt-1">
                    ¥50,000
                  </h3>
                </div>

                <div className="mb-3">
                  <small className="text-secondary">
                    Duration
                  </small>

                  <div className="fw-semibold">
                    3 Days
                  </div>
                </div>

                <div className="mb-3">
                  <small className="text-secondary">
                    Transportation
                  </small>

                  <div className="fw-semibold">
                    Train
                  </div>
                </div>

                <div className="mb-4">
                  <small className="text-secondary">
                    Interests
                  </small>

                  <div className="mt-2 d-flex flex-wrap gap-2">
                    <span className="badge bg-primary-subtle text-primary">
                      Food
                    </span>

                    <span className="badge bg-primary-subtle text-primary">
                      Nature
                    </span>

                    <span className="badge bg-primary-subtle text-primary">
                      Temples
                    </span>
                  </div>
                </div>

                <Link
                  to="/create"
                  className="btn btn-primary w-100"
                >
                  Create My Plan
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}