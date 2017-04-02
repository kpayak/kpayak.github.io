import React, {Component} from 'react';

//Function based component
// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends Component {

  //To initialize state
  constructor(props) {
    super(props);

    //Attach a new property -> term to global React state
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange = (term) => {
    this.setState({term: term});
    this.props.onInputTextChange(term);
  }
}

export default SearchBar;
