import {
  DynamicWidget,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { AlgorandWalletConnectors } from "@dynamic-labs/algorand";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { FlowWalletConnectors } from "@dynamic-labs/flow";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";
import { CosmosWalletConnectors } from "@dynamic-labs/cosmos";
import { MagicWalletConnectors } from "@dynamic-labs/magic";
import { BloctoEvmWalletConnectors } from "@dynamic-labs/blocto";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: "8b5038f9-171c-480b-9f3c-294d868aeb74",
      walletConnectors: [
        EthereumWalletConnectors,
        AlgorandWalletConnectors,
        SolanaWalletConnectors,
        FlowWalletConnectors,
        StarknetWalletConnectors,
        CosmosWalletConnectors,
        MagicWalletConnectors,
        BloctoEvmWalletConnectors,
      ],
    }}
  >
    <DynamicWidget />
  </DynamicContextProvider>
);

export default App;
