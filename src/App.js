import React,{Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }

    
  }

  updateInput(key,value){
    //update react state
    console.log("input is updated");
    console.log(key);
    console.log(value);
    this.setState({
      [key]:value
    });
    console.log(this.state);
  }

  addItem(){
    console.log("add item is working");
    // creater item
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy of current list of items
    const list = [...this.state.list];
    
    // add item to list
    list.push(newItem);
    console.log(list);
    // update state with new item
    this.setState({
      list,
      newItem:""
    })
    console.log(this.state.list);
    
  }

  deleteItem(id){
    //copy current list 
    const list =[...this.state.list];

    //filter item out of the list
    const updatedList = list.filter(item=> item.id!==id);

    this.setState({list: updatedList});
    

  }
  render(){
    return(
      <div className="App">
        <div className="app-title">MY LIST</div>
        <div className="container">
          Add an Item....
          <br/>
          <input
          type="text"
          placeholder="Type items here........"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem",e.target.value)}
          />

          <button className="add-btn"
          onClick={()=>this.addItem()}
          >
            +
          </button>

          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button className="btn"
                  onClick={()=>this.deleteItem(item.id)}
                  >
                   x 
                  </button>
                </li>
              )
            })}
          </ul>
        </div>      
      </div>
    );

  }
}

export default App;