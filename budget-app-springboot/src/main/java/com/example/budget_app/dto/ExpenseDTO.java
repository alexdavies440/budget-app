package com.example.budget_app.dto;

import com.example.budget_app.model.Category;

public class ExpenseDTO {

    @NotBlank
    private String description;

    private Category category;

    @NotBlank
    private double amount;
}
