import React from 'react';
import styles from './style.module.css';
import Button from '../../components/button';
import Box from '../../components/box';

/**
 * this component shows the confirmation page of each purchase
 */
const ConfirmPurchase = () => {
  return (
    <Box className={styles.wrapper}>
      <h3>Term and conditions</h3>
      <p className={styles.terms}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Integer enim neque
        volutpat ac tincidunt. Sit amet nisl suscipit adipiscing bibendum est
        ultricies integer. Placerat duis ultricies lacus sed. Proin fermentum
        leo vel orci porta. Aliquet lectus proin nibh nisl condimentum id
        venenatis. Ornare suspendisse sed nisi lacus sed viverra. Dolor sed
        viverra ipsum nunc aliquet bibendum enim. Venenatis a condimentum vitae
        sapien. Proin fermentum leo vel orci porta non pulvinar. Aenean et
        tortor at risus viverra adipiscing at in tellus. Tincidunt lobortis
        feugiat vivamus at augue eget arcu. Leo a diam sollicitudin tempor id
        eu. Malesuada bibendum arcu vitae elementum. Et netus et malesuada fames
        ac turpis. Id consectetur purus ut faucibus. Eu non diam phasellus
        vestibulum lorem sed risus ultricies. Sem et tortor consequat id. In
        massa tempor nec feugiat nisl. Faucibus et molestie ac feugiat sed
        lectus vestibulum. Lectus quam id leo in vitae turpis. Duis ut diam quam
        nulla porttitor. Urna molestie at elementum eu facilisis sed odio. Eget
        nunc lobortis mattis aliquam faucibus purus in massa. Morbi tempus
        iaculis urna id volutpat lacus laoreet. Vestibulum morbi blandit cursus
        risus at ultrices mi tempus. Dui accumsan sit amet nulla facilisi morbi.
        Penatibus et magnis dis parturient montes nascetur ridiculus mus. Orci a
        scelerisque purus semper eget. Velit dignissim sodales ut eu. Semper
        viverra nam libero justo laoreet. Odio morbi quis commodo odio aenean
        sed adipiscing. Eu augue ut lectus arcu bibendum. Congue nisi vitae
        suscipit tellus mauris. Vitae semper quis lectus nulla. Elit ullamcorper
        dignissim cras tincidunt lobortis feugiat vivamus at augue. A diam
        sollicitudin tempor id eu nisl nunc mi. Aliquet porttitor lacus luctus
        accumsan tortor posuere ac ut. Consectetur purus ut faucibus pulvinar
        elementum.
      </p>
      <div className={styles.buttonWrapper}>
        <Button to="/successful-purchase" className={styles.acceptButton}>
          Accept purchase
        </Button>
        <Button to="/" className={styles.declineButton}>
          Decline purchase
        </Button>
      </div>
    </Box>
  );
};

export default ConfirmPurchase;
