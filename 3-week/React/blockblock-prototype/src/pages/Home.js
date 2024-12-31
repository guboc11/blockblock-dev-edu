import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Header Section */}
      <header className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 shadow-lg">
        <h1 className="text-4xl font-semibold text-center tracking-wide">
          블록블록 <span className="font-extrabold">BLOCKBLOCK</span>
        </h1>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-12 px-4">
        <h2 className="text-2xl text-gray-800 mb-4">
          <span className="font-bold">WEB 3.0</span> 시대를 준비하며
        </h2>
        <h2 className="text-2xl text-gray-800 mb-4">
          <span className="font-bold">블록체인</span>을 통해
          <span className="font-bold"> 변화할 세상</span>을
        </h2>
        <h2 className="text-2xl text-gray-800 mb-4">
          <span className="font-bold">함께 만들어나가는 사람들</span>이 모인 곳,
        </h2>
        <h2 className="text-2xl text-gray-800 mb-4">
          <span className="font-bold">연세대학교 블록체인 동아리 블록블록</span>
          입니다.
        </h2>
        <Link
          to="/suhyun"
          className="bg-blue-600 text-white mt-8 px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          블록블록 프로젝트 바로가기
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-white w-full py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-8">
            블록블록이 추구하는 방향성
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg">
              <div className="bg-blue-100 p-4 rounded-full mb-4">🚀</div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                WEB3 Mass Adoption
              </h4>
              <p className="text-gray-600">
                블록블록은 기술 개발만을 우선시하지 않고, 진정한 WEB3
                매스어덥션을 위해 노력합니다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg">
              <div className="bg-green-100 p-4 rounded-full mb-4">💼</div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                선한 영향력
              </h4>
              <p className="text-gray-600">
                블록체인으로 세상에 선한 영향력을 주는 방법을 생각합니다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">🎨</div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                지식의 동기화
              </h4>
              <p className="text-gray-600">
                지식을 빠르게 얻는 것 만을 추구하지 않고, 구성원들 간의 지식의
                동기화를 통해 함께 성장하는 것을 우선으로 생각합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 text-white text-center py-4">
        <p className="text-sm">&copy; 2024 BlockBlock. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
