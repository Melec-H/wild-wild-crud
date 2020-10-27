import Crew from './components/crew';
import FindCrewmate from './components/FindCrewmate';

function App() {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1 ">

        <div className="content">
            <div className="jumbotron">
              <h1 className="display-4 text-center">WILD WILD CRUD</h1>
            </div>

          <div className="row m-5">
            <div className="col-md-5 m-2">
              formulaire
              <FindCrewmate/>
            </div>
            <div className="col-md-5 m-2">
              <Crew/>
            </div>
          </div>

        </div>
      
      </div>
     
      
    </div>
  );
}

export default App;
