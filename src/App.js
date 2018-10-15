import React, { Component } from 'react';
import Content from "./Content";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {

  render() {
    return <ApolloProvider client={client}>
      <div className="container">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
        </nav>
        <div className="filter-wrap">
          {/* <Courses /> */}
          <Content/>
        </div>
      </div>
    </ApolloProvider>;
  }
}

export default App;