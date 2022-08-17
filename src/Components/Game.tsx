import React from "react";
import '../App.css';
import {questionsType} from "../App";

type GameType = {
    percentage: () => number
    question: questionsType
    step: number
    onClickVariant: (index: number) => void
}

export const Game: React.FC<GameType> = ({
                                             percentage,
                                             question,
                                             onClickVariant,
                                         }) => {
    return (
        <div>
            <div className="progress">
                <div style={{width: `${percentage()}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) => {
                        const onClickVariantLi = () => {
                            onClickVariant(index)
                        }
                        return (
                            <li onClick={onClickVariantLi} key={text}>{text}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}