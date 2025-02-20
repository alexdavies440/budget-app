package com.example.budget_app.model;

import jakarta.persistence.Entity;

@Entity
public class IncomeSource extends AbstractEntity {

    public IncomeSource() {}

    public IncomeSource(String description, double amount) {
        super(description, amount);
    }

}
