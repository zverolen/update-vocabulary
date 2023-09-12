import CardsItem from "../cardsItem/CardItem"

import { useState } from "react"
import { phrases } from '../../data/data'

export default function CardsContainer({ isAutoSortOn }) {

  const [ phrases3, setPhrases3 ] = useState(phrases.map(phrase => {
    return {...phrase, selfCheckStatus: 'unset'} 
      })
  )
  
  function handleSelfCheckStatusChange(activePhrase) {
    const result = phrases3.map(phrase => {
      if (phrase.id !== activePhrase.id) {
        return phrase
      } else {
        return {
          ...phrase,
          selfCheckStatus: activePhrase.selfCheckStatus
        }
      }
    })
    setPhrases3(result)
  }

  const uncheckedPhrases = phrases3.filter(phrase => phrase.selfCheckStatus === 'unset')
  const correctPhrases = phrases3.filter(phrase => phrase.selfCheckStatus === 'correct')
  const wrongPhrases = phrases3.filter(phrase => phrase.selfCheckStatus === 'wrong')
 
  return (
    <div>
      {!isAutoSortOn && 
        phrases3.map((phrase) => (<CardsItem 
          key={phrase.id} 
          data={phrase} 
          getId={()=>{}}
          selfCheckStatus={phrase.selfCheckStatus}
        />))
      }

      {isAutoSortOn && uncheckedPhrases.map((phrase) => (<CardsItem 
        key={phrase.id} 
        data={phrase} 
        getId={()=>{}}
        selfCheckStatus={phrase.selfCheckStatus}
      />))}
      
      {isAutoSortOn && correctPhrases.map((phrase) => (<CardsItem 
        key={phrase.id} 
        data={phrase} 
        getId={()=>{}}
        selfCheckStatus={phrase.selfCheckStatus}
      />))} 

      {isAutoSortOn && wrongPhrases.map((phrase) => (<CardsItem 
        key={phrase.id} 
        data={phrase} 
        getId={()=>{}}
        selfCheckStatus={phrase.selfCheckStatus}
      />))}
    </div>
  )
}