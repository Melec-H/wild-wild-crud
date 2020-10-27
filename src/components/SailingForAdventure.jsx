import Crew from './crew';
import FindCrewmate from './FindCrewmate';

const SailingForAdventure = () => {

    const addOrEdit = sailorInfos => {
        console.log(sailorInfos)
    }
    return(
    <>
        <div className="col-md-5 m-2">
            <FindCrewmate addOrEdit={addOrEdit}/>
        </div>
        <div className="col-md-5 m-2">
            <Crew/>
        </div>
    </>
    )
}

export default SailingForAdventure;
