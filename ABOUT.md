# Kanban Board Implementation

This document describes how the Kanban Board is implemented using `@visuallyjs/browser-ui-react` and `@visuallyjs/browser-ui`.

## Components

The application uses the following core components from `@visuallyjs/browser-ui-react`:

- **`SurfaceProvider`**: Provides the context for the Kanban surface.
- **`SurfaceComponent`**: The main canvas area where the Kanban columns and cards are rendered.
- **`ControlsComponent`**: Provides standard zoom and pan controls.

### Custom Components
- **`KanbanInspectorComponent`**: Allows users to edit properties of columns and tasks.
- **`ColumnComponent`**: Custom JSX component for rendering Kanban columns (groups).
- **`ItemComponent`**: Custom JSX component for rendering Kanban cards (nodes).

## Interaction Logic
The Kanban board uses a custom `DragManager` to handle the movement of cards between columns. It leverages the underlying VisuallyJS model to update task states (column assignment) based on user drag-and-drop actions.

## Configuration Options

- **`renderOptions`**: Configures how columns and cards are rendered on the surface.
- **`viewOptions`**: Maps node and group types to their respective JSX components.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom styles for the Kanban board, including column and card themes, are imported from `kanban.css`.
