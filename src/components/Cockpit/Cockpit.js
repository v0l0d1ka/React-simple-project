import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const AsignedClasses = [];
    let classBtn = '';
    if(props.showPersons) {
        classBtn = classes.Red;
    }
    

      if(props.persons.length <= 2) {
        AsignedClasses.push( classes.red);
      }
      if(props.persons.length <= 1) {
        AsignedClasses.push(classes.bold);
      }


    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={AsignedClasses.join(' ')}>This is really works !</p>
            <button 
            
                className={classBtn}
                onClick={props.clicked}> 
                Toggle name
            </button>
        </div>
    );
}

export default cockpit;