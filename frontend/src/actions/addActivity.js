export const addActivity = (activity, id) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/profiles/${id}/activities`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(activity)
      })
      .then(response => response.json())
      .then(profile => {
          if (profile.error) {
            alert(profile.error)
          } else {
            dispatch({type: 'ADD_ACTIVITY', payload: profile})
          }
        }
      )
    }
  }