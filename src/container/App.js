import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class app extends Component {

    state = {
      persons : [
        {id: 'lsmcsl',  name: "vova",  age: 35},
        {id: 'sdlv',    name: "fedea", age: 45},
        {id: 'sdlmvls', name: "nata",  age: 35},
      ],
      otherState : 'some other state',
      showPerson: true
    }


     switchNameHandler = ()  => {
      //console.log(this.state);
      this.setState( {
          persons: [
            {name : 'vladimir', age: 35},
            {name : 'fedea', age: 45},
            {name: 'vlad', age: 9}
          ]
        }  
      );
    }
  
    nameChangedHandler = (event) => {
      this.setState( {
        persons: [
          {name : 'vladimir', age: 35},
          {name : 'fedea', age: 45},
          {name: event.target.value, age: 35}
        ]
      }  
      );
    }


    nameChangedHandler = (event, personId) => {

      const personIndex = this.state.persons.findIndex(p => {
        return p.id === personId;
      });

      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( {
        persons: persons
      }  
      );
    }


    toggleNameHandler = () => {
      let isVisiblePerson = (this.state.showPerson)
      this.setState({
        showPerson: !isVisiblePerson
      })
    }

    deletePersonHandler = (indexPerson) => {
      const persons = this.state.persons.slice();
      persons.splice(indexPerson, 1);
      this.setState({persons: persons})
    }

    render() {

      const style = {
        backgroundColor: 'green',
        color: 'white',
        border: '1px solid blue',
        cursor: 'pointer',
        textTransform : 'uppercase',
      }

      let persons = null;

      if(this.state.showPerson === true) {
        persons = 
            <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            /> ;
      }

      
      return (
        
          <div className={classes.App}>
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPerson} 
              persons={this.state.persons}
              clicked={this.toggleNameHandler}
            />
            {persons}
          </div>
      );
    }
  
  }


export default app;
