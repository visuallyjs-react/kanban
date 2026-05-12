import {useState} from "react";

import {InspectorComponent} from "@visuallyjs/browser-ui-react"
import { Node, Group, Base } from "@visuallyjs/browser-ui"

export default function KanbanInspectorComponent() {

    const [currentType, setCurrentType] = useState('')

    return <InspectorComponent renderEmptyContainer={() => setCurrentType('')} refresh={(obj:Base) => setCurrentType(obj.objectType)}>

        { currentType === '' && <></> }

        { currentType === Node.objectType &&
        <div className="vjs-kanban-inspector">
            <strong>Label</strong>
            <input vjs-att="name" type="text"/>
            <strong>Description</strong>
            <textarea vjs-att="description" rows={10}/>
            </div>
        }

        { currentType === Group.objectType &&
        <div className="vjs-kanban-inspector">
            <strong>Title</strong>
            <input vjs-att="title" type="text"/>
            <strong>Description</strong>
            <textarea vjs-att="description" rows={10}/>
            <strong>Color</strong>
            <input type="color" vjs-att="color"/>
        </div>
        }

    </InspectorComponent>

}
