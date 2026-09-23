// import React, { useEffect, useState } from 'react'
// import { deletePlan, getAllPlan } from '../api/planApi'
// import { Link } from 'react-router-dom';

// export default function SavePlans() {

//   const [plans, setPlans] = useState([])

//   useEffect(() => {
//     loadPlans();
//   }, [])

//   const loadPlans = async () => {
//     try {
//       const response = await getAllPlan();
//       setPlans(response.data)
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this plan?"
//     );
//     if (!confirmDelete) {
//       return;
//     }
//     try {
//       await deletePlan(id);
//       setPlans(plans.filter((plan) => plan.id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   return (
//     <div className="container mt-4">
//       <h2>Saved Plans</h2>

//       {plans.map((plan) => (
//         <div className="card mb-3" key={plan.id}>
//           <div className="card-body">

//             <h5>
//               {plan.departure} → {plan.arrival}
//             </h5>

//             <p>
//               Budget : ¥{plan.budget}
//             </p>

//             <p>
//               Transport : {plan.transportation}
//             </p>

//             <div className="d-flex gap-2">
//   <Link
//     to={`/plans/${plan.id}`}
//     className="btn btn-primary"
//   >
//     View
//   </Link>

//   <button
//     className="btn btn-danger"
//     onClick={() => handleDelete(plan.id)}
//   >
//     Delete
//   </button>
// </div>

//           </div>

          
//         </div>


//       ))}



//     </div>
//   )
// }

import React, { useEffect, useState } from "react";
import { deletePlan, getAllPlan } from "../api/planApi";
import { Link } from "react-router-dom";

export default function SavePlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const response = await getAllPlan();
      setPlans(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this plan?"
    );

    if (!confirmDelete) return;

    try {
      await deletePlan(id);
      setPlans(plans.filter((plan) => plan.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container py-4">

      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">
          ✈️ Saved Travel Plans
        </h2>

        <p className="text-muted">
          View and manage your AI travel itineraries.
        </p>
      </div>

      {plans.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="text-secondary">
            📭 No Saved Plans Yet
          </h4>

          <p className="text-muted">
            Create your first travel plan.
          </p>

          <Link
            to="/create"
            className="btn btn-primary rounded-pill px-4"
          >
            + Create New Plan
          </Link>
        </div>
      ) : (
        <div className="row g-4">
          {plans.map((plan) => (
            <div className="col-md-6 col-lg-4" key={plan.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4">

                <div className="card-body d-flex flex-column">

                  <h5 className="fw-bold text-primary">
                    {plan.departure} → {plan.arrival}
                  </h5>

                  <small className="text-muted mb-3">
                    AI Travel Itinerary
                  </small>

                  <span className="badge bg-success fs-6 px-3 py-2 mb-3">
                    💴 ¥{plan.budget}
                  </span>

                  <p className="mb-2">
                    📅 {plan.startDate} ~ {plan.endDate}
                  </p>

                  <p className="mb-2">
                    🚆 {plan.transportation}
                  </p>

                  <p className="mb-4">
                    ❤️ {plan.interests}
                  </p>

                  <div className="mt-auto d-grid gap-2">

                    <Link
                      to={`/plans/${plan.id}`}
                      className="btn btn-primary rounded-pill"
                    >
                      View Details
                    </Link>

                    <button
                      className="btn btn-outline-danger rounded-pill"
                      onClick={() => handleDelete(plan.id)}
                    >
                      Delete Plan
                    </button>

                  </div>

                </div>

                <div className="card-footer bg-white border-0 text-center">
                  <small className="text-muted">
                    AI Planner
                  </small>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}