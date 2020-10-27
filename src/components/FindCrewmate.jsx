import react, {useState, useEffect} from 'react';

const FindCrewmate = () => {

    const initialFieldValues = {
        name: '',
        surname: '',
        speciality: ''
    }

    const [fieldValues, setFieldValues] = useState(initialFieldValues);

    return (
        //maybe add fonticon awesome...
        <form autoComplete="off">
                        <div className="form-row">
            <div className="form-group input-group col-md-6">
                    <input className="form-control" placeholder="name" name="name" values={fieldValues.name}></input>
            </div>
            <div className="form-group input-group col-md-6">
                    <input className="form-control" placeholder="surname" name="surmane" value={fieldValues.surname}></input>
            </div>
            </div>
            <div className="form-group input-group">

                    <input className="form-control" placeholder="speciality" name="speciality" values={fieldValues.speciality}></input>

            </div>
        </form> 
    );
}
 
export default FindCrewmate;