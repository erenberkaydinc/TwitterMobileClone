import React from 'react';
import Svg,{Path} from 'react-native-svg';

const NotificationIcon = () => {
    return(
        <Svg
        width={20}
        height={20}
        fill="none"
      
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2 8.518a10 10 0 001.381 5.07l.976 1.658a.5.5 0 01-.431.754h-4.689a4.507 4.507 0 01-1.255 2.432 4.503 4.503 0 01-6.364 0A4.501 4.501 0 015.563 16H.874a.5.5 0 01-.43-.754l.975-1.657A10 10 0 002.8 8.518V6.62C2.8 2.964 6.024 0 10 0s7.2 2.964 7.2 6.62v1.898zM4.3 6.62C4.3 3.909 6.731 1.5 10 1.5s5.7 2.409 5.7 5.12v1.898a11.5 11.5 0 001.588 5.832l.089.15H2.623l.088-.15A11.5 11.5 0 004.3 8.518V6.62zM7.095 16a3.007 3.007 0 00.784 1.371A2.999 2.999 0 0012.905 16h-5.81z"
        fill="#687684"
      />
    </Svg>
    );
}

export default NotificationIcon;