import Bottomtab from './components/bottomtab';
import Channeltab from './components/channeltab';
import Sidebar from './components/sidebar';
import Sidetab from './components/sidetab';
import Toptab from './components/toptab';
import logo from './logo.svg';


function App() {
  return (
    <div className="App overflow-hidden h-screen">
      <Sidebar/>
      <Sidetab></Sidetab>
      {/* <Bottomtab/>
      <Toptab></Toptab> */}
      {/* <Channeltab/> */}
      
    </div>
  );
}

export default App;
