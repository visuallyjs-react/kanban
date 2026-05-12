import {
    BrowserElement,
    EmptyLayout,
    EVENT_TAP,
    Group, GroupEventCallbackPayload,
    Node,
    NodeEventCallbackPayload
} from "@visuallyjs/browser-ui";
import {JsxWrapperProps, ReactSurfaceViewOptions} from "@visuallyjs/browser-ui-react";
import ItemComponent from "./ItemComponent.tsx";
import ColumnComponent from "./ColumnComponent.tsx";

/**
 * View options map node/group types to the JSX used to render them and to various aspects of the given vertex type's
 * behaviour. They also allow you to map edge types to edge appearance and behaviour, although for simple config
 * you can use the `edges` render option in place of an edge mapping a view (see code above).
 */
const viewOptions:ReactSurfaceViewOptions = {
    nodes: {
        default: {
            jsx: (ctx: JsxWrapperProps<Node>) => <ItemComponent ctx={ctx}/>,
            events: {
                [EVENT_TAP]: (p: NodeEventCallbackPayload<BrowserElement>) => {
                    p.model.setSelection(p.obj)
                }
            }
        }
    },
    groups: {
        default: {
            jsx: (ctx: JsxWrapperProps<Group>) => <ColumnComponent ctx={ctx}/>,
            layout: {
                type: EmptyLayout.type
            },
            events: {
                [EVENT_TAP]: (p: GroupEventCallbackPayload<BrowserElement>) => {
                    p.model.clearSelection()
                }
            }

        }
    }
}


export default viewOptions
