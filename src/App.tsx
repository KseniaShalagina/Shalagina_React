import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import FirstBlock from './components/Section/FirstBlock/FirstBlock'
import SecondBlock from './components/Section/SecondBlock/SecondBlock'
import Image from './components/Section/Image/Image'
import Fon from './components/Section/Fon/Fon'
import FourthBlock from './components/Section/FourthBlock/FourthBlock'
import ThirdBlock from './components/Section/ThirdBlock/ThirdBlock'
import FifthBlock from './components/Section/FifthBlock/FifthBlock'
import Preloader from './components/Preloader/Preloader'
import CardList from './components/CardList/CardList'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  return (
    <>
      {isLoading ? <Preloader /> :
        <Layout>
          <FirstBlock />
          <Image><Fon /></Image>
          <SecondBlock />
          <ThirdBlock><CardList/></ThirdBlock>
          <FourthBlock />
          <FifthBlock />
        </Layout>
      }
    </>
  )
}
export default App
