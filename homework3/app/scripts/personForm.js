import React from 'react';
import $ from 'jquery';

module.exports = React.createClass({
    getInitialState: function() {
        return {fname: '', lname: '', bdate: ''};
    },
    handleFNameChange: function(e) {
        this.setState({fname: e.target.value});
    },
    handleLNameChange: function(e) {
        this.setState({lname: e.target.value});
    },
    handleBDateChange: function(e) {
        this.setState({bdate: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var fname = this.state.fname.trim();
        var lname = this.state.lname.trim();
				var bdate = this.state.bdate.trim();
        if (!lname || !fname || !bdate) {
            return;
        }
        this.props.onPersonSubmit({fname: fname, lname: lname, bdate: bdate});
        this.setState({fname: '', lname: '', bdate: ''});
    },
    render: function() {
        return (
            <form className="personForm" onSubmit={this.handleSubmit}>
                <input className="ui-widget ui-corner-all" type="text" placeholder="first name..."
                    value={this.state.fname} onChange={this.handleFNameChange}
                />
                <input className="ui-widget ui-corner-all" type="text" placeholder="last name..."
                    value={this.state.lname} onChange={this.handleLNameChange}
                />
                <input className="ui-widget ui-corner-all" type="text" placeholder="birth date..."
                    value={this.state.bdate} onChange={this.handleBDateChange}
                />
                <input className="ui-button ui-widget ui-corner-all" type="submit" value="Post" />
            </form>
        );
    }
});