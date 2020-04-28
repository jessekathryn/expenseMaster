export default function profileReducer(state = {profiles: []}, action) {
    switch (action.type) {
      case 'FETCH_PROFILES':
        return {profiles: action.payload}
      case 'ADD_PROFILE':
        return {...state, profiles: [...state.profiles, action.payload]}
      case 'ADD_ACTIVITY':
        let profiles = state.profiles.map(profile => {
          if (profile.id === action.payload.id) {
            return action.payload
          } else {
            return profile
          }
        })
        return {...state, profiles: profiles}
      case 'DELETE_ACTIVITY':
      let profilesTwo = state.profiles.map(profile => {
        if (profile.id === action.payload.id) {
          return action.payload
        } else {
          return profile
        }
      })
      return {...state, profiles: profilesTwo}