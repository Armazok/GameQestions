import React, {useState} from 'react';
import {Game} from "./Game";
import {Result} from "./Result";
import {questionsType} from "../App";

export const StarGame = () => {
    let [open, setOpen] = useState(false)
    const questions: questionsType[] = [
        {
            title: 'React - это ... ?',
            variants: ['библиотека', 'фреймворк', 'приложение'],
            correct: 0,
        },
        {
            title: 'Компонент - это ... ',
            variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
            correct: 1,
        },
        {
            title: 'Что такое JSX?',
            variants: [
                'Это простой HTML',
                'Это функция',
                'Это тот же HTML, но с возможностью выполнять JS-код',
            ],
            correct: 2,
        },
    ];


    let [step, setStep] = useState(0)
    let [correct, setCorrect] = useState(0)

    const question = questions[step]

    const percentage = () => Math.round((step / questions.length) * 100)
    const OnClickVariant = (index: number) => {
        //  console.log(step, index)
        setStep(step + 1)
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }
    const buttonOpen = () => {
        setOpen(true)
    }
    return (
        <div className="App">
            <button onClick={buttonOpen} className="open-modal-btn">✨ Начать игру</button>
            {
                open && (
                    <div className="overlay">
                        <div className="modal">
                            {
                                step !== questions.length
                                    ? <Game step={step} percentage={percentage} question={question}
                                            onClickVariant={OnClickVariant}/>
                                    : <Result setOpen={setOpen} setStep={setStep} lengthQuest={questions.length}
                                              correct={correct}/>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};
