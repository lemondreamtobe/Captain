import {generateActions} from "../../helpers/redux";

export const actionTypes = generateActions(
  'demo',
  [
    'SAVE_DEMO',
  ] as const
);