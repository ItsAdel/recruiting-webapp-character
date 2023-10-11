import useCharactersContext from '../store/CharacterContext';

export default function SkillsItem(props) {
  const { characters, setCharacters } = useCharactersContext();

  function onAddHandler() {
    const newCharacters = JSON.parse(JSON.stringify(characters))
    newCharacters.charactersState[props.id].skillsState.skills[props.skill.name] = characters.charactersState[props.id].skillsState.skills[props.skill.name] + 1
    newCharacters.charactersState[props.id].skillsState.totalSpent = characters.charactersState[props.id].skillsState.totalSpent + 1
    if (characters.charactersState[props.id].skillsState.totalSpent >= characters.charactersState[props.id].skillsState.totalSkillPoints) {
      alert("You need more skill points. Upgrade intelligence for more!")
    } else {
      setCharacters(newCharacters)
    }
  }

  function onMinusHandler() {
    const newCharacters = JSON.parse(JSON.stringify(characters))
    newCharacters.charactersState[props.id].skillsState.skills[props.skill.name] = characters.charactersState[props.id].skillsState.skills[props.skill.name] - 1
    newCharacters.charactersState[props.id].skillsState.totalSpent = characters.charactersState[props.id].skillsState.totalSpent - 1
    if (characters.charactersState[props.id].skillsState.totalSpent > 0) {
      setCharacters(newCharacters)
    }
  }

  return (
    <div>
      <span><b>{props.skill.name}</b>: {characters.charactersState[props.id].skillsState.skills[props.skill.name]} | </span>
      <i>(Modifier: {props.skill.attributeModifier}) :</i>
      <span> {characters.charactersState[props.id].attributesState.attributes[props.skill.attributeModifier].modifier} </span>
      <button onClick={onAddHandler}>+</button>
      <button onClick={onMinusHandler}>-</button>
      <span> | total: {characters.charactersState[props.id].attributesState.attributes[props.skill.attributeModifier].modifier + characters.charactersState[props.id].skillsState.skills[props.skill.name]} </span>
    </div>
  );
}