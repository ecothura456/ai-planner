package com.aiplanner.ai_planner_backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.aiplanner.ai_planner_backend.entity.Plan;
import com.aiplanner.ai_planner_backend.service.PlanService;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;




@RestController
@RequestMapping("/api/plans")
//@CrossOrigin(origins = "http://localhost:5173")
public class PlanController {

    private final PlanService planService;

    public PlanController(PlanService planService){
        this.planService = planService;
    }

    @GetMapping
    public List<Plan> getAllPlans() {
        return planService.getAllPlans();
    }

    @PostMapping
    public Plan savePlan(@RequestBody Plan plan){
        return planService.savePlan(plan);
    }

    @GetMapping("/{id}")
    public Plan getPlanById(@PathVariable Long id){
        return planService.getPlanById(id);
    }

    @DeleteMapping("/{id}")
    public void deletePlan(@PathVariable Long id){
        planService.deletePlan(id);
    }
}
