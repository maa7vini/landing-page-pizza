import { GlobalStyle } from "./globalStyles"

import { Navbar } from "./components/Navbar/Navbar"
import { Cont1 } from "./components/Cont1/Cont1"
import { Cont2 } from "./components/Cont2/Cont2"
import { Cont3 } from "./components/Cont3/Cont3"
import { Cont4 } from "./Cont4/Cont4"
import { Footer } from "./Footer/Footer"

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Cont1 />
      <Cont2 />
      <Cont3 />
      <Cont4 />
      <Footer />
    </div>
  )
}

export default App
