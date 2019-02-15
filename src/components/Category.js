import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchNewsAction } from '../store/actions/fetchNewsAction'

class Category extends Component {
  state = {
    category: ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]
  }
  render() {
    // const {fetchNewsAction} = this.props;
    return (
      <div className="category">
          <ul>
            {
              this.state.category.map( value => {
                return <li key={value}><button onClick={() => this.props.dispatch(fetchNewsAction(value))}>{value}</button></li>
              })
            }            
          </ul>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchNewsAction:() => dispatch(fetchNewsAction)
//   }
// }

export default connect()(Category);
