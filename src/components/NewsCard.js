import React, { Component } from 'react';
import moment from 'moment';

class NewsCard extends Component {
  render() {
    const {title, description, url, urlToImage, publishedAt} = this.props.article;
    return (
      <div className="card">
          <img src={urlToImage}></img>
          <div className="detail">
            <a href={url} target="_blank"><h3>{title}</h3></a>
            <p className="description">{description}</p>
            <p className="published">{moment(publishedAt).format('LL')}</p>
          </div>
      </div>
    )
  }
}

export default NewsCard;
