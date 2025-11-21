import React, { createContext, useContext } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const LoginToggle = () => {
    const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext)

    return (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    )
}


const ThemeContext = createContext('light');
const LanguageContext = createContext('en');
function Toolbar() {
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);
  return <div className={`theme-${theme}`}>Language: {language}</div>;
}