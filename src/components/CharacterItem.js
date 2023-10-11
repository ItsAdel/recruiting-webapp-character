import '../App.css';
import AttributesList from './AttributesList';
import ClassList from './ClassList';
import SkillsList from './SkillList';

export default function CharacterItem(props) {
  return (
    <div>
      <h5>Character {props.id}</h5>
      <div className='cards'>
        <AttributesList id={props.id} />
        <ClassList id={props.id} />
        <SkillsList id={props.id} />
      </div>
    </div>
  );
}