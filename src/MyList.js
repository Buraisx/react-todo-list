import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItemComponent/ListItem.js'
class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item,index) => {
      return <ListItem doThis={item} key={index}/>
    })
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default MyList;
