import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDSktuUaaL_xwiiAfFq-GFWRUmhkg5wUbM';



// create a new component. that component should produce some HTML

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

// Take components generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));