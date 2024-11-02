import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectButton } from '@mysten/dapp-kit';
import "@mysten/dapp-kit/dist/index.css";

 
// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
	localnet: { url: getFullnodeUrl('localnet') },
	testnet: { url: getFullnodeUrl('testnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
});
const queryClient = new QueryClient();

function App() {
  return (

  <QueryClientProvider client={queryClient}>
    <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
      <WalletProvider>
        <div className="App">
          {/* <ConnectButton></ConnectButton> */}
         

          <div className='text-3xl mb-4'>blockblock</div>
          <Card></Card>
        </div>
      </WalletProvider>
    </SuiClientProvider>
  </QueryClientProvider>
  );
}

export default App;
