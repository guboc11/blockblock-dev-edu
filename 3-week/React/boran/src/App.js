
function App() {
  return (
    <div className="App">
      <p className="text-4xl text-center">blockblock</p>
      <div className="border-2 border-black p-4 ">
        <div className=""></div>
          <div className="flex items-center justify-center border-2 border-black-400 h-20 w-full text-center text-center text-5xl">20XX.XX.XX 출석체크</div>
          <div className="flex h-[400px] items-stretch">
            <button className="flex items-center justify-center border-2 border-blue-700 shadow-lg shadow-blue-500 md:shadow-x h-1/2 w-1/4 m-20 text-center transition transform active:scale-90 hover:bg-blue-500">출석</button>
            <button className="flex items-center justify-center border-2 border-yellow-400 shadow-lg shadow-yellow-500 md:shadow-x h-1/2 w-1/4 m-20 text-center transition transform active:scale-90 hover:bg-yellow-300">지각</button>
            <button className="flex items-center justify-center border-2 border-red-400 shadow-lg shadow-red-500 md:shadow-x h-1/2 w-1/4 m-20 text-center transition transform active:scale-90 hover:bg-red-300">결석</button>
          </div>
        <div className="flex flex-col border-2 border-black-400 h-60 w-200 p-4 text-center items-center justify-center">
          <div>사유를 적어주세요</div>
          <input className="border-2 border-blue-400 h-20 w-1/3 m-5 text-center "></input>
          <button className="border-2 border-black-400 h-7 w-20 text-center transition transform active:scale-90 hover:bg-black-300">제출</button>
        </div>
      </div>
      
    </div>
  )
}

export default App;
