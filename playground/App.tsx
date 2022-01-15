import { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import type { Web3ReactHooks } from '@web3-react/core'
import { Frame } from '@web3-react/frame'
import { Magic } from '@web3-react/magic'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import type { Connector } from '@web3-react/types'
import { useCallback, useEffect, useState } from 'react'
import { CHAINS, getAddChainParameters, URLS } from './chains'
import { connectors } from './connectors'

function getName(connector: Connector) {
  if (connector instanceof Frame) {
    return 'Frame (Experimental)'
  } else if (connector instanceof Magic) {
    return 'Magic (Experimental)'
  } else if (connector instanceof MetaMask) {
    return 'MetaMask'
  } else if (connector instanceof Network) {
    return 'Network'
  } else {
    return 'Unknown'
  }
}

function Status({
  connector,
  hooks: { useChainId, useAccounts, useError },
}: {
  connector: Connector
  hooks: Web3ReactHooks
}) {
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()

  const connected = Boolean(chainId && accounts)

  return (
    <div>
      <b>{getName(connector)}</b>
      <br />
      {error ? (
        <>
          🛑 {error.name ?? 'Error'}: {error.message}
        </>
      ) : connected ? (
        <>✅ Connected</>
      ) : (
        <>⚠️ Disconnected</>
      )}
    </div>
  )
}

function ChainId({ hooks: { useChainId } }: { hooks: Web3ReactHooks }) {
  const chainId = useChainId()

  return <div>Chain Id: {chainId ? <b>{chainId}</b> : '-'}</div>
} 

function useBalances(
  provider?: ReturnType<Web3ReactHooks['useProvider']>,
  accounts?: string[]
): BigNumber[] | undefined {
  const [balances, setBalances] = useState<BigNumber[] | undefined>()

  useEffect(() => {
    if (provider && accounts?.length) {
      let stale = false

      Promise.all(accounts.map((account) => provider.getBalance(account))).then((new_balances) => {
        if (!stale) {
          setBalances(new_balances)
        }
      })

      return () => {
        stale = true
        setBalances(undefined)
      }
    }
  }, [provider, accounts])

  return balances
}

function Accounts({ hooks: { useAccounts, useProvider, useENSNames } }: { hooks: Web3ReactHooks }) {
  const provider = useProvider()
  const accounts = useAccounts()
  const ENSNames = useENSNames(provider)

  const balances = useBalances(provider, accounts)

  return (
    <div>
      Accounts:
      {accounts === undefined
        ? ' -'
        : accounts.length === 0
        ? ' None'
        : accounts?.map((account, i) => (
            <ul key={account} style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <b>{ENSNames?.[i] ?? account}</b>
              {balances?.[i] ? ` (Ξ${formatEther(balances[i])})` : null}
            </ul>
          ))}
    </div>
  )
}

function MetaMaskSelect({ chainId, setChainId }: { chainId: number; setChainId?: (chainId: number) => void }) {
  return (
    <label style={{
      margin: "1rem",
    }}>
      Chain:{' '}
      <select
        value={`${chainId}`}
        onChange={
          setChainId
            ? (event) => {
                setChainId(Number(event.target.value))
              }
            : undefined
        }
        disabled={!setChainId}
      >
        <option value={-1}>Default</option>
        {Object.keys(URLS).map((chainId) => (
          <option key={chainId} value={chainId}>
            {CHAINS[Number(chainId)].name}
          </option>
        ))}
      </select>
    </label>
  )
}

function MetaMaskConnect({
  connector,
  hooks: { useChainId, useIsActivating, useError, useIsActive },
}: {
  connector: MetaMask
  hooks: Web3ReactHooks
}) {
  const currentChainId = useChainId()
  const isActivating = useIsActivating()
  const error = useError()
  const active = useIsActive()

  const [desiredChainId, setDesiredChainId] = useState<number>(-1)

  const setChainId = useCallback(
    (chainId: number) => {
      setDesiredChainId(chainId)
      if (chainId !== -1 && chainId !== currentChainId) {
        return connector.activate(getAddChainParameters(chainId))
      }
    },
    [setDesiredChainId, currentChainId, connector]
  )

  if (error) {
    return (
      <>
        <MetaMaskSelect chainId={desiredChainId} setChainId={setChainId} />
        <br />
        <button
          onClick={() => connector.activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))}
        >
          Try Again?
        </button>
      </>
    )
  } else if (active) {
    return (
      <>
        <MetaMaskSelect chainId={desiredChainId === -1 ? -1 : currentChainId} setChainId={setChainId} />
        <br />
        <br />
        <button disabled>Connected</button>
      </>
    )
  } else {
    return (
      <>
        <MetaMaskSelect chainId={desiredChainId} setChainId={isActivating ? undefined : setChainId} />
        <br />
        <button
          onClick={
            isActivating
              ? undefined
              : () => connector.activate(desiredChainId === -1 ? undefined : getAddChainParameters(desiredChainId))
          }
          disabled={isActivating}
        >
          {isActivating ? 'Connecting...' : 'Connect'}
        </button>
      </>
    )
  }
}

function GenericConnect({
  connector,
  hooks: { useIsActivating, useError, useIsActive },
}: {
  connector: Connector
  hooks: Web3ReactHooks
}) {
  const isActivating = useIsActivating()
  const error = useError()

  const active = useIsActive()

  if (error) {
    return <button onClick={() => connector.activate()}>Try Again?</button>
  } else if (active) {
    return (
      <button
        onClick={connector.deactivate ? () => connector.deactivate() : undefined}
        disabled={!connector.deactivate}
      >
        {connector.deactivate ? 'Disconnect' : 'Connected'}
      </button>
    )
  } else {
    return (
      <button onClick={isActivating ? undefined : () => connector.activate()} disabled={isActivating}>
        {isActivating ? 'Connecting...' : 'Connect'}
      </button>
    )
  }
}

function Connect({ connector, hooks }: { connector: Connector; hooks: Web3ReactHooks }) {
  return connector instanceof MetaMask ? (
    <MetaMaskConnect connector={connector} hooks={hooks} />
  ) : (
    <GenericConnect connector={connector} hooks={hooks} />
  )
}

export default function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexFlow: 'wrap', 
      fontFamily: 'sans-serif',
      justifyContent: "center"
    }}>
      {connectors.map(([connector, hooks], i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '20rem',
            padding: '1rem',
            margin: '1rem',
            overflow: 'auto',
            border: '1px solid',
            borderRadius: '1rem',
          }}
        >
          <div>
            <Status connector={connector} hooks={hooks} />
            <br />
            <ChainId hooks={hooks} />
            <Accounts hooks={hooks} />
            <br />
          </div>
          <Connect connector={connector} hooks={hooks} />
        </div>
      ))}
    </div>
  )
}
