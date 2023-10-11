import { CLASS_LIST } from '../consts'
import ClassItem from './ClassItem'

export default function ClassList(props) {

  const classItems = Object.keys(CLASS_LIST).map((classItem) =>
    <ClassItem name={classItem} id={props.id} attr={CLASS_LIST[classItem]} />
  )

  return (
    <div className="card">
      <h3>Classes</h3>
      {classItems}
    </div>
  )
}