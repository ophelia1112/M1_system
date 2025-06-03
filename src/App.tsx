
import "./App.css";
import Guide from './layout/Guide.tsx'
import Outputarea from "./layout/OutputArea.tsx";


function App() {

  return (
      <div style={{ display: 'flex', height: '100vh' }}>
          <Guide/>
          <Outputarea/>
      </div>



  );
}

export default App;
