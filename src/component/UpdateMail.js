import React, { Component } from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

class UpdateMail extends Component {
  render() {
      console.log("Update",this.props.data);
    return (    
            <Mutation
                mutation={gql`
                mutation{
                        updateMail(id:7,is_active:"YES")
                        { 
                            id
                        }           
                    }
              `}
            >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    return "hello";
                }}
            </Mutation>  
   
    )
  }
}
export default UpdateMail