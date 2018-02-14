import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItemComponent/ListItem.js'
class MyList extends Component {
  constructor(props){
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ""
    }
  }

  clearList(e){
    this.setState({
      toDoItemArray: []
    })
  }
  newItemChange(e){
    this.setState({
      newItem: e.target.value
    })
  }
  addItem(e){
    e.preventDefault()
    let toDos = this.state.toDoItemArray
    toDos.push(this.state.newItem)
    this.setState({
      toDoItemArray: toDos,
      newItem: ""
    })
  }
  render() {
    let todoItems = this.state.toDoItemArray.map((item,index) => {
      return <ListItem doThis={item} key={index}/>
    })
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type="text" onChange={(e) => this.newItemChange(e)} value={this.state.newItem}/>
          <button onClick={(e) => this.addItem(e)}>Add new todo.</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Clear this list</button>
      </div>
    );
  }
}

export default MyList;
