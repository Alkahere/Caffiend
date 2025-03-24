import CoffeeForm from "./components/CoffeeForm"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Stas from "./components/Stas"
import History from "./components/History";
import React from 'react'
import { coffeeConsumptionHistory } from "./utils";
import { useAuth } from "./context/AuthContext"

function App()
{
const {globalUser,isLoading} = useAuth()
let globalData = coffeeConsumptionHistory
const isAuthenticated = globalUser
const isData = globalData && !!Object.keys(globalData || {}).length



const authenticationContent =(
  <>
  <Stas />
  <History />
  </>
)
  return(
<>
<Layout>
  <Hero/>
  <CoffeeForm isAuthenticated={isAuthenticated}/>
  {(isAuthenticated && isLoading) && <p>Loading...</p>}

  {isAuthenticated && (authenticationContent)}
  </Layout>

</>

    
  )
}

export default App