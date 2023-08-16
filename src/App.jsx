import { RouterProvider } from "react-router-dom"
import router from "./routes"
import ProductsContext from "./assets/contexts/ProductsContext"
import { useState } from "react"

function App() {
  const [arrItems, setArrItems] = useState(JSON.parse(localStorage.getItem('productsSaved')) ?? [])

  return (
    <ProductsContext.Provider value={[arrItems, setArrItems]}>
      <RouterProvider router={router}/>
    </ProductsContext.Provider>
  )
}

export default App