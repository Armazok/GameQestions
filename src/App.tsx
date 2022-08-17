import React, {useState} from 'react';
import './App.css';
import {Game} from "./Components/Game";
import {Result} from "./Components/Result";
import {Route, Routes} from "react-router-dom";
import {StarGame} from "./Components/StarGame";

export type questionsType = {
    title: string
    variants: string[]
    correct: number
}

export function App() {
    return (
        <div>
            <StarGame/>
        </div>
    );
}

