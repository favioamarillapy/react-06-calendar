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

export const fecthUsingToken = (endpoint, data, method = 'GET') => {

    const url = `${URL_API}/${endpoint}`;
    const token = localStorage.getItem('react-06-calendar-token') || '';

    if (method === 'GET') {

        return fetch(url, {
            method: 'get',
            headers: {
                'Authorization': token
            }
        });
    } else {

        return fetch(url, {
            method: method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });
    }
}