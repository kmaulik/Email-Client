import React, { Component } from 'react';
import { Query } from "react-apollo";
import ReactPaginate from 'react-paginate';
import Notes from "./Notes";
import gql from "graphql-tag";
import Select from 'react-select';
const options = [
    { value: 'ALL', label: 'ALL' },
    { value: 'NO', label: 'UNREAD' },
    { value: 'YES', label: 'READ' },    
  ];
 class Content extends Component {
    state = {selectedOption: null,data: [], offset: 0,selectOpt:null };
    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);
        console.log(offset,selected);
    
        // this.setState({offset: offset}, () => {

        //     //this.loadCommentsFromServer();
        // });
        };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption.value);
        this.setState({selectOpt:selectedOption.value})
        }
  render() {
    const {selectedOption } = this.state;
    const select =this.state.selectOpt;
    return (<div>
        <div className="filter-wrap-header">
        <label className="filter-wrap-label">Filter</label>
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
            <button type="button" class="btn btn-primary">Mark as Read</button>
        </div>
        {select==="YES"?
        <Query
        query={gql`
        {
            mails(is_active:"YES") { 
                id           
                email
                notes
                is_active
            }
          }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
             return data.mails.map((mailsNotes) => (                
                <Notes notes={mailsNotes}/>                
        
            ));            
        }}
    </Query>:select==="NO"? <Query
        query={gql`
        {
            mails(is_active:"NO") {  
                id          
                email
                notes
                is_active
            }
          }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
             return data.mails.map((mailsNotes) => (                
                <Notes notes={mailsNotes}/>    
               
        
            ));            
        }}
    </Query>: <Query
        query={gql`
        {
            mails {
                id            
                email
                notes
                is_active
            }
          }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
             return data.mails.map((mailsNotes) => (                
                <Notes notes={mailsNotes}/>    
               
        
            ));            
        }}
    </Query>}
    <div className="pagination-wrap">
    <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={<a href="">...</a>}
        breakClassName={"break-me"}
        pageCount={2}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
    />
    </div>
    </div>)
  }
}

export default Content

