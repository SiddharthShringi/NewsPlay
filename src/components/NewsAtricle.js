import React, { Component } from 'react';
import { connect } from 'react-redux';
import {firstPageAction} from '../store/actions/fetchNewsAction'
import NewsCard from './NewsCard';

class NewsArticle extends Component {
  state = {
    newsArts: {}
  }

  componentDidMount() {
    this.props.dispatch(firstPageAction())
  }
  render() {
    const { news } = this.props;
    return (
      <div className='main'>
          {
            news.articles && news.articles.map((obj, id) => {
              return <NewsCard key={id} article={obj} />
            })
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
export default connect(mapStateToProps)(NewsArticle);
