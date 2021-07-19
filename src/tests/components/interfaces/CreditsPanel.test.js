import CreditsPanel from "../../../components/credits_panel/interfaces/CreditsPanel";
// React testing library
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// Redux
import { Provider } from "react-redux";
import { makeStore } from "../../../redux/store";

describe("<CreditsPanel />", () => {
  const mockStore = makeStore();

  const props = {
    organisation: {
      id: "testId001",
      name: "Apple",
      credits: 20000,
    },
    handleModalOpening: jest.fn(),
    handleSliderOpening: jest.fn(),
    handleConfirm: jest.fn(),
    handleSetCredits: jest.fn(),
    editorText: "Add",
    loading: false,
    credits: 0,
    openSlider: {
      add: false,
      edit: false,
      log: false,
    },
    log: {
      id: "testId0002",
      oldValue: 10000,
      newValue: 20000,
    },
  };

  const { organisation, editorText, openSlider, loading } = props;

  render(
    <Provider store={mockStore}>
      <CreditsPanel organisation={organisation} editorText={editorText} openSlider={openSlider} loading={loading} />
    </Provider>
  );

  test("renders props correctly", () => {
    const orgName = screen.getByTestId("org-name");
    const orgCredits = screen.getByTestId("org-credits");

    expect(orgName).toHaveTextContent(organisation.name);
    expect(orgCredits).toHaveTextContent(organisation.credits);
  });

  // Need to test if loading is true then I cannot see the credits.
});
