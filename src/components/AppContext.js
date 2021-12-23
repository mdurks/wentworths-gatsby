import React, { useState, useContext, createContext } from "react"

const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  const [productName, setProductName] = useState()
  const [productUrl, setProductUrl] = useState()

  const updateProductName = name => {
    setProductName(name)
  }

  const updateProductUrl = url => {
    setProductUrl(url)
  }

  return (
    <AppContext.Provider
      value={{ productName, productUrl, updateProductName, updateProductUrl }}
    >
      {children}
    </AppContext.Provider>
  )
}
