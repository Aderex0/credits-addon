// Redux
import { makeStore } from "../../redux/store";

export const makeTestStore = () => {
  const store = makeStore();
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
};
