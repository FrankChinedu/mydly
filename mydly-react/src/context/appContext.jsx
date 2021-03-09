import React, { useState, createContext } from 'react'

const AppContext = createContext({
	auth: false,
	setAuth: (value) => value,
})

const AppProvider = (props) => {
	const [auth, setAuth] = useState(false)

	return (
		<AppContext.Provider
			value={{
				auth,
				setAuth,
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
}

export { AppProvider, AppContext }
