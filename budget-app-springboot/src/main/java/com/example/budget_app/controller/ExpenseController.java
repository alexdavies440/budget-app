package com.example.budget_app.controller;

import com.example.budget_app.model.Category;
import com.example.budget_app.model.Expense;
import com.example.budget_app.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;


    @GetMapping("/")
    public String test() {
        // Dummy Expense
        Expense test = new Expense("test", 20.00, Category.MISC, true);

        expenseRepository.save(test);

        return test.toString();
    }

    @GetMapping("/expense-data")
    public List<Expense> expenseData() {
        return expenseRepository.findAll();
    }

    @GetMapping("/expense-categories")
    public String[] returnExpenseCategories() {

        Category[] values = Category.values();
        String[] newValues = new String[values.length];

        for (int i = 0; i < values.length; i++) {
            newValues[i] = values[i].getName();
        }

        return newValues;
    }
}
