import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* =========================
          SECTION 1
      ========================== */}
     <section
  className="text-white"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.02),
        rgba(0, 0, 0, 0.02)
      ),
      url("https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "650px",
  }}
>
  <div className="container h-100">

    <div
      className="row align-items-center g-5"
      style={{ minHeight: "650px" }}
    >

      {/* LEFT - TEXT */}
      <div className="col-lg-6">

        <span className="badge bg-primary px-3 py-2 mb-3">
          ✨ AI Travel Planner
        </span>

        <h1 className="display-3 fw-bold mb-4">
          Plan Your Trip.
          <br />
          Travel Smarter.
        </h1>

        <p className="lead mb-4">
          Create your perfect travel plan with AI.
          Choose your destination, budget and interests,
          and let AI create your itinerary.
        </p>

        <Link
          to="/create"
          className="btn btn-primary btn-lg px-4"
        >
          Start Planning →
        </Link>

      </div>


      {/* RIGHT - 3 PHOTOS */}
      <div className="col-lg-6">

        <div className="row g-3">

          {/* PHOTO 1 */}
          <div className="col-12">
            <img
              src=""
              alt="Tokyo"
              className="img-fluid rounded-4 shadow"
              style={{
                height: "230px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* PHOTO 2 */}
          <div className="col-6">
            <img
              src=""
              alt="Kyoto"
              className="img-fluid rounded-4 shadow"
              style={{
                height: "180px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* PHOTO 3 */}
          <div className="col-6">
            <img
              src=""
              alt="Osaka"
              className="img-fluid rounded-4 shadow"
              style={{
                height: "180px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

        </div>

      </div>

    </div>

  </div>
</section>


      {/* =========================
          SECTION 2
      ========================== */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Explore Destinations
            </h2>

            <p className="text-secondary">
              Choose your favorite destination
            </p>
          </div>


          {/* JAVASCRIPT PHOTO SELECTOR FRAME */}

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                {/* PHOTO */}
                <div
                  className="bg-secondary d-flex justify-content-center align-items-center text-white"
                  style={{ height: "400px" }}
                >
                  Destination Photo
                </div>


                {/* CONTENT */}
                <div className="card-body p-4 text-center">

                  <h3 className="fw-bold">
                    Tokyo
                  </h3>

                  <p className="text-secondary">
                    Discover amazing places in Tokyo.
                  </p>


                  {/* BUTTONS */}
                  <div className="d-flex justify-content-center gap-3">

                    <button className="btn btn-outline-primary">
                      ← Previous
                    </button>

                    <button className="btn btn-primary">
                      Next →
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          SECTION 3
      ========================== */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Why AI Travel Planner?
            </h2>

            <p className="text-secondary">
              Everything you need for a better trip.
            </p>

          </div>


          <div className="row g-4">

            {/* FEATURE 1 */}
            <div className="col-md-4">

              <div className="card border-0 shadow-sm rounded-4 h-100">

                <div className="card-body p-4 text-center">

                  <div className="fs-1 mb-3">
                    🤖
                  </div>

                  <h4 className="fw-bold">
                    AI Planning
                  </h4>

                  <p className="text-secondary">
                    Generate a personalized travel
                    itinerary using AI.
                  </p>

                </div>

              </div>

            </div>


            {/* FEATURE 2 */}
            <div className="col-md-4">

              <div className="card border-0 shadow-sm rounded-4 h-100">

                <div className="card-body p-4 text-center">

                  <div className="fs-1 mb-3">
                    💰
                  </div>

                  <h4 className="fw-bold">
                    Budget Management
                  </h4>

                  <p className="text-secondary">
                    Plan your trip based on your
                    available budget.
                  </p>

                </div>

              </div>

            </div>


            {/* FEATURE 3 */}
            <div className="col-md-4">

              <div className="card border-0 shadow-sm rounded-4 h-100">

                <div className="card-body p-4 text-center">

                  <div className="fs-1 mb-3">
                    🗺️
                  </div>

                  <h4 className="fw-bold">
                    Easy Travel
                  </h4>

                  <p className="text-secondary">
                    Organize your trip easily in
                    one simple application.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;