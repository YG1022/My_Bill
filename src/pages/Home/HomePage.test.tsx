import { render, screen } from "../../utils/custom-testing-library";
import React from "react";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render correct home page", () => {
    // Arrange
    render(<HomePage />);
    // Act

    // Assert
    expect(screen.getByText("Welcome to My Bill!")).toBeInTheDocument();
  });
});