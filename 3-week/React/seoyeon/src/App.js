import blocklogo from './asset/blocklogo.png';

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      {/* 메인 박스 */}
      <div className="flex flex-col items-center justify-start h-[600px] w-[400px] border-2 border-black p-4 bg-blue-100">
        {/* 상단 로고와 텍스트 */}
        <div className="flex items-center w-full mb-4">
          {/* 왼쪽 로고 */}
          <img src={blocklogo} alt="block logo" className="h-[50px] w-[50px]" />
          {/* 중앙 텍스트 */}
          <p className="text-4xl font-bold text-gray-800 flex-grow text-center">blockblock</p>
        </div>

        {/* 프로필 이미지 */}
        <img
          src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg"
          alt="profile logo"
          className="h-[150px] w-[150px] mt-10 rounded-full object-cover"
        />
        {/* 이름 */}
        <p className="mt-4 text-xl font-semibold text-gray-800">Seoyeon Park</p>
        {/* 버튼 */}
        <button 
          className="border-2 border-blue-700 h-[70px] w-[150px] mt-24 bg-blue-700 flex items-center justify-center rounded-lg text-white text-lg font-bold hover:bg-blue-800 active:bg-blue-900"
          onClick={() => alert('출석 완료!')}
        >
          출석
        </button>
      </div>
    </div>
  );
}

export default App;
