import { Handle } from "react-flow-renderer"
import './design.css';
const diamond1 = ({data}) => {
    return(
        <div className="diamond1" contentEditable="true">
            <Handle
            type="target"
            position="left"
            style={{top: '0%'}}
            id="leftHandle"
            contentEditable="false"
            />
            <Handle
            type="source"
            position="right"
            style={{top: '100%'}}
            id="rightHandle"
            contentEditable="false"
            />
            <Handle
            type="source"
            position="top"
            style={{left: '100%'}}
            id="topHandle"
            contentEditable="false"
            />
            <Handle
            type="source"
            position="bottom"
            style={{left: '0%'}}
            id="bottomHandle"
            contentEditable="false"
            />
        </div>
    )
};

const rectangle1 = ({data}) => {
    return(
        <div className="rectangle1" contentEditable="true">
            <Handle
            type="target"
            position="left"
            id="leftHandle"
            contentEditable="false"
            />
            <Handle
            type="source"
            position="right"
            id="rightHandle"
            contentEditable="false"
            />
        </div>
    )
};
const circle1 = ({data}) => {
    return(
        <div className="circle1" contentEditable="true">
            <Handle
            type="target"
            position="left"
            id="leftHandle"
            contentEditable="false"
            />
            <Handle
            type="source"
            position="right"
            id="rightHandle"
            contentEditable="false"
            />
        </div>
    )
};

const nodeTypes ={
    diamond1: diamond1,
    rectangle1: rectangle1,
    circle1: circle1
};

export default nodeTypes;