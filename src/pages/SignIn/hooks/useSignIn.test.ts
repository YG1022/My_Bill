import useSignIn from "./useSignIn";
import { renderHook, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userSignIn from "../../../services/userSignIn";

jest.mock("../../../services/userSignIn");
const mockedUserSignIn = userSignIn as jest.MockedFunction<typeof userSignIn>;
const mockedForm = {
  setFields: jest.fn(),
};

describe("useSignIn", () => {
  beforeEach(() => {
    mockedForm.setFields.mockClear();
    mockedUserSignIn.mockClear();
  });

  it("should excute userSignIn", async () => {
    // Arrange
    mockedUserSignIn.mockResolvedValue(true);

    const { result } = renderHook(() => useSignIn(mockedForm), { wrapper: MemoryRouter });
    // Act
    await result.current.signIn();
    // Assert
    await waitFor(() => {
      expect(mockedForm.setFields).not.toBeCalled();
    });
  });

  it("should return error", async()=> {
    // Arrange
    mockedUserSignIn.mockResolvedValue(false);

    const { result } = renderHook(() => useSignIn(mockedForm), { wrapper: MemoryRouter });
    // Act
    await result.current.signIn();
    // Assert
    await waitFor(() => {
      expect(mockedForm.setFields).toBeCalled();
    });});
});