import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';


const styles = {
    div : {
        position: 'absolute',
        width: '300px',
        height: '200px',
        zIndex: 15,
        top: '50%',
        left: '50%',
        margin: '-100px 0 0 -150px',
    },

}

const LoadingProgress = () => (
  <div style={styles.div}>
    <CircularProgress size={160} thickness={10} />
  </div>
);

export default LoadingProgress;