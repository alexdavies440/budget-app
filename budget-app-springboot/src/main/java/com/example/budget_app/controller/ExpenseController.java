package com.example.budget_app.controller;

import com.example.budget_app.dto.ExpenseDTO;
import com.example.budget_app.model.Category;
import com.example.budget_app.model.Expense;
import com.example.budget_app.repository.ExpenseRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

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
    public void addNewExpense(@Valid @RequestBody ExpenseDTO expenseDTO) {

        Expense newExpense = new Expense(
                expenseDTO.getDescription(),
                expenseDTO.getAmount(),
                expenseDTO.getCategory()
        );

        expenseRepository.save(newExpense);
    }

    @DeleteMapping("/delete-expense/{id}")
    public void deleteExpense(@PathVariable long id) {

        Optional<Expense> optExpense = expenseRepository.findById(id);

        if (optExpense.isPresent()) {
            expenseRepository.deleteById(id);
        }
    }
}
