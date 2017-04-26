const jsx = require('babel-plugin-syntax-jsx')

module.exports = function () {
  return {
    inherits: jsx,
    visitor: {
      JSXElement (path, state) {
        path.node.openingElement.attributes = path.node.openingElement.attributes.map(
          a => {
            if (a.name && a.name.name === 'styleName') {
              a.name.name = 'data-styleName'
            }
            return a
          }
        )
      }
    }
  }
}
