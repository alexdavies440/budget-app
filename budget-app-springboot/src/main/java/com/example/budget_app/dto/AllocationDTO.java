package com.example.budget_app.dto;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public class AllocationDTO {

    @NotBlank(message = "Description cannot be blank")
    private String description;

    @Min(value = 1, message = "Amount must be at least $1.00")
    @Digits(integer = 10, fraction = 2)
    private double amount;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
