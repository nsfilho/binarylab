import React, { useRef } from 'react';
import { ConnectDropTarget, ConnectDragSource, DropTargetMonitor, DragSourceMonitor } from 'react-dnd';
import { DragSource, DropTarget, DropTargetConnector, DragSourceConnector } from 'react-dnd';

export const DRAGTYPE_INPUTGROUP = Symbol('InputGroup');

interface InputGroupDragObject {
    name: string;
}

interface InputGroupDragProps {
    connectDragSource: ConnectDragSource;
    connectDropTarget: ConnectDropTarget;
}

interface InputGroupProps {
    name: string;
    moveGroup: (source: string, to: string) => void;
}

const InputGroupDef: React.FC<InputGroupProps & InputGroupDragProps> = ({
    name,
    children,
    connectDragSource,
    connectDropTarget
}) => {
    const elementRef = useRef(null);
    connectDragSource(elementRef);
    connectDropTarget(elementRef);

    return (
        <div ref={elementRef} className="form-row InputGroup">
            {children}
        </div>
    );
};

InputGroupDef.defaultProps = {};

const InputGroupDraggable = DragSource(
    DRAGTYPE_INPUTGROUP,
    {
        beginDrag: (props: InputGroupProps, monitor, component) => {
            //console.log('BEGINDRAG:', props);
            return {
                name: props.name
            };
        }
    },
    (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    })
)(InputGroupDef);

export const InputGroup = DropTarget(
    DRAGTYPE_INPUTGROUP,
    {
        hover: (props, monitor, component) => {
            //console.log('HOVER:', props, monitor, component, monitor.getItem());
        },
        drop: (props, monitor, component) => {
            const myProps = props as InputGroupProps;
            //console.log('DROP:', props, monitor, component, monitor.getItem());
            myProps.moveGroup(monitor.getItem().name, myProps.name);
        }
    },
    (connect: DropTargetConnector, monitor: DropTargetMonitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    })
)(InputGroupDraggable);
