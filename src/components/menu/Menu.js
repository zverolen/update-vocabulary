import ButtonToggle from '../buttonToggle/ButtonToggle'
import styles from './menu.module.css'

export default function Menu({ isAutoSortOn, handleAutoSortChange }) {
  return (
    <>
      <h2 className="visually-hidden">Настройки отображения карточек</h2>
      <ul className={styles.container}>
        <li>
          <ButtonToggle isAutoSortOn={isAutoSortOn} handleAutoSortChange={handleAutoSortChange} ariaDescribedby="autosort-description" />
          <div>
            <svg aria-hidden="true" width="23" height="24" viewBox="0 0 23 24">
             <path fillRule="evenodd" clipRule="evenodd" d="M11.5 23.8179C17.8513 23.8179 23 18.6691 23 12.3179C23 5.9666 17.8513 0.817871 11.5 0.817871C5.14873 0.817871 0 5.9666 0 12.3179C0 18.6691 5.14873 23.8179 11.5 23.8179ZM10.528 17.4499C10.7733 17.7165 11.12 17.8499 11.568 17.8499C12.0373 17.8499 12.3947 17.7165 12.64 17.4499C12.8853 17.1832 13.008 16.7992 13.008 16.2979V11.2419C13.008 10.7405 12.88 10.3565 12.624 10.0899C12.3787 9.8232 12.0267 9.68987 11.568 9.68987C11.12 9.68987 10.7733 9.8232 10.528 10.0899C10.2827 10.3565 10.16 10.7405 10.16 11.2419V16.2979C10.16 16.7992 10.2827 17.1832 10.528 17.4499ZM10.4 8.20187C10.6773 8.43654 11.0667 8.55387 11.568 8.55387C12.0907 8.55387 12.4853 8.43654 12.752 8.20187C13.0187 7.9672 13.152 7.62587 13.152 7.17787C13.152 6.74054 13.0187 6.40454 12.752 6.16987C12.4853 5.9352 12.0907 5.81787 11.568 5.81787C11.0667 5.81787 10.6773 5.9352 10.4 6.16987C10.1333 6.40454 10 6.74054 10 7.17787C10 7.62587 10.1333 7.9672 10.4 8.20187Z"/>
            </svg>
            <p id="autosort-description">Последовательность при автоматической сортировке: сначала карточки без ответа, затем верный ответ, затем неверный ответ</p>
          </div>
        </li>
      </ul>
    </>
  )
}