import React from 'react';
import $ from 'jquery';

import PersonList from './personList';
import PersonForm from './personForm';

module.exports = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    loadPeopleFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
        })
         .done(function(result){
             this.setState({data: result});
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             console.error(this.props.url, status, errorThrown.toString());
         }.bind(this));
    },
    handlePersonSubmit: function(person) {
        var people = this.state.data;
        person.id = Date.now();
        var newPeople = people.concat([person]);
        this.setState({data: newPeople});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: person,
        })
         .done(function(result){
             this.setState({data: result});
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             this.setState({data: people});
             console.error(this.props.url, status, errorThrown.toString());
         }.bind(this));
    },
    componentDidMount: function() {
        this.loadPeopleFromServer();
	console.log(this.props.pollInterval);
        setInterval(this.loadPeopleFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="personBox">
                <h1>People</h1>
                <PersonList data={this.state.data} />
                <PersonForm onPersonSubmit={this.handlePersonSubmit} />
            </div>
        );
    }
});