import { useState } from 'react'

import './App.css'
import {ENUM_ORDER_STATUS} from "./graphql/OrderStatus.graphql.ts";
import {useQuery} from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(ENUM_ORDER_STATUS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>


  return (
    <>  </>
  )
}

export default App
