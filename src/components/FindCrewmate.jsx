import react, {useState, useEffect} from 'react';

const FindCrewmate = () => {

    const initialFieldValues = {
        name: '',
        surname: '',
        speciality: ''
    }

    const [fieldValues, setFieldValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setFieldValues({
            ...fieldValues,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('recreation')
        console.log(fieldValues)
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
                    values={fieldValues.name} 
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
                values={fieldValues.speciality}
                onChange={handleInputChange}></input>
            </div>
            <div className="form-group">
                <input type="submit" value="SaveForm" className="btn btn-secondary btn-block"/>
            </div>
        </form> 
    );
}
 
export default FindCrewmate;