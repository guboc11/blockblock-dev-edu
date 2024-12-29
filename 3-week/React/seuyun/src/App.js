
function App() {
  return (
    <div className="App">
      <p className="text-3xl text-center m-[15px]">Q&A</p>

      <div className="flex border-1 border-clear p-2 justify-center m-[10px]">
        <div className="border-double border-2 border-red-400 h-[50px] w-[50px] text-center m-[10px] bg-red-500/30">FAQ</div>
        <div className="border-double border-2 border-orange-400 h-[50px] w-[50px] text-center m-[10px] bg-orange-500/30">리서치</div>
        <div className="border-double border-2 border-yellow-400 h-[50px] w-[50px] text-center m-[10px] bg-yellow-500/30">투자</div>
        <div className="border-double border-2 border-green-400 h-[50px] w-[50px] text-center m-[10px] bg-green-500/30">데이터 분석</div>
        <div className="border-double border-2 border-blue-400 h-[50px] w-[50px] text-center m-[10px] bg-sky-500/30 ">DApp</div>
      </div>

      <div className="flex border-2 border p-2 justify-center">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="table-auto m-[10px] text-center">
        <thead>
          <tr>
            <th class="px-6 py-3">팀</th>
            <th class="px-6 py-3">질문</th>
            <th class="px-6 py-3">댓글</th>
            <th class="px-6 py-3">작성자</th>
            <th class="px-6 py-3">조회수</th>
            <th class="px-6 py-3">날짜</th>
            <th scope="col" class="px-6 py-3"> 
              <span class="sr-only">Edit</span></th>
          </tr>
          </thead>
          <tbody>
          <tr class="bg-white dark:bg-gray-10 hover:bg-gray-50 dark:hover:bg-gray-300">
            <td>FAQ</td>
            <td>블록체인은 무엇인가요?</td>
            <td>3</td>
            <td>민지</td>
            <td>70</td>
            <td>2020.10.13</td>
          </tr>
          <tr class="bg-white dark:bg-gray-10 hover:bg-gray-50 dark:hover:bg-gray-300">
            <td>투자</td>
            <td>리플 살까요?</td>
            <td>2</td>
            <td>해린</td>
            <td>45</td>
            <td>2023.2.31</td>
          </tr>
          <tr class="bg-white dark:bg-gray-10 hover:bg-gray-50 dark:hover:bg-gray-300">
            <td>DApp</td>
            <td>해커톤 주제 확인해주세요!</td>
            <td>4</td>
            <td>하니</td>
            <td>50</td>
            <td>2024.11.27</td>
          </tr>
        </tbody>
        </table>
      </div>
      </div>
    </div>

  );
}

export default App;
