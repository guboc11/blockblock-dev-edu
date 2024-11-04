import React, { useEffect, useState } from 'react';
import MyObject from './MyObjects';
import Blockchain from './Blockchain';
import { ConnectButton } from '@mysten/dapp-kit';

function Card() {

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await fetch("http://localhost:5000/balance");
      const { balance } = await response.json();
      setBalance(balance);
    };

    fetchBalance();
  }, []);

  const buySnack = async () => {
    const response = await fetch("http://localhost:5000/balance/withdraw", {
      method: "POST",
    });
    const {balance} = await response.json();
    setBalance(balance); 
    console.log("Snack bought!");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <ConnectButton></ConnectButton>
      <p className="text-xl font-semibold text-gray-700 mb-4">Balance: <span className="text-green-600">{balance}</span></p>
      <button 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded 
                   hover:bg-blue-600 transition duration-300 ease-in-out
                   transform hover:scale-105 active:scale-95"
        onClick={buySnack}
      >
        Buy Snack (1,000)
      </button>

      <MyObject></MyObject>
      <Blockchain></Blockchain>
    </div>
  )
}

export default Card;