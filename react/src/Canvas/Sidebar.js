import React, { DragEvent } from 'react';
import nodeTypes from './Nodes.jsx';
import './design.css';
const onDragStart = (event, nodeType) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
  };
  const onClick = (event, ids) => {
    event.preventDefault();
    alert("ids.id");
  };
const dndOutput = () => {
      
};
const Sidebar = () => {
  return (
    <aside>
        <section class="home">
        <div class="caracteristicas">
            <div class="Etiquetas">Border Color</div>
            <div class="container1">
                <div class="c1" onElementClick={(event) => onClick(event, 'circle1')} draggable></div>
                <div class="c2"></div>
                <div class="c3"></div>
                <div class="c4"></div>
                <div class="c5"></div>
                <div class="c6"></div>
                <div class="c7"></div>
                <div class="c8"></div>
                <div class="c9"></div>
                <div class="c10"></div>
                <div class="c11"></div>
                <div class="c12"></div>
            </div>
            <div class="Etiquetas">Shapes</div>
            <div class="Shapes">
               <div class="circle" onDragStart={(event) => onDragStart(event, 'circle1')} draggable></div> 
               <div class="rectangle" onDragStart={(event) => onDragStart(event, 'rectangle1')} draggable></div> 
               <div class="diamond" onDragStart={(event) => onDragStart(event, 'diamond1')} draggable></div> 

            </div>
            <div class="Etiquetas">Fill Color</div>
            <div class="container1">
                <div class="c1"></div>
                <div class="c2"></div>
                <div class="c3"></div>
                <div class="c4"></div>
                <div class="c5"></div>
                <div class="c6"></div>
                <div class="c7"></div>
                <div class="c8"></div>
                <div class="c9"></div>
                <div class="c10"></div>
                <div class="c11"></div>
                <div class="c12"></div>
            </div>
                        
        </div>
    </section>  
    </aside>
  );
};

export default Sidebar;