import {generateActions} from "../../helpers/redux";

export const actionTypes = generateActions(
  'demo2',
  [
    'SAVE_DEMO',
  ] as const
);