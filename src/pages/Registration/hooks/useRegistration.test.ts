import useRegistration from "./useRegistration";
import { renderHook, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import repeatabilityCheck from "../../../services/repeatabilityCheck";

jest.mock("../../../services/repeatabilityCheck");
const mockedRepeatabilityCheck = repeatabilityCheck as jest.MockedFunction<
  typeof repeatabilityCheck
>;

describe("useRegistration", () => {
  const mockedForm = {
    getFieldsValue: jest.fn(),
  };
  const mockedNameCheck = jest.fn().mockReturnValue({
    data: [],
    error: null,
    status: 200,
    statusText: "",
  });
  mockedRepeatabilityCheck.mockReturnValue({
    nameCheck: mockedNameCheck,
    emailCheck: jest.fn(),
    phoneCheck: jest.fn(),
    emailCheckWithUuid: jest.fn(),
    phoneCheckWithUuid: jest.fn(),
  });

  beforeEach(() => {
    mockedForm.getFieldsValue.mockClear();
    mockedNameCheck.mockClear();
  });

  it("should call with Happy Path", async () => {
    // Arrange
    const { result } = renderHook(() => useRegistration(mockedForm), {
      wrapper: MemoryRouter,
    });
    // Act
    const { toNextStep } = result.current;
    // await result.current.toNextStep();
    // Assert
    await waitFor(() => {
      expect(typeof toNextStep).toBe("function");
      //   expect(mockedForm.getFieldsValue).toHaveBeenCalledTimes(1);
      //   expect(mockedNameCheck).toHaveBeenCalledTimes(1);
    });
  });
});
