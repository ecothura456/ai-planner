// function PlanSummary({ plan }) {
//   return (
//     <div className="card border-0 shadow-sm">
//       <div className="card-body">

//         <h4 className="fw-bold mb-3">
//           Trip Summary
//         </h4>

//         <p>
//           <strong>Departure:</strong> {plan.departure}
//         </p>

//         <p>
//           <strong>Arrival:</strong> {plan.arrival}
//         </p>

//         <p>
//           <strong>Start Date:</strong> {plan.startDate}
//         </p>

//         <p>
//           <strong>End Date:</strong> {plan.endDate}
//         </p>

//         <p>
//           <strong>Budget:</strong> ¥{plan.budget}
//         </p>

//         <p>
//           <strong>Transportation:</strong> {plan.transportation}
//         </p>

//         <p>
//           <strong>Interests:</strong> {plan.interests}
//         </p>

//       </div>
//     </div>
//   );
// }

// export default PlanSummary;

function PlanSummary({ plan,onSave,saving }) {
  if (!plan) {
    return (
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body p-4">
          <h4 className="fw-bold mb-3">Trip Summary</h4>

          <p className="text-muted">
            Fill in the form and click "Generate Travel Plan".
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h4 className="fw-bold mb-3">Trip Summary</h4>

        <p><strong>Departure:</strong> {plan.departure}</p>
        <p><strong>Arrival:</strong> {plan.arrival}</p>
        <p><strong>Start Date:</strong> {plan.startDate}</p>
        <p><strong>End Date:</strong> {plan.endDate}</p>
        <p><strong>Budget:</strong> ¥{plan.budget}</p>
        <p><strong>Transportation:</strong> {plan.transportation}</p>
        <p><strong>Interests:</strong> {plan.interests}</p>
      </div>

      <hr />

      <button
        className="btn btn-success w-100"
        onClick={onSave}
        disabled={saving}
      >
        {saving ? "Saving..." : "💾 Save Plan"}
      </button>
    </div>
  );
}

export default PlanSummary;
