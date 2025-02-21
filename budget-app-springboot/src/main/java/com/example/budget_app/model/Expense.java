package com.example.budget_app.model;

import jakarta.persistence.Entity;

@Entity
public class Expense extends AbstractEntity {

    private Category category;

    public Expense() {}

    public Expense(String description, double amount, Category category) {
        super(description, amount);
        this.category = category;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

}
