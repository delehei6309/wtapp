// ** React Imports
import  { Fragment, createContext, useEffect, useState } from 'react'
import Loading from '../components/loading'
// import { useNavigate } from 'react-router-dom';
import { $post2 } from '../tools/api';

// import { cookie } from '../tools/store'

// ** Config
// import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
	user: null,
	setUser: (params) => null,
    loading: false,
    setLoading: () => Boolean,
	isInitialized: false,
	login: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	setIsInitialized: () => Boolean,
	register: () => Promise.resolve(),
	menuKey: '',
	setMenuKey: () => null,
	platform: 'provider', // 平台 供应商、租户端、员工端 后续替换为 config 统一标记
	setPlatform: () => null
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
	// ** States
	const [user, setUser] = useState(defaultProvider.user)
    const [loading, setLoading] = useState(defaultProvider.loading)
	const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)

	const [menuKey, setMenuKey] = useState(defaultProvider.menuKey);
	const [platform, setPlatform] = useState(defaultProvider.platform);

	// const navigate = useNavigate()

	// useEffect(() => {
	// 	const initAuth = async () => {
    //         setUser({
    //             user_id: '14b7a504-0c55-11eb-8cb6-02420a001963'
    //         })
	// 	}
	// 	initAuth()
	// }, [])

	const handleLogin = (params, errorCallback) => {
		
	}
	const handleLogout = async () => {
		// ** Do logout here
		setLoading(true)
		const data = await $post2('/logout')
        console.log('logout', data)
        setLoading(false)
	}

	const handleRegister = (params, errorCallback) => {
		
	}

	const values = {
		user,
		setUser,
        loading,
        setLoading,
		isInitialized,
		setIsInitialized,
		login: handleLogin,
		logout: handleLogout,
		register: handleRegister,
		menuKey,
		setMenuKey,
		platform,
		setPlatform
	}

  	return <Fragment>
		<AuthContext.Provider value={values}>{children}</AuthContext.Provider>
	</Fragment>
}

export { AuthContext, AuthProvider }
