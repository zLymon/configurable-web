import React from 'react'
import { connect } from 'react-redux'
import { setClickedComponent, resetUUID } from '../store/actions'

function mapStateToProps (state) {
  return {
    components: state.components
  }
}

const mapDispatchToProps = {
  setClickedComponent,
  resetUUID
}

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      components: {}
    }

    this.handleComponents = this.handleComponents.bind(this)
    this.createNodes = this.createNodes.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      components: nextProps.components
    })
  }

  handleComponents (components) {
    Object.keys(components).forEach(key => {
      Object.keys(components).forEach(key2 => {
        if (key2 === components[key].parentId) {
          if (components[key2].children) {
            components[key2].children.push(components[key])
          } else {
            components[key2].children = []
            components[key2].children.push(components[key])
          }
          this.handleComponents(components[key2])
        }
      })
    })
  }

  createNodes (component) {
    // 删除空的键值对，不影响原有的对象
    const createComponent = JSON.parse(JSON.stringify(component))
    return React.createElement(
      createComponent.el,
      Object.assign({}, createComponent.attribute,
        {
          key: createComponent.uuid,
          onClick: e => {
            e.stopPropagation()
            this.props.setClickedComponent(createComponent.uuid)
          }
        }
      ),
      component.children ? component.children.map(childComponent => this.createNodes(childComponent)) : component.attribute.text
    )
  }

  render () {
    const components = JSON.parse(JSON.stringify(this.state.components))
    this.handleComponents(components)
    const rootComponents = Object.keys(components).map(key => {
      if (!components[key].parentId) {
        return components[key]
      }
    }).filter(x => x)
    return (
      <div 
        className="editor" 
        onClick={this.props.resetUUID}>{rootComponents.map(component => this.createNodes(component))}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)