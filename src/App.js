import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import Notifier from './Notifier';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  // addData = (item) => {
  //   Data.push(item)
  // }
  showForm = () => {
    if (this.props.isEdit) {
      return <NoteForm/>
    }
  }
  render() {
    // Data.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });
    return (
      <div>
        <Nav />
        <Notifier/>
        <div className="container">
          <div className="row">
            <NoteList />
            {/* <NoteForm getData={(item) => this.addData(item)} /> */}
            {
              this.showForm()
            }
            
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    chageEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
