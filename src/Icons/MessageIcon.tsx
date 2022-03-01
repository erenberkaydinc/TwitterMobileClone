import React from 'react';
import Svg,{Path} from 'react-native-svg';

const MessageIcon = () => {
    return(
        <Svg
        width={20}
        height={18}
        fill="none"
      
      
    >
      <Path
       fillRule="evenodd"
       clipRule="evenodd"
       d="M0 2a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm2-.5h16a.5.5 0 01.5.5v.932l-8.361 5.574a.25.25 0 01-.278 0L1.5 2.932V2a.5.5 0 01.5-.5zm-.5 3.235V16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5V4.735l-7.53 5.02a1.75 1.75 0 01-1.94 0L1.5 4.734z"
       fill="#687684"
      />
    </Svg>
    );
}

export default MessageIcon;