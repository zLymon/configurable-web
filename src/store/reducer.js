import { INSTANTIATE_COMPONENT, SET_CLICKED_COMPONENT, RESET_UUID } from './actions'
import { generateUUID } from '../utils/uuid'

const initialState = {
  components: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INSTANTIATE_COMPONENT:
      const components = JSON.parse(JSON.stringify(state.components))
      const newAction = JSON.parse(JSON.stringify(action))
      const uuid = generateUUID()
      newAction.component.uuid = uuid
      components[uuid] = newAction.component
      return {
        components: components,
        uuid: state.uuid
      }
    case SET_CLICKED_COMPONENT:
      return {
        components: state.components,
        uuid: action.uuid
      }
    case RESET_UUID:
      return {
        components: state.components,
        uuid: ''
      }
    default:
      return state
  }
}

export default reducer