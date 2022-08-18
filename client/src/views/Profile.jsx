import React from 'react'
import { Link } from 'react-router-dom'
import AdminContent from '../components/AdminContent'
import Navbar from '../components/Navbar'
import { LOGOUT } from '../config/routes/paths'

const Profile = () => {

  console.log(localStorage)
  return (
    <div>
      <Navbar/>
      <h1>Ruta privada</h1>
      <p>Hola <b>{localStorage.name}</b>, que bueno es verte de nuevo! 🚀🚀</p>
      <p>Cuenta creada: <b>{localStorage.createdAt}</b></p>
      <p>{localStorage.email}</p>
      <p>tipo de cuenta: <b>{localStorage.role}</b></p>

      {localStorage.role === "admin"&&
        <h2>componente Admin</h2>}
      {localStorage.role === "admin"&&
        <AdminContent/>}
      <Link to={LOGOUT}>Cerrar sesión</Link>
    </div>
  )
}

export default Profile
