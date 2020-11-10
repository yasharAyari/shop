import React from 'react';
import { Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import styles from './styles.module.css';
import FormattedTime from '../../../components/formattedTime';

const Recipe = ({ data }) => (
  <Col lg={4} sm={12} className={styles.wrapper}>
    <Link
      to={{
        pathname: `/detail/${data.id}`,
        recipe: data,
      }}>
      <img src={data.thumb} alt={data.name} className={styles.image} />
    </Link>
    <div className={styles.contentWrapper}>
      <h3 className={styles.title}>{data.name}</h3>
      <span id={`headline-${data.id}`} className={styles.headline}>
        {data.headline}
      </span>
      <footer className={styles.footer}>
        <div>
          <strong id={`time-${data.id}`} className={styles.time}>
            <FormattedTime value={data.time} />
          </strong>
          <span id={`calories-${data.id}`} className={styles.calories}>
            {data.calories}
          </span>
        </div>
        <ReactStars
          count={5}
          size={14}
          color="#E8E8E8"
          value={data.rating}
          activeColor="#FFD070"
        />
      </footer>
    </div>
  </Col>
);

Recipe.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Recipe;
