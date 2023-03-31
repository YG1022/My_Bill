import SignIn from "./SignIn";
import { render, screen } from "../../utils/custom-testing-library";
import React from "react";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

describe("SignIn", () => {
  it("should render", () => {
    // Arrange
    const { container } = render(<SignIn />);
    // Act

    // Assert
    expect(container).toMatchSnapshot();
  });

  it("should render with error", async () => {
    // Arrange
    render(<SignIn />);
    // Act
    await userEvent.type(screen.getByPlaceholderText("Account Name"), "test");
    await userEvent.clear(screen.getByPlaceholderText("Password"));
    await userEvent.click(screen.getByRole("button", { name: "Sign in" }));
    // Assert
    await waitFor(() => {
      expect(screen.getByText("'password' is required")).toBeInTheDocument();
    });
  });
});