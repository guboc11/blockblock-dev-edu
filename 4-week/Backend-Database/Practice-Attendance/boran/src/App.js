import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [attendances, setAttendances] = useState([]);
  const [newAttendance, setNewAttendance] = useState({
    name: '',
    grade: '',
    studentId: '',
    attendance: 'true',
  });

  const [error, setEerror] = useState(null);
 
  useEffect(()=>{
    axios.get("https://3000-guboc11-blockblockdeved-8fjtcr8lury.ws-us117.gitpod.io/attendance").then(
      response => {
        setAttendances(response.data)
      }
    );
  }, [])
 
  const handleChange = (event) => {
    const {name, value} = event.target;
    setNewAttendance(prevState => ({ ...prevState, [name]: value}));
  };
  
  const handleAddAttendance = () => {
    axios.post("https://3000-guboc11-blockblockdeved-8fjtcr8lury.ws-us117.gitpod.io/attendance", newAttendance)
    .then(
      response => {
        setAttendances(pr => [...pr, response.data]);
        setNewAttendance({
          name: '',
          grade: '',
          studentId: '',
          attendance: 'true',
        });
      }
    );
  }


  return (
    <div>
      <div className="text-3xl">attendance111</div>



    
      <div className='border-black border-1 w-300  flex gap-4'> 
        <div className='border-black border-2 w-1/3 h-full text-center '>이름</div>
        <div className='border-black border-2 w-1/3 h-full text-center ' >기수</div>
        <div className='border-black border-2 w-1/3 h-full text-center '>학번</div>
      </div>

    
      {attendances.map((item, index)=>(
        <div className='border-black border-1 w-300 h-300 flex gap-4'> 
          <div className='border-white border-2 w-1/3 h-full text-center bg-slate-100 shadow-inner'>{item.name}</div>
          <div className='border-white border-2 w-1/3 h-full text-center bg-stone-100 shadow-inner' >{item.grade}</div>
          <div className='border-white border-2 w-1/3 h-full text-center bg-gray-100 shadow-inner'>{item.studentId}</div>
        </div>
       ))} 

    <div className='text-3xl mt-10'>출석부 추가</div>

    <div className='border-center flex '>
      <div>
        <input type='text' 
        name='name' 
        value={newAttendance.name} 
        onChange={handleChange}
        placeholder='Name'
        className='border-double border-2 text-center shadow'
        />
        <input type='text' 
        name='grade' 
        value={newAttendance.grade} 
        onChange={handleChange}
        placeholder='grade'
        className='border-double border-2 text-center shadow'
        />
        <input type='text' 
        name='studentId' 
        value={newAttendance.studentId} 
        onChange={handleChange}
        placeholder='studentId'
        className='border-double border-2 text-center shadow'
        />
        <button className='border-double border-2 border-red-400 text-center shadow' onClick={handleAddAttendance}>add</button>
      </div>
    </div>


    </div>
  );
}

export default App;
