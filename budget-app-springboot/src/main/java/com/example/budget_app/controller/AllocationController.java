package com.example.budget_app.controller;

import com.example.budget_app.dto.AllocationDTO;
import com.example.budget_app.model.Allocation;
import com.example.budget_app.repository.AllocationRepository;
import jakarta.validation.Valid;
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
    public String addNewAllocation(@Valid @RequestBody AllocationDTO allocationDTO) {

        String response;

        if (allocationDTO.getDescription().isBlank()) {
            response = "Description cannot be blank";
        }
        else if (allocationDTO.getAmount() < 1) {
            response = "Amount must be at least $1.00";
        }
        else {
            Allocation newAllocation = new Allocation(
                    allocationDTO.getDescription(),
                    allocationDTO.getAmount()
            );

            allocationRepository.save(newAllocation);
            response = "Accepted";
        }

        return response;
    }

    @DeleteMapping("/delete-allocation/{id}")
    public void deleteAllocation(@PathVariable long id) {

        Optional<Allocation> optAllocation = allocationRepository.findById(id);

        if (optAllocation.isPresent()) {
            allocationRepository.deleteById(id);
        }
    }

    @PostMapping("/update-allocation/{id}")
    public String updateAllocation(@PathVariable long id, @RequestBody Allocation updatedAllocation) {
        Optional<Allocation> optAllocation = allocationRepository.findById(id);

        if (optAllocation.isPresent()) {
            Allocation existingAllocation = optAllocation.get();
            existingAllocation.setDescription(updatedAllocation.getDescription());
            existingAllocation.setAmount(updatedAllocation.getAmount());
        }

        return "Update successful";
    }
}
