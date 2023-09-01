import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { keycloak } from '../keycloakConfig'

import {
    setAuthenticated,
    setLoading,
    setToken,
    setUserDetails
} from '../features/auth/authSlice'

export const KeycloakProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const initKeycloak = async () => {
            try {
                const authenticated = await keycloak.init({
                    onLoad: 'login-required'
                })

                if (authenticated) {
                    dispatch(setAuthenticated(true))
                    dispatch(setToken(keycloak.token))
                    const userInfo = await keycloak.loadUserInfo()
                    dispatch(setUserDetails(userInfo))
                } else {
                    dispatch(setAuthenticated(false))
                }
            } catch (error) {
                console.error("Deu ruim no keycloak... ", error)
                dispatch(setLoading(false))
            }
        }

        keycloak.onTokenExpired = () => {
            return null
        }

        initKeycloak()
    }, [dispatch])

    return <>{children}</>
}