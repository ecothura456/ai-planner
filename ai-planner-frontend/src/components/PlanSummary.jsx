function PlanSummary({ plan }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">

        <h4 className="fw-bold mb-3">
          Trip Summary
        </h4>

        <p>
          <strong>Departure:</strong> {plan.departure}
        </p>

        <p>
          <strong>Arrival:</strong> {plan.arrival}
        </p>

        <p>
          <strong>Start Date:</strong> {plan.startDate}
        </p>

        <p>
          <strong>End Date:</strong> {plan.endDate}
        </p>

        <p>
          <strong>Budget:</strong> ¥{plan.budget}
        </p>

        <p>
          <strong>Transportation:</strong> {plan.transportation}
        </p>

        <p>
          <strong>Interests:</strong> {plan.interests}
        </p>

      </div>
    </div>
  );
}

export default PlanSummary;