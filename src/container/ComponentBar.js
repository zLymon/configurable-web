import React from 'react'
import Component from '../components/Component'
import * as componentJSON from '../configuration'

function ComponentBar () {
  const componentLists = Object.keys(componentJSON).map(item => componentJSON[item])
  return (
    <div className="side-bar">
      {
        componentLists.map(component => {
          return React.createElement(Component, { key: component.el, property: component })
        })
      }
    </div>
  )
}

export default ComponentBar