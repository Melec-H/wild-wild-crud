import {useState, useEffect} from "react";

import Crew from './crew';
import FindCrewmate from './FindCrewmate';
import firebaseDb from "./../firebase"

const SailingForAdventure = () => {

    const [crewmateObjects, setCrewmateObjects] = useState({})
    
    useEffect(()=>{
        firebaseDb.child('crewmates').on('value', snapshot=>{
            if(snapshot.val() != null){
                setCrewmateObjects({
                    ...snapshot.val()
                })
            }
        })
    })

    const addOrEdit = sailorInfos => {
        console.log(sailorInfos)
        firebaseDb.child('crewmates').push(
            sailorInfos,
            err => {
                if(err){
                    console.log(err)
                }
            }
        ).then(console.log('push done'))
    }
    return(
    <>
        <div className="col-md-5 m-2">
            <FindCrewmate addOrEdit={addOrEdit}/>
        </div>
        <div className="col-md-5 m-2">
            <table className="table table-borderless table-stripped">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Speciality</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(crewmateObjects).map(id=>{
                        return <tr key={id}>
                            <td>{crewmateObjects[id].name}</td>
                            <td>{crewmateObjects[id].surname}</td>
                            <td>{crewmateObjects[id].speciality}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>
    )
}

export default SailingForAdventure;
