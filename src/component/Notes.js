import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import UpdateMails from "./UpdateMail";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

class Notes extends Component {
    
    state = { open: false,checked: false};

  onOpenModal = (id,active) => {
    console.log("id", id,active);
      this.setState({ open: true });
       
    };
  
    onCloseModal = () => {      
      this.setState({ open: false });
    };

   
    handleCheck= () =>{
    this.setState({checked: !this.state.checked});
    }
    
  render() {
    const { open} = this.state;
    var msg;
    if (this.state.checked) {
      msg = "checked";
    } else {
      msg = "unchecked";
    }
    return (
        <div className="card" style={{ 'width': '100%', 'marginTop': '10px' }}>
            
            <div className="card-body">          
            <input type="checkbox" onChange={this.handleCheck}    defaultChecked={this.state.checked}/>
            {/* <p>this box is {msg}.</p> */}
          <button onClick={() => this.onOpenModal(this.props.notes.id,this.props.notes.is_active)}>Email Subject  {this.props.notes.id}</button>                          
            </div>
            <Modal open={open} onClose={this.onCloseModal} little>            
              <h2>{this.props.notes.email}</h2>
                <p>
                 {this.props.notes.notes}
                </p>
            </Modal>
         </div>
    )
  }
}

export default Notes
