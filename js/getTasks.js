import {KEY} from "./constants"
import {URL} from "./constants"
import {useEffect} from "react";

/**

 * Fetch all tasks

 * @param {function} successCallback - Function that saves incoming data

 */

export const getTasks = async (successCallback) => {

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

            successCallback(data);
        }
        getMain().catch((err) => console.log(err));
    },[])
}