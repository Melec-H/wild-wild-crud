import SailingForAdventure from './components/SailingForAdventure'

function App() {



  return (
    <div className="row">
      <div className="col-md-10 offset-md-1 ">

        <div className="content">
            <div className="jumbotron">
              <h1 className="display-4 text-center">WILD WILD CRUD</h1>
            </div>

          <div className="row m-5">
            <SailingForAdventure/>
          </div>

        </div>
      
      </div>
     
      
    </div>
  );
}

export default App;
