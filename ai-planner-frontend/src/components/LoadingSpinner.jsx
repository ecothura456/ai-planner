function LoadingSpinner() {
  return (
    <div className="text-center py-5">

      <div
        className="spinner-border text-primary"
        role="status"
      >
        <span className="visually-hidden">
          Loading...
        </span>
      </div>

      <p className="mt-3 text-secondary">
        Generating your travel plan...
      </p>

    </div>
  );
}

export default LoadingSpinner;