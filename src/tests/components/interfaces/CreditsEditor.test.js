import CreditsEditor from "../../../components/credits_panel/interfaces/CreditsEditor";
// React testing library
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<CreditsEditor />", () => {
  const mockProps = {
    editorText: "Add",
    credits: 0,
  };

  const { editorText, credits } = mockProps;

  render(<CreditsEditor editorText={editorText} credits={credits} />);

  // Test props
  test("renders the correct props", () => {
    const creditsLabel = screen.getByTestId("credits-label");
    const creditsInput = screen.getByTestId("credits-input");
    const okButton = screen.getByTestId("ok-button");

    expect(creditsLabel).toHaveTextContent(editorText);
    expect(creditsInput).toHaveValue(credits);
    expect(okButton).toHaveTextContent(editorText);
  });
});
