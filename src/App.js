import React from 'react';
import poems from './poems.json'
import { PoemForm } from './PoemForm';
import { PoemList } from './PoemList';

class App extends React.Component {
  
  state = {
    poems: poems
  }

  newPoem = (poem) => {
    this.setState({poems: [...poems, poem]})
  }

  deletePoem = (item) => {
    this.setState({poems: this.state.poems.filter( poem => poem.name !== item.name)})
  }

  updatePoem = (poem, content) => {
    let index = this.state.poems.indexOf(poem)
    this.setState({
      poems: [
        ...this.state.poems.slice(0, index),
        {...poem, content: content}
      ]
    })
  }

  render(){
    return (
      <div className="ui container">
        <PoemForm newPoem = {this.newPoem}/>
        <PoemList poems = {this.state.poems} delete = {this.deletePoem} update = {this.updatePoem} />
      </div>
    );
  }

}

export default App;
