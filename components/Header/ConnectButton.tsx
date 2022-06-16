import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useEthereum } from "utils/hooks/useEthereum";
import { getChainLogo, shortenAddress } from "../common/util";

const ConnectButton: React.FC = () => {
  const { account, ensName, connect, disconnect, chainId } = useEthereum();

  return (
    <InputGroup style={{ width: 'fit-content' }}>
      <InputGroup.Prepend>
        <InputGroup.Text style={{ borderColor: 'black' }}>
          <img src={getChainLogo(chainId)} height="24" style={{ borderRadius: '50%', minWidth: 16 }}></img>
        </InputGroup.Text>
      </InputGroup.Prepend>
        {account &&
          <InputGroup.Text style={{ borderRadius: 0, borderColor: 'black' }}>
            {ensName ?? shortenAddress(account)}
          </InputGroup.Text>
        }
      <InputGroup.Append>
        {account ? (
          <Button variant="outline-primary" onClick={disconnect}>Disconnect</Button>
        ) : (
          <Button variant="outline-primary" onClick={connect}>Connect</Button>
        )}
      </InputGroup.Append>
    </InputGroup>
  )
}

export default ConnectButton
