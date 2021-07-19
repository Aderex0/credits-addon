// Redux
import credits from "../../redux/reducers/credits.reducer";
import * as actions from "../../redux/actions/credits.action";

describe("Credits reducer", () => {
  const initState = {
    organisations: [],
    loading: false,
    error: null,
    organisation: {},
    openModal: false,
    credits: 0,
    log: [],
    openSlider: {
      add: false,
      edit: false,
      log: false,
    },
  };

  // Initial state
  it("Should return initial state", () => {
    expect(credits(undefined, {})).toEqual(initState);
  });

  // REQUEST actions
  it("Should change the loading state on REQUEST requests", () => {
    expect(credits(initState, actions.updateCreditsRequest())).toEqual({
      ...initState,
      loading: true,
    });
    expect(credits(initState, actions.getOrganisationRequest())).toEqual({
      ...initState,
      loading: true,
    });
    expect(credits(initState, actions.getLogsByOrganisationRequest())).toEqual({
      ...initState,
      loading: true,
    });
  });

  // FAIL actions
  it("Should change the loading/error state on FAIL request", () => {
    const error = "Incoming error";

    expect(credits(initState, actions.updateCreditsFail(error))).toEqual({
      ...initState,
      loading: false,
      error: error,
    });

    expect(credits(initState, actions.getOrganisationFail(error))).toEqual({
      ...initState,
      loading: false,
      error: error,
    });

    expect(credits(initState, actions.getLogsByOrganisationFail(error))).toEqual({
      ...initState,
      loading: false,
      error: error,
    });
  });

  it("Updates state when getLogsByOrganisation request SUCCEEDS", () => {
    const mockLog = {
      date: "10/11/21, 09:03:26",
      oldValue: 1000,
      newValue: 2000,
    };

    expect(credits(initState, actions.getLogsByOrganisationSuccess(mockLog))).toEqual({
      ...initState,
      loading: false,
      log: mockLog,
    });
  });

  it("Updates state when updateCredits request SUCCEEDS", () => {
    const mockUpdate = {
      id: "testId001",
      credits: 2000,
    };

    expect(credits(initState, actions.updateCreditsSuccess(mockUpdate))).toEqual({
      ...initState,
      loading: false,
      organisation: {
        ...initState.organisation,
        credits: mockUpdate.credits,
      },
    });
  });

  it("Updates state when getOrganisation request SUCCEEDS", () => {
    const mockOrganisation = {
      id: "testId001",
      name: "Apple",
      credits: 2000,
    };

    expect(credits(initState, actions.getOrganisationSuccess(mockOrganisation))).toEqual({
      ...initState,
      loading: false,
      organisation: mockOrganisation,
    });
  });

  it("Opens modal", () => {
    const operator = { openModal: true };

    expect(credits(initState, actions.handleModal(operator))).toEqual({
      ...initState,
      ...operator,
    });
  });

  it("Closes modal with slider", () => {
    const operator = {
      openModal: false,
      error: null,
      openSlider: {
        add: false,
        edit: false,
        log: false,
      },
    };

    expect(credits(initState, actions.handleModal(operator))).toEqual({
      ...initState,
      ...operator,
    });
  });

  it("Triggers slider", () => {
    expect(credits(initState, actions.triggerSlider(false))).toEqual({
      ...initState,
      openSlider: false,
    });
  });

  it("Adds credits - controlled form", () => {
    expect(credits(initState, actions.addCredits(3000))).toEqual({
      ...initState,
      credits: 3000,
    });
  });
});
