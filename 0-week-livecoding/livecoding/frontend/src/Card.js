import { useState, useEffect } from 'react';

function Card() {
  const [balance, setBalance] = useState(0);

  // GET /getBalance 호출
  const getBalance = async () => {
    try {
      const response = await fetch("http://localhost:5000/getBalance");
      const data = await response.json();
      setBalance(data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  // POST /withdrawBalance 호출
  const withdrawBalance = async () => {
    try {
      const response = await fetch("http://localhost:5000/withdrawBalance", {
        method: "POST",
      });
      const data = await response.json();
      if (data.balance !== undefined) {
        setBalance(data.balance);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error withdrawing balance:", error);
    }
  };

  useEffect(() => {
    getBalance(); // 컴포넌트 마운트 시 잔액을 가져옴
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Balance: {balance}</h1>
      <button
        onClick={withdrawBalance}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Withdraw 1000
      </button>
    </div>
  );
}

export default Card;
