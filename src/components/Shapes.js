import React from 'react';
import {TextureLoader} from "three/src/loaders/TextureLoader";
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import className from 'classnames';
import { useLoader, ReactP5Wrapper as Wrapper } from "react-p5-wrapper";
import {OrbitControls} from "@react-three/drei";
//document.body.style = 'background: red;';

function Shapes(){
        return(   
                
            <Wrapper className = "wrapper">
                
            <Canvas className ="canvas" camera={{ position: [0,0,10] }}>  
                <OrbitControls enableZoon = {false}/>                       
                <ambientLight intensity={0.8}/>
                <directionalLight position={[-2,8,2]} intensity={1} />
                <mesh rotation ={[90,0,20]}>
                    <boxBufferGeometry attach ="geometry" args = {[5,5,5]}  />
                    <meshLambertMaterial attach="material" color="purple" />       





                </mesh>
                
            </Canvas>
            </Wrapper> 
              
        );
       
}



export default Shapes;

