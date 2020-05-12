import {ActionType} from '../../constants/ActionType';

const initialState = {
  token: null,
  userId: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action: { payload: {token?: String, userId?: String}; type: String; }) => {
  switch (action.type) {
    case ActionType.IS_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload
      }
    case ActionType.CHECK_LOGIN:
      return {
        ...state,
      }
    case ActionType.GET_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        isAuthenticated: true,
      }
    case ActionType.CHECK_REGISTER:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        isAuthenticated: true,
      }
    case ActionType.FAILURE_LOGIN:
      return {
        ...state,
        loading: false
      }
    case ActionType.CHECK_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        isAuthenticated: false
      }
    // case ActionType.FETCH_OFFERS_REQUEST:
    //   return Object.assign({}, state, {
    //     isOffersFetching: action.payload
    //   });
    // case ActionType.FETCH_OFFERS_SUCCESS:
    //   return Object.assign({}, state, {
    //     offers: action.payload,
    //     isOffersFetching: false
    //   });
    // case ActionType.FETCH_OFFERS_FAILURE:
    //   return Object.assign({}, state, {
    //     isOffersFetching: action.payload
    //   });
    // case ActionType.ADD_LOGIN:
    //   return Object.assign({}, state, {
    //     login: action.payload
    //   });
    // case ActionType.LOAD_REVIEWS:
    //   return Object.assign({}, state, {
    //     reviews: action.payload
    //   });
    // case ActionType.UPDATE_FAVORITE_OFFER:
    //   return Object.assign({}, state, {
    //     offers: [
    //       ...state.offers.slice(0, action.payload.id - 1),
    //       action.payload,
    //       ...state.offers.slice(action.payload.id)
    //     ]
    //   });
    // case ActionType.FETCH_FAVORITES_REQUEST:
    //   return Object.assign({}, state, {
    //     isFavoritesFetching: true
    //   });
    // case ActionType.FETCH_FAVORITES_SUCCESS:
    //   return Object.assign({}, state, {
    //     favorites: action.payload,
    //     isFavoritesFetching: false
    //   });
    // case ActionType.FETCH_FAVORITES_FAILURE:
    //   return Object.assign({}, state, {
    //     isFavoritesFetching: false
    //   });
    default:
      return state;
  }
};

export default authReducer;

