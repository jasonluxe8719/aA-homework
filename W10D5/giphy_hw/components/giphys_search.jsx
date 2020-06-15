import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: 'something'};
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.props.searchTerm);
  }

  render() {
    return(
      <div>
        <form action="">
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <button onSubmit={this.handleSubmit}>Search Giphys</button>
        </form>
      </div>

    )

  }
}

export default GiphysSearch;