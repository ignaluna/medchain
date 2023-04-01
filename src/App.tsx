import "./App.css"
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig, useAccount } from "wagmi";
import { hardhat } from "wagmi/chains";
import { Web3Button } from "@web3modal/react";

import Header from "./components/Header";
import ListComponent from "./components/ListComponent";
import Footer from "./components/Footer";
const chains = [hardhat];

const projectId = String(process.env.REACT_APP_WC_PROJECT_ID)


// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: projectId }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App() {
  const projectId = String(process.env.REACT_APP_WC_PROJECT_ID)
  const address= "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
  // const { address } = useAccount()
  return (
    <>
      <div className="App">
        <WagmiConfig client={wagmiClient}>
          <Header />
          <div className={address ? `button-container connected` : `button-container`} >
            <Web3Button />
          </div>
          <div className="gif-container" style={address ? { display: 'none' } : { display: 'flex' }} >
            <div className="web">
              <img className="gif" src="home-gif.gif" alt="explained gif" />
            </div>
          </div>
          <ListComponent address={address} />
          <Web3Modal
            projectId={projectId}
            ethereumClient={ethereumClient}
          />
          <Footer />
        </WagmiConfig>
      </div>
    </>
  );
}