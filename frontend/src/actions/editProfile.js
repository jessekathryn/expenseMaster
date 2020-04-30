export const editProfile = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/profiles/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(profile => dispatch({type: 'EDIT_PROFILE', payload: profile}));
    };
  
  };