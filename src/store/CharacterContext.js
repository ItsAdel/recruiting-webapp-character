import { createContext, useContext, useState } from 'react';
import { newCharacterState } from '../utils.js'

const initialCharacter = newCharacterState()

const initialCharactersState = {
  'charactersState': [initialCharacter]
}

const CharactersContext = createContext(initialCharactersState);

const useCharactersContext = () => {
  const context = useContext(CharactersContext)

  if (!context) {
    throw new Error("Please use CharactersProvider in parent component")
  }

  return context
}

export const CharactersProvider = (props) => {
  const [characters, setCharacters] = useState(initialCharactersState)
  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {props.children}
    </CharactersContext.Provider>
  )
}

export default useCharactersContext;