import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react';
import FeedbackForm from "./FeedbackForm";
import React from "react";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    let score = "3";
    let comment = "The pizza crust was too thick";
    let handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    let rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });
    let textArea = screen.getByLabelText(/Comments/);
    fireEvent.change(textArea, { target: { value: comment } });
    let submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
    // expect(submitButton).toHaveAttribute("disabled");
    // expect(textarea.value).toBe(!null)
  });

  test("User is unable to submit the form if the feedback is not provided", () => {
    let score = "3";
    let comment = "";
    let handleSubmit = jest.fn();

    render(<FeedbackForm onSubmit={handleSubmit} />);
    let rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });
    let textArea = screen.getByLabelText(/Comments/);
    fireEvent.change(textArea, { target: { value: comment } });
    let submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(submitButton).toHaveAttribute("disabled");
    

  })

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    let score = "9";
    let handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    let rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    let submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
    expect(submitButton).toBeEnabled();
  });
});
