import { useState } from "react";
import ButtonWithIcon from "../buttonWithIcon/ButtonWithIcon";

export default function ShowHideComponent({
  children
}) {
  const [ isExpanded, setIsExpanded ] = useState(false);

  function handleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div aria-live="polite">
      <ButtonWithIcon isOpen={isExpanded} handleClick={handleExpand} />
      {isExpanded && children}
    </div>
  )
}