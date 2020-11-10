import React from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Row } from 'react-flexbox-grid';
import styles from './style.module.css';
import FormattedTime from '../../components/formattedTime';
import FormattedDifficulty from '../../components/formattedDifficulty';
import Button from '../../components/button';
import Box from '../../components/box';

/**
 * this component shows the detail page of each recipe
 */
const Detail = () => {
  const { recipe } = useLocation();
  return (
    <section>
      <figure className={styles.imageWrapper}>
        <img src={recipe.image} alt={recipe.name} className={styles.image} />
      </figure>
      <Box className={styles.topWrapper}>
        <div className={styles.box}>
          <h1 className={styles.name}>
            {recipe.name}
            <Button to="/confirm-purchase" className={styles.button}>
              Buy now
            </Button>
          </h1>
          <h4 className={styles.headline}>{recipe.headline}</h4>
          <Row>
            <Col lg={8} sm={12}>
              <p className={styles.description}>{recipe.description}</p>
            </Col>
            <Col lg={4} sm={12}>
              <div className={styles.info}>
                <strong>Total Time</strong>
                <FormattedTime value={recipe.time} />
              </div>
              <div className={styles.info}>
                <strong>Cooking difficulty</strong>
                <FormattedDifficulty value={recipe.difficulty} />
              </div>
            </Col>
          </Row>
        </div>
      </Box>
      <section className={styles.bottomWrapper}>
        <Row>
          <Col lg={8} sm={12}>
            <div className={styles.box}>
              <h3>Ingredients</h3>
              <Row>
                {recipe.ingredients.map((item, index) => (
                  <Col lg={6} key={index} className={styles.ingredient}>
                    {item}
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={4} sm={12}>
            <div className={styles.box}>
              <h3>Nutrition Values</h3>
              <div className={styles.info}>
                <strong>Calories</strong>
                <span>{recipe.calories}</span>
              </div>
              <div className={styles.info}>
                <strong>Fat</strong>
                <span>{recipe.fats}</span>
              </div>
              <div className={styles.info}>
                <strong>Protein</strong>
                <span>{recipe.proteins}</span>
              </div>
              <div className={styles.info}>
                <strong>Carbohydrate</strong>
                <span>{recipe.carbos}</span>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </section>
  );
};

export default Detail;
