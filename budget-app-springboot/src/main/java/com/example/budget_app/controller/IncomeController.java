package com.example.budget_app.controller;

import com.example.budget_app.model.Category;
import com.example.budget_app.model.Expense;
import com.example.budget_app.model.IncomeSource;
import com.example.budget_app.repository.IncomeSourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
    public List<IncomeSource> expenseData() {
        return incomeSourceRepository.findAll();
    }
}
