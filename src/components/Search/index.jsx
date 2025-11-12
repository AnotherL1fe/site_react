import { useState } from "react";
import style from "./style.module.css"

const Search = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        addTask(userInput.trim(), taskDate);
        setUserInput("");
        setTaskDate("");
    }

    return <form action="" onSubmit={submit}>
        <input
            type="search"
            placeholder="Найти товары"
            value={userInput}
            onChange={handleChange}
        />
        {/* <input type="submit" value="Search" /> */}
    </form>

}

export default Search