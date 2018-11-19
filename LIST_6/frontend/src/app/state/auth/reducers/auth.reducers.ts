import { AuthActionsUnion, AuthActionTypes } from '../actions/auth.actions';

export interface IState {
  isLoggedIn: boolean;
  username: string;
  token: string;
}

export const initialState: IState = {
  isLoggedIn: false,
  username: undefined,
  token: undefined
};

export function reducer(state = initialState, action: AuthActionsUnion): IState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        token: action.payload.token
      };
    }

    case AuthActionTypes.Logout: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getIsLoggedIn = (state: IState) => state.isLoggedIn;
export const getUsername = (state: IState) => state.username;
