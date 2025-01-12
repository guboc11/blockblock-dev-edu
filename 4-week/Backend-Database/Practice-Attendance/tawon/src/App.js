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

  const [error, setError] = useState(null);

  useEffect(()=>{
    axios.get("https://3000-guboc11-blockblockdeved-8fjtcr8lury.ws-us117.gitpod.io/attendance")
    .then(
      response => {
        setAttendances(response.data)
      }
    );
  }, []);

  const handleChange = (event) => {
    const { name, value} = event.target;
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


  // const handleAddAttendance = () => {
  //   axios.post('https://blockblock.com/attendance', newAttendance)
  //     .then(response => {
  //       setAttendances(prevAttendances => [...prevAttendances, response.data]);
  //       setNewAttendance({ name: '', grade: '', studentId: '', attendance: 'true' });
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //     });
  // };


  // GET 요청
  // useEffect(() => {
  //   axios.get('https://3000-guboc11-blockblockdeved-8fjtcr8lury.ws-us117.gitpod.io/attendance')
  //     .then(response => {
  //       setAttendances(response.data);
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //     });
  // }, []);

  return (
    <div>
      <div className="text-3xl">blockblock</div>

      

      <div className='flex gap-4'>
        <div className='border-2 border-black'>이름</div>
        <div className='border-2 border-black'>기수</div>
        <div className='border-2 border-black'>학번</div>
      </div>

      <div>
      {attendances.map((item, index)=>(
        <div className='flex gap-4'>
          <div className='border-2 border-black '>{item.name}</div>
          <div className='border-2 border-black '>{item.grade}</div>
          <div className='border-2 border-black '>{item.studentId}</div>
        </div>
        ))} 
      </div>


      <div className='text-3xl mt-10'>출석부 추가하기</div>

      <div>
        {/* <input type='text' name='name'/> */}
        <input type='text' 
          name='name' 
          value={newAttendance.name} 
          onChange={handleChange} 
          placeholder='Name'
          className='border-2 border-black' 
        />
        <input type='text' 
          name='grade' 
          value={newAttendance.grade} 
          onChange={handleChange} 
          placeholder='Grade'
          className='border-2 border-black' 
        />
        <input type='text' 
          name='studentId' 
          value={newAttendance.studentId} 
          onChange={handleChange} 
          placeholder='StudentId'
          className='border-2 border-black' 
        />
        <button className='border-2 border-red-600' onClick={handleAddAttendance}>출석부 추가하기</button>


        {/* <button
          onClick={handleAddAttendance}
          className="bg-blue-500 text-white p-2 rounded"
        /> */}

      </div>




      {/* <div>
        <input
          type="text"
          name="name"
          value={newAttendance.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="grade"
          value={newAttendance.grade}
          onChange={handleChange}
          placeholder="Grade"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="studentId"
          value={newAttendance.studentId}
          onChange={handleChange}
          placeholder="Student ID"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddAttendance}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Attendance
        </button>
      </div> */}

      

    </div>
  );
}

export default App;
