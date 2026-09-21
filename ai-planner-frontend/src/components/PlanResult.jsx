// function PlanResult({ result }) {
//   return (
//     <div className="card border-0 shadow-sm">
//       <div className="card-body p-4">
//         <h3 className="fw-bold mb-3">AI Travel Plan</h3>

//         <pre
//           className="mb-0"
//           style={{
//             whiteSpace: "pre-wrap",
//             fontFamily: "inherit",
//             lineHeight: "1.8",
//           }}
//         >
//           {result}
//         </pre>
//       </div>
//     </div>
//   );
// }

// export default PlanResult;

function PlanResult({ result }) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h3 className="fw-bold mb-3">AI Travel Plan</h3>

        {/* Scroll Area */}
        <div
          style={{
            height: "600px",
            overflowY: "auto",
          }}
        >
          {result ? (
            <pre
              className="mb-0"
              style={{
                whiteSpace: "pre-wrap",
                fontFamily: "inherit",
                lineHeight: "1.8",
              }}
            >
              {result}
            </pre>
          ) : (
            <p className="text-muted">
              Generate a travel plan to see the AI itinerary.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlanResult;