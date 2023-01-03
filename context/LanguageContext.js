import { useState, useContext, createContext } from 'react'

const LanguageContext = createContext()
export const GetLanguageContext = useContext(LanguageContext)

const LanguageCtx = ({ children }) => {

    const [ language, setLanguage ] = useState({})


    return (
        <LanguageCtx.Provider>
            {children}
        </LanguageCtx.Provider>
  )
}

export default LanguageCtx