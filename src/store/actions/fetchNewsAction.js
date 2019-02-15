export const fetchNewsAction = category => {
  return dispatch => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=ff1af27ab56f47e69a469f4bcf70ca08`
    )
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "FETCH_NEWS",
          news: data
        });
      });
  };
};

export const firstPageAction = () => {
  return dispatch => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=ff1af27ab56f47e69a469f4bcf70ca08`
    )
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "INDIA_NEWS",
          news: data
        });
      });
  };
};
