import apiURL from "./axios";

export const getAllPlan = () => {
    return apiURL.get("/plans");
}

export const getPlanById = (id) => {
    return apiURL.get(`/plans/${id}`)
}

export const createPlan = (plan) => {
    return apiURL.post("/plans",plan);
}

export const deletePlan = (id) => {
    return apiURL.delete(`/plans/${id}`)
}