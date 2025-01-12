import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [attendances, setAttendances] = useState([]);
  const [newAttendance, setNewAttendance] = useState({
    name:'',
    grade:'',
    studentId:'',
    attendance:'true',
  });

  const [error, setError] = useState(null);

  useEffect(()=>{
    axios.get("https://3000-guboc11-blockblockdeved-8fjtcr8lury.ws-us117.gitpod.io/attendance").then(
      response => {
        setAttendances(response.data)
      }
    );
  }, []);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNewAttendance(prevState => ({ ...prevState, [name]: value}))
  };

  const handleAddAttendance = () => {
    axios.post("https://3000-guboc11-blockblockdeved-8fjtcr8lury.ws-us117.gitpod.io/attendance", newAttendance)
    .then(
      response => {
        setAttendances(pr => [...pr, response.data]);
        setNewAttendance({
          name:'',
          grade:'',
          studentId:'',
          attendance:'true',
        });
      }
    );
  }

  return (
    <div className="flex flex-col justify-center items-center align-center">
      <div className='w-[1000px]'>
      <div className="text-3xl font-bold">Blockblock Attendance</div>

      {/* <ul>
        {attendances.map((item, index)=>(
          <li key={(index)}>
            {item.name} {item.grade} {item.studentId} {item.attendance}
          </li>
          ))}
      </ul> */}
        <div className="grid grid-cols-3 grid-rows-1 gap-2 font-bold w-1/2">
          <div class="bg-blue-200 p-4 text-center">Name😊</div>
          <div class="bg-blue-200 p-4 text-center">기수📌</div>
          <div class="bg-blue-200 p-4 text-center">학번🌱</div>
        </div>
        {attendances.map((item, index)=>(
        <div className="grid grid-cols-3 grid-rows-1 gap-2 border-b cursor-pointer w-1/2">
          <div class="bg-yellow-200 p-4 text-center hover:bg-pink-200">{item.name}</div>
          <div class="bg-yellow-200 p-4 text-center">{item.grade}</div>
          <div class="bg-yellow-200 p-4 text-center">{item.studentId}</div>
        </div>
      ))}
      </div>

      <div className='text-2xl mt-10'>출석부 추가하기</div>
      <div>
        <input type='text'
        name='name'
        value={newAttendance.name}
        onChange={handleChange}
        placeholder='Name'
        className='border' />
        <input type='text'
        name='grade'
        value={newAttendance.grade}
        onChange={handleChange}
        placeholder='Grade'
        className='border' />
        <input type='text'
        name='studentId'
        value={newAttendance.studentId}
        onChange={handleChange}
        placeholder='StudentId'
        className='border' />
      </div>

      <button className='border-2 border-red-500' onClick={handleAddAttendance}>출석부 추가하기</button>

    </div>
  );
}

export default App;