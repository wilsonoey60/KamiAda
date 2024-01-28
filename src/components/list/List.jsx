import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from '../card/article-card';
import { showFormattedDateTime } from '../../utils/date';
 
function List({ services }) {
  if (services.length >= 0) {
    return (
      <>
        {
          services.map((service) => (
            <ArticleCard
              key={service.idservice}
              id={service.idservice}
              title={service.nameservice}
              category={service.categoryservice}
              image_src={service.avatarservice}
              image_alt={service.nameservice}
              name={service.username}
              avatar_src={service.avataruser}
              avatar_alt={service.username}
              time={showFormattedDateTime(service.createdatservice)}
              createdAt={service.createdAt}
            />
          ))
        }
      </>
    );
  }
}

export default List;
