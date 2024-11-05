import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";
import WebApp from "@twa-dev/sdk";
import { fromNano } from "ton-core";

function App() {
  const {
    contract_address,
    counter_value,
    contract_balance,
    sendIncrement,
    sendDeposit,
    sendWithdrawalRequest
  } = useMainContract();

  const { connected } = useTonConnect();

  const showAlert = () => {
    WebApp.showAlert("Hey there!");
  };

  return (
    <div>
      <div>
        <TonConnectButton />
      </div>

      <div>
        <div className='Card'>
          <b>{WebApp. platform}</b>
          <b>Our contract Address</b>
          <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>
          <b>Our contract Balance</b>
          <div className='Hint'>{fromNano(Number(contract_balance))}</div>
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>
      </div>

      <a onClick={() => {showAlert();}}>
        Show Alert
      </a>

      <br />

      {connected && (
        <a onClick={() => {sendIncrement();}}>
          Increment
        </a>
      )}

      <br />

      {connected && (
        <a onClick={() => {sendDeposit();}}>
          Deposit
        </a>
      )}

      <br />
      
      {connected && (
        <a onClick={() => {sendWithdrawalRequest();}}>
          Withdraw
        </a>
      )}
    </div>
  );
}

export default App;