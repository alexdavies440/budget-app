package com.example.budget_app.model;

import jakarta.persistence.Entity;

@Entity
public class Allocation extends AbstractEntity {

    public Allocation() {}

    public Allocation(String description, double amount) {
        super(description, amount);
    }

}
