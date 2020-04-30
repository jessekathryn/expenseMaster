export default function profileReducer(state = {profiles: []}, action) {
    
    switch (action.type) {
      case 'FETCH_PROFILES':
        return {profiles: action.payload};

      case 'ADD_PROFILE':
        return {...state, profiles: [...state.profiles, action.payload]};

      case 'ADD_ACTIVITY':
        let profilesAdd = state.profiles.map(profile => {
          if (profile.id === action.payload.id) {
            return action.payload
          } else {
            return profile;
          }
        })
        return {...state, profiles: profilesAdd}

      case 'DELETE_ACTIVITY':
        let profilesDelete = state.profiles.map(profile => {
        if (profile.id === action.payload.id) {
          return action.payload
        } else {
          return profile
        }
      })
      return {...state, profiles: profilesDelete}

      case 'EDIT_PROFILE':
        let profilesEdit = state.profiles.map(profile => {
        if (profile.id === action.payload.id) {
          return action.payload
        } else {
          return profile
        }
      })
      return {...state, profiles: profilesEdit}
      
    default:
      return state
  }
}