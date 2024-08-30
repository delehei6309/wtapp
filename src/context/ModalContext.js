import React from 'react'
import Loading from '../components/loading'
import CustomizedDialog from '../components/CustomizedDialog'
import CustomizedDrawer from '../components/CustomizedDrawer'

const defaultValues = {
	loading: false,
    setLoading: (param) => Boolean,
    dialog: (params) => null,
    setDialogOpen: (props) => Boolean,
}


const ModalContext = React.createContext(defaultValues)


const ModalProvider = ({ children }) => {
	const [loading, setLoading] = React.useState(defaultValues.loading)

	React.useEffect(() => {
		
	}, [])

    // dialog
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogParams, setDialogParams] = React.useState({});

    // drawer
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [drawerParams, setDrawerParams] = React.useState({});


	const values = {
		loading,
        setLoading,
        setDialogOpen,
        dialog: (params) => {
            setDialogParams(params)
            setDialogOpen(true);
        },
        // drawer
        setDrawerOpen,
        drawer: (params) => {
            setDrawerParams(params)
            setDrawerOpen(true);
        },
	}



  	return <ModalContext.Provider value={values}>
        {children}
        <Loading open={loading} />
        <CustomizedDialog
            open={dialogOpen} 
            {...dialogParams}
            handleClose={() => {
                dialogParams?.handleClose?.();
                setDialogOpen(false);
            }} />
        <CustomizedDrawer 
            open={drawerOpen}
            { ...drawerParams }
            handleClose={() => {
                dialogParams?.handleClose?.();
                setDrawerOpen(false);
            }}  />
    </ModalContext.Provider>
}

export { ModalContext, ModalProvider }