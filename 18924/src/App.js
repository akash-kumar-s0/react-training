import './App.css';
import { ShowList } from './components/list-component/ShowList';
import data from './task-data';

function App() {
  return (
    <>
    <div>
        <h1 className='m-2 '>Total : {data.total}</h1>
      </div>
       <div className='grid grid-cols-4 grid-rows-4 gap-2 m-2'><ShowList data = {data}/></div>
    
    </>
  )
}

export default App;
