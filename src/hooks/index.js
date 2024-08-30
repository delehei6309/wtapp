import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

import { ModalContext } from '../context/ModalContext'

export const useAuth = () => useContext(AuthContext)

export const useModal = () => useContext(ModalContext)
