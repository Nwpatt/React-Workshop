import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score = ()=>{
    const {score} = useContext(DataContext)
    return(
        <div className="score">
            <h1>สรุปผลคะแนน</h1>
            <h2>{score} / {QuestionsData.length}</h2>
        </div>
    )
}

export default Score;