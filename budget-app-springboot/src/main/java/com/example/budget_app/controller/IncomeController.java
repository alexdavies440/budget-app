package com.example.budget_app.controller;

import com.example.budget_app.model.Category;
import com.example.budget_app.model.Expense;
import com.example.budget_app.model.IncomeSource;
import com.example.budget_app.repository.IncomeSourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class IncomeController {

    @Autowired
    private IncomeSourceRepository incomeSourceRepository;

    @GetMapping("/test")
    public String test() {
        // Dummy Data
        IncomeSource test = new IncomeSource("test", 1000.00);

        incomeSourceRepository.save(test);

        return test.toString();
    }

    @GetMapping("/income-data")
    public List<IncomeSource> incomeData() {
        return incomeSourceRepository.findAll();
    }

    @PostMapping("/add-income")
    public void addNewIncomeSource(@RequestBody IncomeSource incomeSource) {
        incomeSourceRepository.save(incomeSource);
    }

    @DeleteMapping("/delete-income-source/{id}")
    public void deleteIncomeSource(@PathVariable long id) {

        Optional<IncomeSource> optIncomeSource = incomeSourceRepository.findById(id);

        if (optIncomeSource.isPresent()) {
            incomeSourceRepository.deleteById(id);
        }
    }
}
