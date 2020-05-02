import React, {Component} from 'react';
import TrelloList from './TrelloList'
import { connect } from 'react-redux';
import TrelloCard from './TrelloCard';

class App extends Component {
  render() {
    
    const {lists} = this.props;
    return(
    <div className="App">
      <h2>Trello Clone</h2>
      {lists.map(list => (
        <TrelloList title={list.title} cards={list.cards}/>
      ))}
    </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
