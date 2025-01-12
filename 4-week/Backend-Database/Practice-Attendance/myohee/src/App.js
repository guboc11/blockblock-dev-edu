import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [attendances, setAttendances] = useState([])
  const [newAttendance, setNewAttendance] = useState({
    name: '',
    grade: '',
    studentId: '',
    attendance: 'true',
  });

  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://3000-guboc11-blockblockdeved-8fjtcr8lury.ws-us117.gitpod.io/attendance')
    .then(
      response => {
        setAttendances(response.data)
      }
    );
  }, []);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNewAttendance(prevState => ({...prevState, [name]: value}))
  };  

  const handleAddAttendance = () => {
    axios.post('https://3000-guboc11-blockblockdeved-8fjtcr8lury.ws-us117.gitpod.io/attendance', newAttendance)
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
      <div className="flex flex-col justify-center items-center align-center">

        <div className="text-3xl my-[20px]">블록블록 출석부</div>
        <div class="board" className="w-[500px] h-auto border-solid border-2 border-black">
          <div class="header" className="grid grid-cols-5 grid-rows-1 justify-between align-center text-center">
            <div className="h-fit m-[10px] border-solid border-2 border-black">출석 시간</div>
            <div className="h-fit m-[10px] border-solid border-2 border-black">이름</div>
            <div className="h-fit m-[10px] border-solid border-2 border-black">기수</div>
            <div className="h-fit m-[10px] border-solid border-2 border-black">학번</div>
            <div className="h-fit m-[10px] border-solid border-2 border-black">출석 버튼</div>
          </div>
          {attendances.map((item, index)=>(
          <div className="grid grid-cols-5 grid-rows-1 gap-2 text-center">
            <div>시간</div>
            <div>{item.name}</div>
            <div>{item.grade}</div>
            <div>{item.studentId}</div>
            <button className="">출석</button>
          </div>
          ))}
        
        </div>

        <div className="text-3xl my-[20px]">출석부 추가하기</div>
        <div>
          <div className="my-[2px]">
            <input type='text' name='name' value={newAttendance.name} 
                  onChange={handleChange} placeholder='이름' className='border'/>
          </div>
          <div className="my-[2px]">
            <input type='text' name='grade' value={newAttendance.grade} 
                  onChange={handleChange} placeholder='기수' className='border'/>
          </div>
          <div className="my-[2px]">
            <input type='text' name='studentId' value={newAttendance.studentId} 
                  onChange={handleChange} placeholder='학번' className='border'/>
          </div>
          <button className='border' onClick={handleAddAttendance}>
            출석부 추가하기
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
