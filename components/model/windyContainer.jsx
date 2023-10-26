import React from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage,Stars } from "@react-three/drei"

import { Suspense } from "react";
import { Grid } from "@mui/material";
import Planet from "./Planet";
import Text from "../sections/HomeComponent/Text"
import "./styleWindyContainer.css"

const WindyContainer=()=>{

    return(
        <div className="windyContainer">
           <Grid container >
                <Grid item xs={12} md={6} className="textGrid">
                    <Text/>
                </Grid>
                <Grid item xs={12} md={6} className="canvasGrid">
                    <Canvas className="canvas"
                    shadows
                    frameloop='demand'
                    dpr={[1, 2]}
                    gl={{ preserveDrawingBuffer: true }}
                    camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [-4, 3, 6], }}>
                        <Suspense className="suspense" >
                        <OrbitControls 
                        autoRotate
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}/>
                    {/*    <Stage background="city" intensity={0.6}  >*/}
                            <Planet scale={1.8 }  />{/* MODEL 3D*/}
                        {/*  </Stage>*/}
                        </Suspense>
                    
                    </Canvas>
                </Grid>
            </Grid>
        </div>
    )
}

export default WindyContainer