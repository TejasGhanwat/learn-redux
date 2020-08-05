import * as actions from "./actionTypes";

export function bugAdded(desc) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      desc,
    },
  };
}

export function bugRemoved(id) {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id,
    },
  };
}

export function bugResolved(id) {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id,
    },
  };
}
