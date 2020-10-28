import react, {useState, useEffect} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const FindCrewmate = ({addOrEdit, crewmateId, crewmateObjects}) => {

    const initialFieldValues = {
        
        surname: '',
        speciality: '',
        name: '',
    }

    const [fieldValues, setFieldValues] = useState(initialFieldValues);

    useEffect(()=>{
        if(crewmateId==''){
            setFieldValues({
                ...initialFieldValues
            })
        }
        else{
            setFieldValues({
                ...crewmateObjects[crewmateId]
            })
        }
    }, [crewmateId, crewmateObjects])

    const handleInputChange = e => {
        const {name, value} = e.target;
        setFieldValues({
            ...fieldValues,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        //add verification
        addOrEdit(fieldValues)
    }

    return (
        //maybe add fonticon awesome...
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <input 
                    className="form-control" 
                    placeholder="name" 
                    name="name" 
                    value={fieldValues.name} 
                    onChange={handleInputChange}></input>
                </div>
                <div className="form-group input-group col-md-6">
                    <input 
                    className="form-control" 
                    placeholder="surname" 
                    name="surname" 
                    value={fieldValues.surname}
                    onChange={handleInputChange}></input>
                </div>
            </div>
            <div className="form-group input-group">
                <input 
                className="form-control" 
                placeholder="speciality" name="speciality" 
                value={fieldValues.speciality}
                onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <input type="submit" value={crewmateId == '' ? 'Save' : 'Update'} className="btn btn-secondary btn-block"/>
            </div>
        </form> 
    );
}
 
export default FindCrewmate;