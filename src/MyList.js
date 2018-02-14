import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItemComponent/ListItem.js'
class MyList extends Component {
  constructor(props){
    super()
    this.state = {
      toDoItemArray: props.theList.map((item,index) => {
        return <ListItem doThis={item} key={index}/>
      })
    }
  }

  clearList(e){
    this.setState({
      toDoItemArray: []
    })
  }
  render() {
    let todoItems = this.props.theList.map((item,index) => {
      return <ListItem doThis={item} key={index}/>
    })
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {this.state.toDoItemArray}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Clear this list</button>
      </div>
    );
  }
}

export default MyList;
