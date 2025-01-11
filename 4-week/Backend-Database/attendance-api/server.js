const express = require('express');
const fs = require('fs');
const { parse } = require('json2csv');
const csvParser = require('csv-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// CSV 파일 경로
const csvFilePath = path.join(__dirname, 'attendance.csv');

// 출석부 데이터를 읽어오는 함수
const readAttendance = () => {
  const data = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csvParser())
      .on('data', (row) => {
        data.push(row);
      })
      .on('end', () => {
        resolve(data);
      })
      .on('error', (err) => reject(err));
  });
};

// 출석부 데이터를 CSV로 저장하는 함수
const saveAttendance = (data) => {
  const csvData = parse(data);
  fs.writeFileSync(csvFilePath, csvData);
};

// 출석부 목록 조회 API
app.get('/attendance', async (req, res) => {
  try {
    const attendanceData = await readAttendance();
    res.json(attendanceData);
  } catch (err) {
    res.status(500).send('Error reading data');
  }
});

// 출석부에 학생 추가 API
app.post('/attendance', async (req, res) => {
  const { name, grade, studentId } = req.body;

  if (!name || !grade || !studentId) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const attendanceData = await readAttendance();
    const newEntry = { name, grade, studentId };
    attendanceData.push(newEntry);
    saveAttendance(attendanceData);
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).send('Error saving data');
  }
});

// 출석부에서 학생 정보 삭제 API
app.delete('/attendance/:studentId', async (req, res) => {
  const { studentId } = req.params;

  try {
    let attendanceData = await readAttendance();
    attendanceData = attendanceData.filter(entry => entry.studentId !== studentId);
    saveAttendance(attendanceData);
    res.status(200).send(`Student with ID ${studentId} removed`);
  } catch (err) {
    res.status(500).send('Error deleting data');
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Attendance API is running at http://localhost:${port}`);
});

