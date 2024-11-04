import { useState } from "react";

export default function Card() {
  const [balance, setBalance] = useState(10000);

  const handleBuySnack = () => {
    if (balance >= 1000) {
      setBalance(balance - 1000);
    } else {
      alert("Insufficient balance!");
    }
  };

  return (
    <div className="card">
      <div>Balance: {balance}</div>
      <button className="buy-snack-btn" onClick={handleBuySnack}>
        Buy Snack
      </button>

      <style jsx>{`
        .card {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          width: 200px;
          text-align: center;
        }
        .buy-snack-btn {
          margin-top: 10px;
          padding: 8px 12px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .buy-snack-btn:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
}
