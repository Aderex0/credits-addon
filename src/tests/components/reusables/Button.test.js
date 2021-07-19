// Component
import Button from "../../../components/reusables/Button";
// React testing library
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const props = {
  text: "Modal-button",
  testId: "open-modal",
  btnColor: "rgb(250, 111, 0)",
  onClick: jest.fn(),
};

describe("<Button />", () => {
  const { text, testId, btnColor, onClick } = props;

  test("recieves and dispatches props", () => {
    render(<Button text={text} testId={testId} btnColor={btnColor} onClick={onClick} />);
    const button = screen.getByTestId("open-modal");

    expect(button).toHaveTextContent(text);
    expect(button).toHaveStyle("background-color:" + btnColor);

    fireEvent(button, new MouseEvent("click", { bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
