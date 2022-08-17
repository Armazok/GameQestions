import React, {useState} from 'react';
import './App.css';
import {Game} from "./Game";
import {Result} from "./Result";
import {Route, Routes} from "react-router-dom";
import {StarGame} from "./StarGame";

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

