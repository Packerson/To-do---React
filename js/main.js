import React, {Component, useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import TaskList from "./components/TasksList";
import {getTasks} from "./getTasks";
import {getOperations} from "./getOperations";

export default function Main () {

    // const [tasks, setTasks] = useState({})
    // const [operation, setOperation] = useState({})
    //
    // useEffect(()=>{
    //     Object.values(getTasks(setTasks))
    //     console.log(tasks)
    // },[])

    // console.log(tasks)
    return <TaskList/>
}



