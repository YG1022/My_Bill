import { render, screen } from "../../utils/custom-testing-library";
import React from "react";
import EditProfiles from "./EditProfiles";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

describe("EditProfiles", () => {
  it("should render", () => {
    // Arrange
    const { container } = render(<EditProfiles />);
    // Act

    // Assert
    expect(container).toMatchSnapshot("EditProfiles.test.tsx.snap");
  });

  it("should skip when click skip button", () => {
    // Arrange
    render(<EditProfiles />);
    // Act
    userEvent.click(screen.getByText("Skip"));
    // Assert
    expect(screen.getByText("Skip")).toBeInTheDocument();
  });

  it("should show error if email and phone number is empty", function() {
    // Arrange
    render(<EditProfiles />);
    // Act
    userEvent.click(screen.getByText("Submit"));
    // Assert
    waitFor(() => {
      expect(screen.getByText("Please input your E-mail!")).toBeInTheDocument();
      expect(screen.getByText("Please input your phone number!")).toBeInTheDocument();
    });
  });
});