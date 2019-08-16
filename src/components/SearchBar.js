import React from 'react';

class SearchBard extends React.Component {
    state = { term: '' };

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }

    render() { 
        return (
        <div className="ui container">
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui fluid icon input">
                            <input 
                                type="text" 
                                placeholder="Video Search" 
                                value={this.state.term}
                                onChange={this.onInputChange}
                                />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}
 
export default SearchBard;