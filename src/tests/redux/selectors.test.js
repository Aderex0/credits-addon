describe("Redux selectors:", () => {
  const mockState = {
    organisation: {
      name: "Apple",
    },
  };

  // TODO: Makes no sense
  jest.mock("react-redux", () => ({
    useSelector: jest.fn().mockImplementation((selector) => selector()),
  }));

  test("organisation and error", () => {
    jest.mock("../../components/manage_credits/ManageCreditsContainer", () => ({
      organisation: jest.fn().mockReturnValue(mockState.organisation),
      error: jest.fn().mockReturnValue("This is an error"),
    }));
  });
});
