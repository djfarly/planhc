import React from 'react';
import PropTypes from 'prop-types';
import { ProjektTemplate } from '../../templates/projekt';

const ProjektPreview = ({ entry, widgetFor }) => (
  <ProjektTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

ProjektPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ProjektPreview;
