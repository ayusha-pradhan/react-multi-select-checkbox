import React, { Component } from "react";
import "./App.css";
import Check from "./components/check";
// import dropList from "./dropList";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      items: [
        { id: 1, value: "Mobile", select: false },
        { id: 2, value: "Pen", select: false },
        { id: 3, value: "Laptop", select: false },
        { id: 4, value: "Mouse", select: false }
      ]
    };
  }


  handleAllChecked = e => {
    const items = Object.assign([], this.state.items);
    items.forEach(item => (item.select = e.target.checked));
    this.setState({ items: items });
  };

  handleCheckedElement = e => {
    const items = Object.assign([], this.state.items);
    items.forEach(item => {
      if (item.value === e.target.value) 
       item.select = e.target.checked
      ;
      
    });
    
    this.setState({ items: items });
  };

  removedItem = (index,e) =>{
    
    const items = Object.assign([],this.state.items);
    items.splice(index,1);
    this.setState({ items: items });
  };  

  // handleCheckedAll(){
  //   if (items.length === )
  //   const items = Object.assign([], this.state.items);
  //   items.forEach(item => {
  //     if (item.length === e.target.value)
  //       item.select = e.target.checked
  //         ;

  //   });

  //   this.setState({ items: items });
  // };

  // handleCheckaAll() {
  //   if (this.state.items.length === items.props.select.length)
  //   return this.state.items.select
  // };

  // totalChecked() {
  //   return this.state.items.filter(props => props.select).length;
  // };


  render() {
    return (
      <div className="App">
        <h1> Select the Items </h1>
        <input
          type="checkbox"
          onChange={this.handleAllChecked}
          value="checkedall"
        />Select All
        <ul>
          {this.state.items.map((item, index) => {
            return (
              <Check
                delEvent={this.removedItem.bind(this, index)}
                key={index}
                handleCheckedElement={this.handleCheckedElement}
                // handleAllChecked={this.handleAllChecked}
                // isCheckedAll={this.state.isAllSelected}
                {...item}
              />
            );
          })}
        </ul>
        {/* Total Checkbox Checked: {this.totalChecked()} */}
        
        <select>
          
          <option>Remaining Item</option>
          
          {this.state.items.map(item => {
           
           return (<option value={item.value}>{item.value}</option>);
          })
        } 
             
          
        </select>
      </div>
    );
  }
}

export default App;
