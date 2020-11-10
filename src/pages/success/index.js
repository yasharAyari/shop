import React from 'react';
import styles from './style.module.css';
import Button from '../../components/button';
import Box from '../../components/box';

/**
 * this component shows the successful status page of each purchase
 */
const successfulPurchase = () => {
  return (
    <Box className={styles.wrapper}>
      <h3>Thank you for your purchase</h3>
      <p className={styles.info}>
        your order number is: <strong>00000361</strong>
      </p>
      <p className={styles.info}>
        we'll email you an order confirmation with details tracking info
      </p>
      <Button to="/" className={styles.button}>
        Continue shopping
      </Button>
    </Box>
  );
};

export default successfulPurchase;
