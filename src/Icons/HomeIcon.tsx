import React from 'react';
import Svg,{Path} from 'react-native-svg';

const HomeIcon = () => {
    return(
        <Svg
      width={24}
      height={21}
      fill="none"
      
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.954 7.033l-1.082.618a.75.75 0 01-.744-1.302L10.636.916a2.75 2.75 0 012.728 0l9.508 5.433a.75.75 0 01-.744 1.302l-1.082-.618-1.446 10.48a3.75 3.75 0 01-3.715 3.237h-7.77A3.75 3.75 0 014.4 17.512L2.954 7.032zM12 14a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
        fill="#4C9EEB"
      />
    </Svg>
    );
}

export default HomeIcon;