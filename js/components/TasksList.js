import React, {Component, useEffect, useState} from 'react';

import {KEY} from "../constants"
import {URL} from "../constants"
import {getOperations} from "../getOperations";

/**

 * Fetch all tasks

 * @param {function} successCallback - Function that saves incoming data

 */

export default function taskList (successCallback) {

    const [tasks, setTasks] = useState([])
    useEffect(()=>{
        const getMain = async () => {
            const res = await fetch(URL, {
                headers: {
                    Authorization: KEY,
                },
            });

            if (!res.ok) {
                throw new Error({
                    msg: "ops",
                    status: res.status,
                });
            }
            const {data} =await res.json()
            console.log(data)
            setTasks(data)
            successCallback(data);
        }
        getMain().catch((err) => console.log(err));
    },[])

    console.log("tasks", tasks)

    return (
        <section className="card mt-5 shadow-sm">

            {tasks.map((el, idx)=>{
                return (
                    <div key={idx} className="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{el.title}</h5>
                            <h6 className="card-subtitle text-muted">Domyślnie formularz ma być ukryty</h6>
                        </div>

                        <div>
                            <button className="btn btn-info btn-sm mr-2">
                                Add operation
                                <i className="fas fa-plus-circle ml-1"></i>
                            </button>

                            <button className="btn btn-dark btn-sm">
                                Finish
                                <i className="fas fa-archive ml-1"></i>
                            </button>
                        </div>
                    </div>
                )
            })}


        </section>
    )
}