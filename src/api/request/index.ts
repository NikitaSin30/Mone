


export const request = <T>(url:string,method:string,data:T) =>{

    if (method === 'GET') {
        return fetch(url,{
            method  : method,
            headers : {
                Authorization : `Bearer ${data}`,
            },
        });
    }

    return fetch(url,{
        method  : method,
        headers : {
            'Content-type' : 'application/json',
        },
        body : JSON.stringify(data),
    });
};
