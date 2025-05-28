import './App.css'
import Layout from './components/Layout'
import FirstBlock from './components/Section/FirstBlock/FirstBlock'
import SecondBlock from './components/Section/SecondBlock/SecondBlock'
import Image from './components/Section/Image/Image'
import Fon from './components/Section/Fon/Fon'
import FourthBlock from './components/Section/FourthBlock/FourthBlock'
import ThirdBlock from './components/Section/ThirdBlock/ThirdBlock'
import FifthBlock from './components/Section/FifthBlock/FifthBlock'
function App() {
  
  return (
    <>
    <Layout>
      <FirstBlock/>
      <Image><Fon/></Image>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
      <FifthBlock/>
    </Layout>    
    </>
  )
}
export default App
