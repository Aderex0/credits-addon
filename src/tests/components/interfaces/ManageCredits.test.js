// Components
import ManageCredits from "../../../components/manage_credits/interfaces/ManageCredits";
// React testing library
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<ManageCredits />", () => {
  const organisation = {
    id: "testId001",
    credits: 20000,
    name: "Apple",
  };

  render(<ManageCredits organisation={organisation} />);

  test("contains the correct prop values", async () => {
    const credits = await screen.findByTestId("credits");
    expect(credits).toHaveTextContent(`Available credits: ${organisation.credits}`);
  });
});
