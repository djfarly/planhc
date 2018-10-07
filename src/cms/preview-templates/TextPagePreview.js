import React from 'react'
import PropTypes from 'prop-types'
import { TextPageTemplate } from '../../templates/text-page'

const TextPagePreview = ({ entry, widgetFor }) => (
  <TextPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TextPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TextPagePreview
