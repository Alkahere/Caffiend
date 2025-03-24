import React from 'react'
import Authentication from './Authentication'
import Modal from './Modal'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function Layout(props){
const {children} = props
const [showModal , setShowModal] = useState(false)
const {globalUser , logout} = useAuth()

const header = (
  <header>
    <div>
    <h1 classnName = "text-gradient">Caffiend</h1>
    <p>For Coffee Insatiates</p> 
    </div>
    {globalUser ?(
    <button onClick={() => {logout()}}>
      <p>Logout</p>
    </button>
    ):(
    <button onClick={() => {setShowModal(true)}}>
      <p>Sign up free</p>
      <i className="fa-solid-fa-mug-hot"></i>
      </button>
    )}
  </header>
)

const footer = (
  <footer>
    <p><span className="text-gradient"> Caffiend</span> Made with Love</p>
  </footer>
)
  return (
    <>
    {showModal && (<Modal handleCloseModal={() => {setShowModal(false)}}>
      <Authentication handleCloseModal={()=>{setShowModal(false)}} />
    </Modal>)}
    {header}
    <main>
    {children}
    </main>
  
    {footer}
    </>
  )
}

export default Layout