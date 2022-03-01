import React from 'react';
import Svg,{Path} from 'react-native-svg';

const SearchIcon = () => {
    return(
        <Svg
        width={20}
        height={21}
        fill="none"
      
      
    >
      <Path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M14.812 16.372a9 9 0 111.06-1.06l3.658 3.658a.75.75 0 11-1.06 1.06l-3.658-3.658zM16.5 9.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
         fill="#687684"
      />
    </Svg>
    );
}

export default SearchIcon;