export default function Task (props){
    return (
        <li className = {props.className ?  props.className : null}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">{props.value}</span>
              <span className="created">{props.date}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
          {props.className === 'editing' ? <input type="text" className="edit" defaultValue = {props.value} />:null}
        </li>
    )
}