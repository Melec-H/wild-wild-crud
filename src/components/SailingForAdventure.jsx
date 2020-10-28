import {useState, useEffect} from "react";

import Crew from './crew';
import FindCrewmate from './FindCrewmate';
import firebaseDb from "./../firebase"

const SailingForAdventure = () => {

    const [crewmateObjects, setCrewmateObjects] = useState({})
    const [crewmateId, setCrewmateId] = useState('');
    
    useEffect(()=>{
        firebaseDb.child('crewmates').on('value', snapshot=>{
            if(snapshot.val() != null){
                setCrewmateObjects({
                    ...snapshot.val()
                })
            }
            else{
                setCrewmateObjects({})
            }
        })
    }, [])

    const addOrEdit = sailorInfos => {

        if(crewmateId === ''){
            firebaseDb.child('crewmates').push(
                sailorInfos,
                err => {
                    if(err){
                        console.log(err)
                    }else{
                        setCrewmateId('')
                    }
                }
            ).then(console.log('push done'))
        }else{
            firebaseDb.child(`crewmates/${crewmateId}`).set(
                sailorInfos,
                err => {
                    if(err){
                        console.log(err)
                    }else{
                        setCrewmateId('')
                    }
                }
            ).then(console.log('update done'))

        }
    }

    const onDelete = id => {
        if(window.confirm('Are you sure to remove this crewmate from the crew ?')){
            firebaseDb.child(`crewmates/${id}`).remove(
                err => {
                    if(err){
                        console.log(err)
                    }else{
                        setCrewmateId('')
                    }
                }
            ).then(console.log('delete done'))
        }
    }

    return(
    <>
        <div className="col-md-5">
            <FindCrewmate {...({addOrEdit, crewmateId, crewmateObjects})}/>
        </div>
        <div className="col-md-7">
            <table className="table table-borderless table-stripped">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Speciality</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(crewmateObjects).map(id=>{
                        return <tr key={id}>
                            <td>{crewmateObjects[id].name}</td>
                            <td>{crewmateObjects[id].surname}</td>
                            <td>{crewmateObjects[id].speciality}</td>
                            <td style={{minWidth: '110px'}}>
                                <a className="btn text-primary" onClick={()=> setCrewmateId(id)}>
                                    <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a className="btn text-danger" onClick={()=>onDelete(id)}>
                                    <i className="far fa-trash-alt"></i>
                                </a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>
    )
}

export default SailingForAdventure;
