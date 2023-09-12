import ShowHideComponent from "../showHideComponent/ShowHideComponent";
import Menu from "../menu/Menu";

export default function Header({ isAutoSortOn, handleAutoSortChange }) {

  return (
    <header>
      <div>
        <ShowHideComponent>
          <Menu isAutoSortOn={isAutoSortOn} handleAutoSortChange={handleAutoSortChange}/>
        </ShowHideComponent>
      </div>
    </header>
  )
}