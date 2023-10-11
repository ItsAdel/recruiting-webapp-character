import { SKILL_LIST } from "../consts";
import SkillItem from "./SkillItem";
import useCharactersContext from '../store/CharacterContext';
import '../App.css';
import { useEffect } from "react";
import { calculateTotalSkillsAvailable } from '../utils'

export default function SkillsList(props) {

  const { characters, setCharacters } = useCharactersContext();

  useEffect(() => {
    // Initilialize total skills available
    // updateTotalSkillsAvailable()
    const skillsAvailable = calculateTotalSkillsAvailable(characters.charactersState[props.id].attributesState.attributes['Intelligence'].modifier)
    const newCharacters = JSON.parse(JSON.stringify(characters))
    newCharacters.charactersState[props.id].skillsState.totalSkillPoints = skillsAvailable
    setCharacters(newCharacters)
  }, [])

  const skillItems = SKILL_LIST.map((skill) =>
    <SkillItem key={skill.name} id={props.id} skill={skill} />
  )

  return (
    <div className="card">
      <h3>Skills</h3>
      <p>Total skill points available: {characters.charactersState[props.id].skillsState.totalSkillPoints}</p>
      {skillItems}
    </div>
  );
}