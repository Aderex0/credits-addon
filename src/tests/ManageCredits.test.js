// React-testing
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ManageCredits from "../components/manage_credits/ManageCredits";
// Redux
import { Provider } from "react-redux";
import store from "../redux/store";
// Apollo
import { MockedProvider } from "@apollo/client/testing";
import { getOrganisation } from "../graphql/queries";

// Cleanup done automatically

const mocks = [
  {
    request: {
      query: getOrganisation,
      varibles: { id: "abc123edf456" },
    },
    result: {
      data: {
        id: "abc123edf456",
        name: "Apple",
        credits: 20000,
      },
    },
  },
];

describe("<ManageCredits />", () => {
  test("renders the ManageCredits component with API request withouth error", async () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <ManageCredits />
        </MockedProvider>
      </Provider>
    );
    expect(queryByTestId).toBeTruthy();

    // await new Promise(res => setTimeout(resolve, 0))
  });
});
