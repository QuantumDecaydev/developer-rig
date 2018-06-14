import { UserSession } from '../models/user-session';
import { GlobalState } from '../models/global-state';
import * as sessionActions from '../actions/user-session';

export interface SessionState {
  sessionReceived: boolean;
  userSession?: UserSession;
}

export const getInitialState = (): SessionState => ({
  sessionReceived: false,
});

export function sessionReducer(state = getInitialState(), action: sessionActions.All): SessionState {
  switch (action.type) {
    case sessionActions.USER_LOGIN:
      return {
        ...state,
        sessionReceived: true,
        userSession: action.userSession,
      };
    case sessionActions.USER_LOGOUT:
      return {
        ...state,
        sessionReceived: false,
        userSession: null,
      };
    default:
      return state;
  }
}

export function getUserSession(state: GlobalState) {
  return state.session && state.session.userSession;
}
