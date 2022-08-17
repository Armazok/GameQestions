import React from "react";
import './App.css';
import {Link, NavLink, useNavigate} from "react-router-dom";

type ResultType = {
    correct: number
    lengthQuest: number
    setOpen: (isOpen: boolean) => void;
    setStep: (step: number) => void;
}

export const Result: React.FC<ResultType> = ({
                                                 correct,
                                                 lengthQuest,
                                                 setOpen,
                                                 setStep

                                             }) => {

    const handleClick = () => {
        setOpen(false)
        setStep(0)
    }
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt={""}/>
            <h2>Вы верно ответили на {correct} вопроса из {lengthQuest}</h2>
            <button onClick={handleClick}>Попробовать снова</button>
        </div>
    );
}