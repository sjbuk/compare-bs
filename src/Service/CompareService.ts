import http from "./http-common";

export const getAll = () => {
    return http.get("/comparisons");
};

export const getByGroup = (group : string) => {
    return http.get(`/comparisons/${group}`);
};


export const  get = (id: string) => {
    return http.get(`comparison/${id}`);
};

export const getGroups = () =>{
    return http.get("/groups")
};



