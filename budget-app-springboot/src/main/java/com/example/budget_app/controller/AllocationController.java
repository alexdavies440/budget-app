package com.example.budget_app.controller;

import com.example.budget_app.model.Allocation;
import com.example.budget_app.repository.AllocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class AllocationController {

    @Autowired
    private AllocationRepository allocationRepository;

    @GetMapping("/test")
    public String test() {
        // Dummy Data
        Allocation test = new Allocation("test", 1000.00);

        allocationRepository.save(test);

        return test.toString();
    }

    @GetMapping("/allocation-data")
    public List<Allocation> allocationData() {
        return allocationRepository.findAll();
    }

    @PostMapping("/add-allocation")
    public void addNewAllocation(@RequestBody Allocation allocation) {
        allocationRepository.save(allocation);
    }

    @DeleteMapping("/delete-allocation/{id}")
    public void deleteAllocation(@PathVariable long id) {

        Optional<Allocation> optAllocation = allocationRepository.findById(id);

        if (optAllocation.isPresent()) {
            allocationRepository.deleteById(id);
        }
    }
}
