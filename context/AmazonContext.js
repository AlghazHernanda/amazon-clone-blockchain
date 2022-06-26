import { createContext, useState, useEffect } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'

export const AmazonContext = createContext()

export const AmazonProvider = ({ children }) => {
  const [nickname, setNickname] = useState('')
  const [username, setUsername] = useState('')
  const [assets, setAssets] = useState([])

  const {
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3Enabled,
  } = useMoralis()

  const {
    data: assetsData,
    error: assetsDataError,
    isLoading: assetsDataIsLoading,
  } = useMoralisQuery('Assets')

  useEffect(() => {
    ;(async() => {
    // if (!isWeb3Enabled) {
    //   await enableWeb3()
    // }
    // await listenToUpdates()

    if (isAuthenticated) {
      // await getBalance()
      const currentUsername = await user?.get('nickname')
      setUsername(currentUsername)
      // const account = await user?.get('ethAddress')
      // setCurrentAccount(account)
      // const formatAccount = account.slice(0, 5) + '...' + account.slice(-5)
      // setFormattedAccount(formatAccount)
    } })()
    // else {
    //   setCurrentAccount('')
    //   setFormattedAccount('')
    //   setBalance('')
    // }
  }, [
    // isWeb3Enabled,
    isAuthenticated,
    // balance,
    // setBalance,
    // authenticate,
    // currentAccount,
    // setUsername,
    user,
    username,
  ])

  useEffect(() => {
    ;(async () => {
      if(isWeb3Enabled){
        await getAssets()
      }
    })()
  }, [isWeb3Enabled, assetsDataIsLoading, assetsData])

  const handleSetUsername = () => {
    if (user) {
      if (nickname) {
        user.set('nickname', nickname)
        user.save()
        setNickname('')
      } else {
        console.log("Can't set empty nickname")
      }
    } else {
      console.log('No user')
    }
  }

  const getAssets = async () => {
    try {
      await enableWeb3()
      // const query = new Moralis.Query('Assets')
      // const results = await query.find()

      setAssets(assetsData)
    } catch (error) {
      console.log(error)
    }
  }




    return (
        <AmazonContext.Provider
          value={{
            // formattedAccount,
            isAuthenticated,
            // buyTokens,
            // getBalance,
            // balance,
            // setTokenAmount,
            // tokenAmount,
            // amountDue,
            // setAmountDue,
            // isLoading,
            // setIsLoading,
            // setEtherscanLink,
            // etherscanLink,
            // buyAsset,
            // currentAccount,
            nickname,
            setNickname,
            username,
            // setUsername,
            handleSetUsername,
            assets,
            // recentTransactions,
            // ownedItems,
          }}
        >
          {children}
        </AmazonContext.Provider>
    )
}