import React,{useEffect} from 'react';
import http from 'axios'
function App() {
  const [result,setResult] = React.useState({name:'A',from:'B'})
  useEffect(()=>{
    http.get('/custom/api').then((res)=>{
      console.log(res)
      // setResult(res.data.result)
    })
  },[])
  
  return (
    <div className="App">
      {result.name}出自{result.from}
    </div>
  )
}

export default App;
