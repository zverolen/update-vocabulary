import Toggle from "../toggle/Toggle"
import styles from './buttonToggle.module.css'

export default function ButtonToggle({
  ariaDescribedby,
  isAutoSortOn, 
  handleAutoSortChange
}) {

  function handleClick() {
    handleAutoSortChange(!isAutoSortOn)
  }
  
  return ( 
    <button className={styles.toggle} type="button" aria-pressed={isAutoSortOn} onClick={handleClick} aria-describedby={ariaDescribedby}>
      Автоматическая сортировка карточек 
      <span data-testid="buttonToggle-status" className="visually-hidden">
        {isAutoSortOn ? 'Включено': 'Выключено'}
      </span>
      <Toggle isOn={isAutoSortOn}/>
    </button>
  )
}