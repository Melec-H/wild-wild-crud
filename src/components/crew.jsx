import React, {useState, useEffect} from 'react';
import firebaseDb from '../firebase'
import { Row, Col, Container, Button } from 'react-bootstrap';

const Crew = () => {



    const addOrEdit = obj => {
        console.log({obj});
        firebaseDb.child('crewmates').push(
            obj,
            err => {
                if (err) { console.log(err)}
            })
    }

    return (
        <div>
            liste du crew
        </div>
     );
}
 
export default Crew;