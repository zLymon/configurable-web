import React from 'react'
import { connect } from 'react-redux'
import { instantiateComponent } from '../store/actions'
import { checkElement } from '../utils/rule'

function mapStateToProps (state) {
  return {
    components: state.components,
    uuid: state.uuid
  }
}

const mapDispatchToProps = {
  instantiateComponent
}

class Div extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      component: this.props.property
    }

    this.handleDivClick = this.handleDivClick.bind(this)
  }

  handleDivClick () {
    if (this.props.uuid) {
      if (checkElement(this.props.components[this.props.uuid].el, this.state.component.el)) {
        const component = Object.assign({}, this.state.component, { parentId: this.props.uuid })
        this.setState({
          component: component
        }, () => {
          this.props.instantiateComponent(this.state.component, this.props.uuid)
        })
      } else {
        alert('illegal element！')
      }
    } else {
      const component = Object.assign({}, this.state.component, { parentId: '' })
      this.setState({
        component: component
      }, () => {
        this.props.instantiateComponent(this.state.component)
      })
    }
  }

  render () {
    return (
      <div className="component" onClick={this.handleDivClick}>{this.state.component.el}</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Div)