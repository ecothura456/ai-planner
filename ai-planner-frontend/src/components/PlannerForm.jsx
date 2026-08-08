import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateTravelPlan } from "../api/geminiApi";
import LoadingSpinner from "./LoadingSpinner";

function PlannerForm() {
  const navigate = useNavigate();

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [transportation, setTransportation] = useState("Train");
  const [interests, setInterests] = useState("");
  const [additionalRequest, setAdditionalRequest] = useState("");
  const [loading, setLoading] = useState(false);

  const [error ,setError] = useState("");

  const handleGenerate = async () => {
    setError("");
    const planData = {
      departure,
      arrival,
      startDate,
      endDate,
      budget: Number(budget),
      transportation,
      interests,
      additionalRequest,
    };

    try {
      setLoading(true);

      const response = await generateTravelPlan(planData);

      navigate("/result", {
        state: {
          result: response.data,
          planData,
        },
      });
    } catch (error) {
      console.error(error);
      if (error.response?.data){
        if(typeof error.response.data === "string"){
            setError(error.response.data);
        }else{
            setError(
                Object.values(error.response.data).join(", ")
            );
        }
      }else{
        setError(
            "Failed to generate travel plan. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <h4 className="fw-bold mb-4">Create Your Travel Plan</h4>

        <div className="mb-3">
          <label className="form-label">Departure</label>
          <input
            type="text"
            className="form-control"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder="Tokyo"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Arrival</label>
          <input
            type="text"
            className="form-control"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            placeholder="Kyoto"
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">End Date</label>
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Budget</label>
          <input
            type="number"
            className="form-control"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="50000"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Transportation</label>
          <select
            className="form-select"
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
          >
            <option value="Train">Train</option>
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Airplane">Airplane</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Interests</label>
          <input
            type="text"
            className="form-control"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Food, Nature, Temple"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Additional Request</label>
          <textarea
            className="form-control"
            rows="4"
            value={additionalRequest}
            onChange={(e) => setAdditionalRequest(e.target.value)}
            placeholder="Avoid crowded places..."
          />
        </div>

        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Travel Plan"}
          
        </button>
       
        {loading && <LoadingSpinner/>}
         {error && (
    <div className="alert alert-danger mb-3">
        {error}
    </div>
)}
      </div>
    </div>
  );
}

export default PlannerForm;