const URL_API = `${process.env.REACT_APP_URL_API}`

export const fecthNotUsingToken = (endpoint, data, method = 'GET') => {

    const url = `${URL_API}/${endpoint}`;

    if (method === 'GET') {

        return fetch(url);
    } else {

        return fetch(url, {
            method: method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

}

export const fecthUsingToken = () => {

}