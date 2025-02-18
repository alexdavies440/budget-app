package com.example.budget_app.model;

public enum Category {
    HOUSING("Housing"),
    UTILITIES("Utilities"),
    HEALTH("Health"),
    TRANSPORTATION("Transportation"),
    DEBT("Debt"),
    RECREATION("Recreation"),
    FOOD("Food"),
    PETS("Pets"),
    MISC("Misc");

    private final String name;

    Category(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return name;
    }
}
