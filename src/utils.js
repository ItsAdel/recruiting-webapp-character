import { ATTRIBUTE_LIST, SKILL_LIST } from './consts.js';

export function newCharacterState() {
  const initialAttributesState = {
    'spent': 60,
    'attributes': {}
  }
  
  // Initialize attributes object
  ATTRIBUTE_LIST.forEach((attribute) => {
    initialAttributesState.attributes[attribute] = {
      'value': 10,
      'modifier': 0,
    }
  })
  
  const initialSkillsState = {
    'totalSkillPoints': 10,
    'totalSpent': 0,
    'skills': {}
  }
  
  // Initialize skills object
  SKILL_LIST.forEach((skill)=> {
    initialSkillsState.skills[skill.name] = 0
  })
  
  return {
    'attributesState': initialAttributesState,
    'skillsState': initialSkillsState
  }
}

export function calculateTotalSkillsAvailable(modifier) {
  return (10 + (4 * Math.max(modifier, 0)))
}