import ShowHideComponent from "../showHideComponent/ShowHideComponent";
import Menu from "../menu/Menu";

export default function Header() {
  return (
    <header>
      <div>
        <ShowHideComponent>
          <Menu />
        </ShowHideComponent>
      </div>
    </header>
  )
}