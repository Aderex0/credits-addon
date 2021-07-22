// Components
import EditorSlider from "../../../components/credits_panel/interfaces/EditorSlider";
// React testing library
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// Redux
import { Provider } from "react-redux";
import { triggerSlider } from "../../../redux/actions/credits.action";
// Utils
import { makeTestStore } from "../testUtils";

describe("<EditorSlider />", () => {
  const TestComponent = () => {
    return "testChild";
  };

  const mockStore = makeTestStore();

  render(
    <Provider store={mockStore}>
      <EditorSlider>
        <TestComponent />
      </EditorSlider>
    </Provider>
  );

  const slider = screen.getByTestId("slider");

  // Test if component gets passed
  test("loads children", () => {
    expect(slider).toHaveTextContent("testChild");
  });

  test("useEffect renders slider in default position", () => {
    expect(slider).toHaveStyle("transform: translateY(220px)");
  });

  // TODO: Need to test if different scenarions on triggering slides

  //   test("useEffect renders slider to open position", async () => {
  //     await mockStore.dispatch(triggerSlider({ add: true, edit: false, open: false }));
  //     expect(slider).toHaveStyle("transform: translateY(0px)");
  //   });
});
