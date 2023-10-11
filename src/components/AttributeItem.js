import useCharactersContext from '../store/CharacterContext';
import { calculateTotalSkillsAvailable } from '../utils'

export default function AttributeItem(props) {
  const { characters, setCharacters } = useCharactersContext()

  function onAddHandler() {
    const curVal = characters.charactersState[props.id].attributesState.attributes[props.name].value
    const newCharacters = JSON.parse(JSON.stringify(characters))
      newCharacters.charactersState[props.id].attributesState.attributes[props.name].value = curVal + 1
      newCharacters.charactersState[props.id].attributesState.attributes[props.name].modifier = calculateModifier(curVal + 1)
    if (characters.charactersState[props.id].attributesState.spent >= 70) {
      alert("A character can have upto 70 points")
    } else {
      newCharacters.charactersState[props.id].attributesState.spent = characters.charactersState[props.id].attributesState.spent + 1
      
      if (props.name === "Intelligence") {
        const skillsAvailable = calculateTotalSkillsAvailable(newCharacters.charactersState[props.id].attributesState.attributes['Intelligence'].modifier)
        newCharacters.charactersState[props.id].skillsState.totalSkillPoints = skillsAvailable
      }
      
      setCharacters(newCharacters)
    }
  }

  function onMinusHandler() {
    const curVal = characters.charactersState[props.id].attributesState.attributes[props.name].value
    if (curVal > 0) {
      const newCharacters = JSON.parse(JSON.stringify(characters))
      newCharacters.charactersState[props.id].attributesState.attributes[props.name].value = curVal - 1
      newCharacters.charactersState[props.id].attributesState.attributes[props.name].modifier = calculateModifier(curVal - 1)
      newCharacters.charactersState[props.id].attributesState.spent = characters.charactersState[props.id].attributesState.spent - 1
      
      if (props.name === "Intelligence") {
        const skillsAvailable = calculateTotalSkillsAvailable(newCharacters.charactersState[props.id].attributesState.attributes['Intelligence'].modifier)
        newCharacters.charactersState[props.id].skillsState.totalSkillPoints = skillsAvailable
      }

      setCharacters(newCharacters)
    }
  }

  function calculateModifier(value) {
    return Math.floor((value - 10) / 2)
  }



  return (
    <div>
      <p><b>{props.name}</b></p>
      Value:
      <span> {characters.charactersState[props.id].attributesState.attributes[props.name].value} | </span>
      <i>Modifier:</i>
      <span> {characters.charactersState[props.id].attributesState.attributes[props.name].modifier} </span>
      <button onClick={onAddHandler}>+</button>
      <button onClick={onMinusHandler}>-</button>
    </div>
  );
}