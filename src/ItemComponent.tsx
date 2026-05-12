import {JsxWrapperProps} from "@visuallyjs/browser-ui-react";
import {Node} from "@visuallyjs/browser-ui"

export default function ItemComponent(props:{ctx:JsxWrapperProps<Node>}) {

    const {obj, model} = props.ctx

    return <div className="vjs-kanban-item" draggable="true">
        <div className="vjs-kanban-item-delete" onClick={() => model.removeNode(obj)}/>
        {obj.data.name}
    </div>
}
