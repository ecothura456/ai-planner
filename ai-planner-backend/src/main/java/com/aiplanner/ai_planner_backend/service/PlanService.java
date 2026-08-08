package com.aiplanner.ai_planner_backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aiplanner.ai_planner_backend.entity.Plan;
import com.aiplanner.ai_planner_backend.repository.PlanRepository;

@Service
public class PlanService {
    private final PlanRepository planRepository;

    public PlanService (PlanRepository planRepository){
        this.planRepository = planRepository;
    }

    public Plan savePlan(Plan plan){
        return planRepository.save(plan);
    }

    public List<Plan> getAllPlans(){
        return planRepository.findAll();
    }

    public Plan getPlanById(Long id){
        return planRepository.findById(id).orElse(null);
    }

    public void deletePlan(Long id){
        planRepository.deleteById(id);
    }
}
