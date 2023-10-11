import { ATTRIBUTE_LIST } from '../consts'
import { useState } from 'react';
import '../App.css';
import useCharactersContext from '../store/CharacterContext';

export default function ClassItem(props) {
  const { characters } = useCharactersContext();
  const [showRequirements, setShowRequirements] = useState(false);

  function validateAllAttributePresent() {
    var isValid = true
    ATTRIBUTE_LIST.forEach((attribute) => {
      if (characters.charactersState[props.id].attributesState.attributes[attribute].value < props.attr[attribute]) {
        isValid = false
      }
    })
    return isValid;
  }

  return (
    <div>
      <p onClick={() => setShowRequirements(true)} className={validateAllAttributePresent() ? "text-green" : ""}>{props.name}</p>
      {showRequirements && <div>
        <h5>Requirements for {props.name}</h5>
        <ul>
          {ATTRIBUTE_LIST.map((attr) => <li>{attr}: {props.attr[attr]}</li>)}
        </ul>
        <button onClick={() => setShowRequirements(false)}>Close requirements</button>
      </div>}
      <hr></hr>
    </div>
  )
}