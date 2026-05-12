import { useRef, useEffect } from 'react'

import {
    ControlsComponent,
    SurfaceComponent,
    SurfaceProvider
} from "@visuallyjs/browser-ui-react"

import {
    EVENT_GROUP_RENDERED,
    uuid
} from "@visuallyjs/browser-ui"

import { DragManager } from './drag-manager'
import KanbanInspectorComponent from "./InspectorComponent";

import renderOptions from "./render-options"
import viewOptions from "./view-options"

export default function App({url}) {

    const initialized = useRef(false)
    const surfaceRef = useRef(null)
    const surface = useRef(null)

    function addColumn(event) {
        if (event.code === "Enter") {
            //@ts-ignore
            surfaceRef.current.getModel().addGroup({
                id:uuid(),
                title:event.target.value,
                description:"",
                color:"#FFFFFF"
            })
            event.target.value = ""
        }
    }

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            surface.current = surfaceRef.current.getSurface()
            new DragManager(surface.current)
            // surface.current.bind(EVENT_GROUP_RENDERED, (p) => {
            //     setTimeout(() => p.el.scrollIntoView())
            // })
        }
    })

    return <div className="vjs-kanban-main">
        <SurfaceProvider>
            <div className="vjs-kanban-container">
                <SurfaceComponent
                    viewOptions={viewOptions}
                    renderOptions={renderOptions}
                    ref={surfaceRef}
                    url={url}
                />
            </div>

            <div className="vjs-kanban-rhs">

                <ControlsComponent zoomToExtents={false} clear={false}/>

                <div className="vjs-kanban-controls">
                    <input type="text" className="vjs-kanban-add-column" placeholder="Add column..." onKeyPress={(e) => addColumn(e)}/>
                </div>

                <KanbanInspectorComponent/>

                <div className="description">

                </div>
            </div>

        </SurfaceProvider>

    </div>

}
