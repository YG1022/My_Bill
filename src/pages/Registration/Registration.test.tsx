import Registration from "./Registration";
import { render, screen } from "../../utils/custom-testing-library";
import React from "react";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

describe("Registration", () => {
  it("should render", () => {
    // Arrange
    const { container } = render(<Registration />);
    // Act

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("should show error when user click register without any data", () => {
    // Arrange
    render(<Registration />);
    // Act
    userEvent.click(screen.getByRole("button", { name: "Register" }));
    // Assert
    waitFor(() => {
      expect(screen.getByText("Please input your account name!")).toBeInTheDocument();
      expect(screen.getByText("Please input your password!")).toBeInTheDocument();
      expect(screen.getByText("Please confirm your password!")).toBeInTheDocument();
    });
  });

  it("should show error message when user type different password", function() {
    // Arrange
    render(<Registration />);
    // Act
    userEvent.type(screen.getByLabelText("Account Name"), "test");
    userEvent.type(screen.getByLabelText("Password"), "test");
    userEvent.type(screen.getByLabelText("Confirm Password"), "test1");
    userEvent.click(screen.getByRole("button", { name: "Register" }));
    // Assert
    waitFor(() => {
      expect(screen.getByText("The two passwords that you entered do not match!")).toBeInTheDocument();
    });
  });
});