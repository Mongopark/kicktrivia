import Home from './components/Home'
import {AllProvider, AllContext} from './components/context/AllContext';



function App() {
  return (
    <AllProvider>
   
    <Home/>
    </AllProvider>
  );
}


export default App;