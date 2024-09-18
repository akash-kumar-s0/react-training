import './App.css';
import { ShowList } from './components/list-component/ShowList';
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState()

  const fetchData = async() => {
    let data =  await fetch('task-data.json')
    setData(await data.json())
  }
  console.log("render");

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
      { data ? (
      <div>
       <div>
          <h1 className='m-2 '>Total : {data.total}</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-2'><ShowList data = {data}/></div>
        </div>):
        "Loading"
      }
    </>
  )
}

export default App;
