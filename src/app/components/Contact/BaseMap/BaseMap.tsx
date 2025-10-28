

import styles from './BaseMap.module.scss'

export default function BaseMap() {

  return (
    <div> 
      <iframe
        title="Bergen op Zoom map"
        loading="lazy"
        src="https://www.google.com/maps/d/embed?mid=16DRLtVSswBIWbCHHTD8U-LauciNLsfE&ehbc=2E312F"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      />
    </div>
  );
}
