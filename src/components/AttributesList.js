import { ATTRIBUTE_LIST } from "../consts";
import AttributeItem from "./AttributeItem";
import '../App.css';

export default function AttributesList(props) {

  const attributesItem = ATTRIBUTE_LIST.map((attribute) =>
    <AttributeItem id={props.id} name={attribute} />
  )

  return (
    <div className="card">
      <h3>Attributes</h3>
      {attributesItem}
    </div>
  );
}