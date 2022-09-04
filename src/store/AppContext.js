import React, { useState, useContext, createContext, useEffect } from "react"
import { breakpoints } from "../common/globalVars"

const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactModalTitle, setContactModalTitle] = useState()
  const [productName, setProductName] = useState()
  const [productUrl, setProductUrl] = useState()

  useEffect(() => {
    let contactModalEl = document.querySelector(".viewingContainer__content")

    if (contactModalOpen) {
      contactModalEl.classList.add("open")
      if (window.innerWidth >= breakpoints.tablet)
        document.getElementById("contactForm_name").focus()
    } else {
      contactModalEl.classList.remove("open")
    }
  }, [contactModalOpen])

  return (
    <AppContext.Provider
      value={{
        contactModalOpen,
        setContactModalOpen,
        contactModalTitle,
        setContactModalTitle,
        productName,
        setProductName,
        productUrl,
        setProductUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
