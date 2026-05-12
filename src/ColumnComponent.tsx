import {Group, uuid } from "@visuallyjs/browser-ui"

import { JsxWrapperProps } from "@visuallyjs/browser-ui-react"

/**
 * Component for a column in the Kanban
 */
export default function ColumnComponent(props:{ctx:JsxWrapperProps<Group>}) {

    const {ui, model, obj} = props.ctx

    function addItem(event:any) {
        if (event.code === "Enter") {

            // On enter keypress, find out how many members there already are in the column
            const order = obj.getMembers().length
            // add a new item to the column, specifying an `order` property and the text from
            // the input field, or default to `Item` if the user didnt type anything.
            const node = model.addNode({
                group:obj,
                id:uuid(),
                order,
                name:event.target.value || "Item"
            })

            // show the rendered item in the next tick of the event loop
            setTimeout(() => {
                const el = ui.getRenderedElement(node)
                el.scrollIntoView()
                model.setSelection(node)
            }, 0)

            // clear the input field
            event.target.value = ""

        }
    }

    return <div className="vjs-kanban-lane" data-vjs-draggable="false">
        <div className="vjs-kanban-lane-header">

            <div className="vjs-kanban-lane-titlebar">
                <div className="vjs-kanban-lane-color" style={{ "backgroundColor":obj.data.color}}/>
                <div className="vjs-kanban-lane-title">{obj.data.title}</div>
                <div className="vjs-kanban-lane-edit" aria-label="Edit column name and description" title="Edit column name and description" onClick={() => model.setSelection(obj)}/>
            </div>

            <div className="vjs-kanban-lane-description">{obj.data.description}</div>
        </div>

        { /* the items go into this element */ }
        <div data-vjs-group-content="true"/>

        <div className="vjs-kanban-lane-footer">
            <input type="text" placeholder="Add item..." onKeyPress={(e) => addItem(e)}/>
        </div>
    </div>
}
