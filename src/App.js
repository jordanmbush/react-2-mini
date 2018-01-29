import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(props) {
    super(props)
  
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  };
  

  // updateColor
  updateColor(color){
    this.setState({
      fontColor: color,
    })
  }

  // updateSize
  updateSize(size){
    this.setState({
      fontSize: size,
    })
  }

  // updateFamily
  updateFamily(family){
    this.setState({
      fontFamily: family,
    })
  }

  // updateEditStatus
  updateEditStatus(status){
    this.setState({
      allowEdit: status,
    })
  }

  render() {
    console.log(this.state.allowEdit);
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
          <EditToggle update={this.updateEditStatus} />
          <ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit} />
          <SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit} />
          <FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
          <TextContainer fontColor={this.state.fontColor} fontSize={this.state.fontSize} fontFamily={this.state.fontFamily} />
        </div>
      </div>
    )
  }
}

export default App;
