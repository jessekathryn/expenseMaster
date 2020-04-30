export const addProfile = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/profiles', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(profile => dispatch({ type: 'ADD_PROFILE', payload: profile }));
    };
};