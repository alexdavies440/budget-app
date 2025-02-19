package com.example.budget_app.controller;

import com.example.budget_app.model.Category;
import com.example.budget_app.model.Expense;
import com.example.budget_app.repository.ExpenseRepository;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;


    @GetMapping("/test")
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

        // Returns new array of Enum values that are not ALL CAPS

        Category[] values = Category.values();
        String[] newValues = new String[values.length];

        for (int i = 0; i < values.length; i++) {
            newValues[i] = values[i].getName();
        }

        return newValues;
    }

    @PostMapping("/add-expense")
    public void addNewExpense(@RequestBody Expense newExpense) {
        expenseRepository.save(newExpense);
    }
}
