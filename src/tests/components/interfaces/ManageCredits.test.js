// Components
import ManageCredits from "../../../components/manage_credits/interfaces/ManageCredits";
// React testing library
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<ManageCredits />", () => {
  const organisation = {
    id: "testId001",
    credits: 20000,
    name: "Apple",
  };

  const handleModalOpening = jest.fn();

  // Tests props
  test("contains the correct prop values", () => {
    render(<ManageCredits organisation={organisation} />);

    const credits = screen.getByTestId("credits");
    expect(credits).toHaveTextContent(
      `Available credits: ${organisation.credits}`
    );
  });

  // Tests button props and a click
  // test("Contains a correct button that presses once", () => {
  //   render(
  //     <ManageCredits
  //       organisation={organisation}
  //       handleModalOpening={handleModalOpening}
  //     />
  //   );

  //   const button = screen.getByTestId("modal-button");
  //   expect(button).toHaveTextContent("Manage credits");
  //   expect(button).toHaveStyle("background-color: rgb(250, 111, 0)");

  //   fireEvent(button, new MouseEvent("click", { bubbles: true }));
  //   expect(handleModalOpening).toHaveBeenCalledTimes(1);
  // });
});
