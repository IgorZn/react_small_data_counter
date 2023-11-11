import './App.css';
import {useCallback, useState} from "react";
import Message from "./components/Message";

function App() {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const useStepIncrement = useCallback(
        () => {
            setStep((current) => current + 1)
        },
        [],
    );
    const useStepDecrement = useCallback(
        () => {
            setStep((current) => current === 1 ? current : current - 1)
        },
        [],
    );

    const useCountIncrement = useCallback(
        (step) => () => {
            if (step > 1) {
                setCount((current) => current + step)
            } else {
                setCount((current) => current + 1)
            }
        },
        [],
    );

    const useCountDecrement = useCallback(
        (step) => () => {
            if (step > 1) {
                setCount((current) => current - step)
            } else {
                setCount((current) => current - 1)
            }
        },
        [],
    );


    return (
        <div className="container ">
            <h1>Date counter</h1>
            <div className={"row justify-content-center"}>
                <div className="col mystyle">
                    <button type="button" className="btn btn-info m-2" onClick={useStepDecrement}>-</button>
                    <p className={"text m-3"}>Step: {step}</p>
                    <button type="button" className="btn btn-info m-2" onClick={useStepIncrement}>+</button>
                </div>
            </div>
            <div className={"row justify-content-center"}>
                <div className={"col mystyle"}>
                    <button type="button" className="btn btn-info m-2" onClick={useCountDecrement(step)}>-</button>
                    <p className={"text m-3"}>Count: {count}</p>
                    <button type="button" className="btn btn-info m-2" onClick={useCountIncrement(step)}>+</button>
                </div>
            </div>
            <div className={"row justify-content-center"}>
                <div className={"col justify-content-center text-center"}>
                    <Message count={count} step={step}/>
                </div>
            </div>
        </div>
    );
}

export default App;
