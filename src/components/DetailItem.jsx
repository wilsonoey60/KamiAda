import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDateTime } from '../utils/date.js';
 
function DetailItem({ idservice, nameservice, descriptionservice, createdatservice }) {
  return (
    <main>
      <div className="detail-page">
        <h3 className="detail-page__title">{nameservice}</h3>
        <p className="detail-page__createdAt">{showFormattedDateTime(createdatservice)}</p>
        <p className="detail-page__body">{descriptionservice}</p>
      </div>
    </main>
  );
}
 
DetailItem.propType = {
  idservice: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
 
export default DetailItem;