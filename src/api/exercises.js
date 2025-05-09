import axios from "axios"

export const fetchExercises = (params = {}) => {
    return axios({
        url: `${endpoint}`,
        headers: {
            "Content-type": "application/json"
        },
        params: {
            ...params
        },
        method: "GET",
        data: null
    }).then(({data}) => {
        return data;
    });
};