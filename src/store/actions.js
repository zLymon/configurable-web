export const INSTANTIATE_COMPONENT = 'INSTANTIATE_COMPONENT'
export const SET_CLICKED_COMPONENT = 'SET_CLICKED_COMPONENT'
export const RESET_UUID = 'RESET_UUID'

export const instantiateComponent = component => ({ type: INSTANTIATE_COMPONENT, component })
export const setClickedComponent = uuid => ({ type: SET_CLICKED_COMPONENT, uuid })
export const resetUUID = () => ({ type: RESET_UUID })