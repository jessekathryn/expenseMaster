export const deleteActivity = (activityId, profileId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/profiles/${profileId}/activities/${activityId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(profile => dispatch({type: 'DELETE_ACTIVITY', payload: profile}))
    }
  }