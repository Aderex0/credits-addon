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

  // TODO ask about changing props/state

  // Tests props
  test("renders props correctly", () => {
    render(
      <Provider store={mockStore}>
        <CreditsPanel
          organisation={organisation}
          editorText={editorText}
          openSlider={openSlider}
          loading={loading}
        />
      </Provider>
    );

    const orgName = screen.getByTestId("org-name");
    const orgCredits = screen.getByTestId("org-credits");

    expect(orgName).toHaveTextContent(organisation.name);
    expect(orgCredits).toHaveTextContent(organisation.credits);
  });

  // Tests an edge case of loading: true
  test("displays loading stage on loading: true", () => {
    render(
      <Provider store={mockStore}>
        <CreditsPanel
          organisation={organisation}
          editorText={editorText}
          openSlider={openSlider}
          loading={true}
        />
      </Provider>
    );

    const loading = screen.getByTestId("loading");

    expect(loading).toBeTruthy();
  });
});
