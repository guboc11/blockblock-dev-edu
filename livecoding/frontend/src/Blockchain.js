import { useWallets } from "@mysten/dapp-kit";
// import { useWallet } from "@suiet/wallet-kit";
// import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Transaction } from "@mysten/sui/transactions";
import { useCurrentAccount, useSignAndExecuteTransaction } from "@mysten/dapp-kit";



export default function Blockchain() {
  const packageId = "0xe7d2fb7a3f78e031caa3a86be70c0861ea6cf98c8f6cf2749ae3e05201a29722";
  const gasBudgetInMist = 100000000;

  const { mutateAsync: signAndExecute } = useSignAndExecuteTransaction();



  // const wallet = useWallet();
  // const wallet = useWallets();

  const mintHandle = async () => {
    const txb = new Transaction();
    txb.setGasBudget(gasBudgetInMist);
    txb.moveCall({
      target: `${packageId}::blockchain::mint`,
      arguments: [],
    });

    try {
      const res = await signAndExecute({
        transaction: txb,
        options: {
          showInput: true,
          showEffects: true,
          showEvents: true,
          showObjectChanges: true,
        },
      });
      console.log('res', res);
    } catch (e) {
      console.error("'mint  ' transaction failed", e);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={mintHandle}
        className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
      >
        Mint
      </button>
    </div>
  );
}
