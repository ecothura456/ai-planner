import React, { useEffect, useState } from 'react'
import { deletePlan, getAllPlan } from '../api/planApi'
import { Link } from 'react-router-dom';

export default function SavePlans() {

  const [plans, setPlans] = useState([])

  useEffect(() => {
    loadPlans();
  }, [])

  const loadPlans = async () => {
    try {
      const response = await getAllPlan();
      setPlans(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this plan?"
    );
    if (!confirmDelete) {
      return;
    }
    try {
      await deletePlan(id);
      setPlans(plans.filter((plan) => plan.id !== id));
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="container mt-4">
      <h2>Saved Plans</h2>

      {plans.map((plan) => (
        <div className="card mb-3" key={plan.id}>
          <div className="card-body">

            <h5>
              {plan.departure} → {plan.arrival}
            </h5>

            <p>
              Budget : ¥{plan.budget}
            </p>

            <p>
              Transport : {plan.transportation}
            </p>

            <div className="d-flex gap-2">
  <Link
    to={`/plans/${plan.id}`}
    className="btn btn-primary"
  >
    View
  </Link>

  <button
    className="btn btn-danger"
    onClick={() => handleDelete(plan.id)}
  >
    Delete
  </button>
</div>

          </div>

          
        </div>


      ))}



    </div>
  )
}
