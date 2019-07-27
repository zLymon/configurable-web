import React from 'react'
import { Provider } from 'react-redux'
import Editor from './Editor'
import ComponentBar from './ComponentBar'
import { createStore } from 'redux'
import store from '../store/reducer'
import '../css/index.css'

const rootStore = createStore(store)

const App = () => (
  <Provider store={rootStore}>
    <div className="app">
      <ComponentBar />
      <Editor />
    </div>
  </Provider>
)

export default App