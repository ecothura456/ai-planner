function PlanResult({ result }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <h3 className="fw-bold mb-3">AI Travel Plan</h3>

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
      </div>
    </div>
  );
}

export default PlanResult;