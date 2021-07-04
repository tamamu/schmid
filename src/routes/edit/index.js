import { h } from 'preact'
import {useEffect, useState} from "preact/hooks"
import style from './style.css'
import styled from 'styled-components'

const Layer = styled.div`
    position: absolute;
    min-width: ${props => props.width}px;
    min-height: ${props => props.height}px;
    transform-origin: ${props => props.origin?.x ? `${props.origin?.x}px` : 'center'} ${props => props.origin?.y ? `${props.origin?.y}px` : 'center'} 0;
    transform: translateX(${props => props.position?.x ? `${props.position?.x}px` : 0}) translateY(${props => props.position?.y ? `${props.position?.y}px` : 0}) rotate(${props => props.angle}deg);
`

const Typo = styled.p`
    position: absolute;
    transform: translateX(${props => props.position?.x ? props.position?.x : 0}px) translateY(${props => props.position?.y ? props.position?.y : 0}px);
    font-family: ${props => props.fontFamily ? props.fontFamily : 'sans'};
    font-size: ${props => props.fontSize ? props.fontSize : 12}px;
`

const White = styled.div`
    position: absolute;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: white;
`

const Typeset = props => {
    return (
        <div>
        {props.data.map((d, idx) => (
        <Typo
            key={idx}
            position={d.position}
            fontFamily={d.fontFamily}
            fontSize={d.fontSize}
            >
            {d.text}
            </Typo>
        ))}
        </div>
    )
}

const Print = ({ typeset, parameters, origin }) => {
    return (
    <White width={1024} height={1024}>
        {parameters.map((param, idx) => (
            <Layer key={idx} width={600} height={600} angle={param.angle} position={param.position} origin={origin}>
            <Typeset
                data={typeset}
                />
            </Layer>
        ))}
    </White>
    )
}

const Edit = () => {
    const typeset = [
        {text: 'gra', position: {x: 100, y: 300}},
        {text: 'fisk', position: {x: 400, y: 200}},
        {text: 'revy', position: {x: 300, y: 100}},
        {text: 'gra', position: {x: 100, y: 50}},
        {text: 'fisk', position: {x: 120, y: 50}},
        {text: 'revy', position: {x: 140, y: 50}},
        {text: 'gra', position: {x: 110, y: 80}},
        {text: 'fisk', position: {x: 130, y: 80}},
        {text: 'revy', position: {x: 150, y: 80}},
        {text: 'gra', position: {x: 200, y: 250}},
        {text: 'fisk', position: {x: 200, y: 270}},
    ]
    const parameters = Array.from(Array(240), (_, idx) => ({
            angle: Math.random() * 170,
            position: {x: Math.random() * 7, y: Math.random() * 5},
        }))
    console.log(parameters)

    return (
	<div class={style.edit}>
		<Print
            origin={{x: 240, y: 400}}
            typeset={typeset}
            parameters={parameters}
            />
	</div>
    )
};

export default Edit;
