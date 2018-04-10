import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''}
    }
    render() {
        //the setState is a react method that INFORMS react
        //that the state is changing. DO NOT change state using
        // this.state.term = event.target.value ...thats very bad
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})}/>
            </div>
        );
    }
};

export default SearchBar;