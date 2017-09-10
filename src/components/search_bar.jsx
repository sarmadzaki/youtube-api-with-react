import React, { Component } from 'react';
import '../App.css';
import SearchBar from 'material-ui-search-bar'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div>
        <SearchBar
          onChange={(event) => this.onInputChange(event)}
          style={{
            margin: '7px',
            maxWidth: 800}}
    />
      </div>
    );
  }
}
export default Search;