import React, {Component} from 'react';
import TrelloList from './TrelloList'
import { connect } from 'react-redux';
import './App.styles.css';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {
  
  onDragEnd = () => {

  }
  
  render() {
    const {lists} = this.props;
    return(
    <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
        <h2>Trello Clone</h2>
        <div className = 'Container'>
          {lists.map(list => (
            <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards}/>
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
