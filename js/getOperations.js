import { KEY, URL } from "./constants";


/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */

export const getOperations = async (id, successCallback) => {
    try {
        const response = await fetch(`${URL}/tasks/${id}/operations`, {
            headers: {
                Authorization: KEY,
            },
        });
        const data = await response.json();
        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }
        successCallback(data.data);
    } catch (err) {
        console.log(err);

    }

};