import React, { Component } from 'react';
import Logo from "./logo.js";
import SearchBar from "./searchBar.js";
import RecentPosts from "./recentPosts.js";

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div><Logo /></div>
        <div><SearchBar /></div>
        <div><RecentPosts /></div>
      </div>
    );
  }   
}
