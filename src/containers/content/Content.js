import Header from "../../components/header/Header"
import CardsContainer from "../../components/cardsContainer/CardsContainer"
import { useState } from "react"

export default function Content() {
  const [ isAutoSortOn, setIsAutoSortOn ] = useState(false)
  function handleAutoSortChange() {
    setIsAutoSortOn(!isAutoSortOn)
  }
  return (
    <>
      <Header isAutoSortOn={isAutoSortOn} handleAutoSortChange={handleAutoSortChange}></Header>
      <main>
        <CardsContainer isAutoSortOn={isAutoSortOn}/>
      </main>
    </>
  )
}