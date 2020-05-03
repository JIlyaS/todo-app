import {ActionType} from '../../constants/ActionType';

const initialState = {
  isAuthenticated: false
};

const authReducer = (state = initialState, action: { payload: any; type: String; }) => {
  switch (action.type) {
    case ActionType.FETCH_LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload
      }
    case ActionType.FETCH_REGISTER:
      return {
        ...state,
        isAuthenticated: action.payload
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

