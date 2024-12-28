function App() {
  return (
    <div className="App h-screen">
      <p className="text-2xl text-center content-center m-10">blockblock</p>
      
      <div className="flex border-2 border-black p-2 h-1/2 justify-center items-center content-center">
        <div className="flex flex-col border-2 border-red-400 m-3 h-4/5 w-2/3 text-center items-center">관심 있어요
          <table class="border-collapse border border-slate-500 w-5/6 ">
            <thead>
              <tr>
                <th class="border border-slate-600 ...">관심사</th>
                <th class="border border-slate-600 ...">관심 버튼</th>
                <th class="border border-slate-600 ...">관심 있는 사람</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-700 ...">코딩 스터디</td>
                <td class="border border-slate-700 "><button>나도 관심 있어요</button></td>
                <td class="border border-slate-700 ...">6</td>
              </tr>
              <tr>
              <td class="border border-slate-700 ...">영어 스터디</td>
                <td class="border border-slate-700 ..."><button>나도 관심 있어요</button></td>
                <td class="border border-slate-700 ...">3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="flex flex-col justify-between border-2 border-red-400 m-3 h-4/5 w-1/3 text-center content-center">
          <input type="text" name="search" 
          className="border-2 border-red-200 h-4/5 m-2 text-start"
          placeholder="관심사 입력하기"></input>
          <button className="border-2 border-red-200 m-2 items-end" onclick="alert('관심사를 추가했어요!')">관심사 추가하기</button>
        </div>
         
    
      </div>
      <div className="flex border-2 border-black p-2 h-1/2 justify-center items-center content-center">
        <div className="flex flex-col border-2 border-red-400 m-3 h-4/5 w-2/3 text-center items-center">같이 해요
          <table class="border-collapse border border-slate-500 w-5/6 ">
            <thead>
              <tr>
                <th class="border border-slate-600 ...">약속</th>
                <th class="border border-slate-600 ...">약속 버튼</th>
                <th class="border border-slate-600 ...">같이 할 사람</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-700 ...">6시 시험 공부</td>
                <td class="border border-slate-700 "><button>같이 할래요</button></td>
                <td class="border border-slate-700 ...">6</td>
              </tr>
              <tr>
              <td class="border border-slate-700 ...">1시 점심 먹어요!!</td>
                <td class="border border-slate-700 ...">같이 할래요</td>
                <td class="border border-slate-700 ...">3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="flex flex-col justify-between border-2 border-red-400 m-3 h-4/5 w-1/3 text-center content-center">
          <input type="text" name="search" className="border-2 border-red-200 h-4/5
           m-2 text-start" placeholder="약속 입력하기"></input>
          <button className="border-2 border-red-200 m-2 items-end" onClick="alert('버튼을 클릭했군요!')">
            약속 추가하기</button>
        </div>
         
    
      </div>
    


    </div>




  );
}
export default App;
