import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList"; // adjust the path if needed

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // initial state should not be completed
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    // toggle
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    // "Learn React" should be deleted
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
