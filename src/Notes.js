import React, { Component } from 'react';
import Modal from "react-responsive-modal";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
class Notes extends Component {
    
    state = { open: false,checked: false};

    onOpenModal = () => {
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
             <button onClick={this.onOpenModal}>{this.props.notes.email}</button>                          
            </div>
            <Modal open={open} onClose={this.onCloseModal} little>
            <h2>Notes</h2>
            <p>
               {this.props.notes.notes}
                </p>
            </Modal>
         </div>
    )
  }
}

export default Notes
