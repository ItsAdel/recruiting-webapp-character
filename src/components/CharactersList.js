import useCharactersContext from '../store/CharacterContext';
import '../App.css';
import { newCharacterState } from '../utils.js'
import CharacterItem from './CharacterItem';
import { useEffect } from 'react';

export default function CharactersList(props) {

  const { characters, setCharacters } = useCharactersContext()

  // Initialize data if available
  useEffect(() => {
    fetch("https://recruiting.verylongdomaintotestwith.ca/api/{itsadel}/character",)
    .then(function(res){ 
      if (res.ok) {
        res.json().then(data => {
          res.data = data;
          setCharacters(data.body)
        });
      }
    })
    .catch(function(res){ console.log(res) })
  }, [])

  function onAddHandler() {
    const newCharacters = JSON.parse(JSON.stringify(characters))
    const initialCharacter = newCharacterState()
    newCharacters.charactersState.push(initialCharacter)
    setCharacters(newCharacters)
  }

  function onSaveHandler() {
    fetch("https://recruiting.verylongdomaintotestwith.ca/api/{itsadel}/character",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(characters)
      }
    )
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
  }

  return (
    <div>
      <h3>Characters</h3>
      <button onClick={onAddHandler}>Add new character</button>
      <button onClick={onSaveHandler}>Save all characters</button>
      {characters.charactersState.map((character, idx) => {
        return <CharacterItem key={idx} id={idx} />
      })}
    </div>
  );
}