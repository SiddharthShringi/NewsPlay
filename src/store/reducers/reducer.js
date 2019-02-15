const initState = {
  news: {}
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case "INDIA_NEWS":
      return { ...state, news: action.news}
    case "FETCH_NEWS":
      return { ...state, news: action.news };
    default:
      return state;
  }
}
