package com.aiplanner.ai_planner_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aiplanner.ai_planner_backend.entity.Plan;

public interface PlanRepository extends JpaRepository<Plan,Long>{
    
}
