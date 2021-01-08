import React, { Component } from 'react';
import Logo from "./logo.js";
import SearchBar from "./searchBar.js";
import RecentPosts from "./recentPosts.js";

export default class Home extends Component {
  
  handleSearchBarSubmit(query) {
    this.props.history.push('/results');
  }
  
  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }   
}
