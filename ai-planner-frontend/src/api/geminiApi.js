import apiURL from "./axios"


export const generateTravelPlan = (planData) => {
    return apiURL.post("/gemini/generate",planData)
}