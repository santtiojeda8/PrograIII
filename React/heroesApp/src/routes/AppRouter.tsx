import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../components/screens/login/Login"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { useAppSelector } from "../hook/redux"

export const AppRouter = () => {
    const isLogged=useAppSelector(state=>state.auth.isLogged)
  return (
    <>
    <Routes>
            {isLogged ? (
                // Rutas protegidas
                <Route path="/*" element={<ProtectedRoutes />} />
            ) : (
                // Si no está logueado, redirigir a Login
                <Route path="/*" element={<Navigate to={"/login"}/>} />
            )}
            <Route path="/login" element={<Login />} />
        </Routes>
    </>
  )
}


