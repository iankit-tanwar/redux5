import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { A, B ,C} from './redux/constant/constant';


import changeToA from './redux/actioncreator/actionCreators'




function App(props) {
  return (
    <div className="App">
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {props.state.fname}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <button onClick={props.change1}>click me</button>
          <button onClick={props.change2}>click me</button>
          <button onClick={props.change3}>click me</button>
          
         
      </header>
    </div>
  );
}

let mapStateToProps=(store)=>{
  return{ state:store}
  
}
let mapDispatchToProps=(dispatch)=>{

  return {
    change1:()=>{dispatch(changeToA())},
    change2:()=>{dispatch({type:B})},
    change3:()=>{dispatch({type:C})}
  
}
}
export default connect (mapStateToProps ,mapDispatchToProps ) (App);
