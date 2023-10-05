import { View } from "../../store/App/slice";
import store from "../../store/store";

// Maps the current view to what view would be selected if toggled
export const toggleView = (): View => {
  const $view = store.getState().app.view;

  const toggleMapping = {
    [View.Degree]: View.Schedule,
    [View.Schedule]: View.Degree,
  };
  return toggleMapping[$view];
};
