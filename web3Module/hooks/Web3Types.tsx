import { ethers } from "ethers"


// states

export type Web3State = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    provider: any 
    web3Provider: ethers.providers.Web3Provider | null | undefined
    address: string | null | undefined
    network: ethers.providers.Network | null | undefined
    connect: (() => Promise<void>) | null
    disconnect: (() => Promise<void>) | null
  }


  export const web3InitialState: Web3State = {
    provider: null,
    web3Provider: null,
    address: null,
    network: null,
    connect: null,
    disconnect: null,
  }

  //  actions

  export type Web3Action =
  | {
      type: 'SET_PROVIDER'
      provider?: Web3State['provider']
      web3Provider?: Web3State['web3Provider']
      address?: Web3State['address']
      network?: Web3State['network']
    }
  | {
      type: 'SET_ADDRESS'
      address?: Web3State['address']
    }
  | {
      type: 'SET_NETWORK'
      network?: Web3State['network']
    }
  | {
      type: 'RESET_PROVIDER'
    }
  

    // Reducer

    export function web3Reducer(
        state: Web3State,
        action: Web3Action
      ): Web3State {
        switch (action.type) {
          case 'SET_PROVIDER':
            return {
              ...state,
              provider: action.provider,
              web3Provider: action.web3Provider,
              address: action.address,
              network: action.network,
            }
          case 'SET_ADDRESS':
            return {
              ...state,
              address: action.address,
            }
          case 'SET_NETWORK':
            return {
              ...state,
              network: action.network,
            }
          case 'RESET_PROVIDER':
            return web3InitialState
          default:
            throw new Error()
        }
      }