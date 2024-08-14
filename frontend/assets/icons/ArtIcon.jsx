import React from 'react';
import Svg, { Path, G, ClipPath, Defs, Rect } from 'react-native-svg';

const ArtIcon = (props) => (
    <Svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0)">
            <Path
                d="M12.2106 11.4332C13.9 11.4034 14.2718 9.07928 12.6776 8.52579L10.8369 10.5221C11.0666 11.0629 11.6081 11.4332 12.2106 11.4332Z"
                fill="white"
            />
            <Path
                d="M17.6622 8.41718C17.4256 6.99741 16.7604 5.90157 15.7276 5.21732C15.2465 5.73946 13.9211 7.17635 13.4209 7.71907C14.2257 8.15526 14.7409 8.99992 14.7409 9.94228C14.7465 12.1264 12.1109 13.2863 10.5048 11.8114C10.3517 12.1502 10.1369 12.462 9.86627 12.7326C8.79382 13.8953 5.47183 14.1764 4.05378 14.1351C4.01235 12.7135 4.29457 9.39311 5.45627 8.3226C6.04902 7.73016 6.82231 7.42632 7.6008 7.41142C8.45273 6.6232 9.63414 5.52996 10.4826 4.74476C9.30407 5.05532 7.57783 5.87753 7.05132 5.10126C6.80492 4.51973 7.92511 3.16845 7.04127 2.03443C6.31694 1.12495 4.69584 1.29579 3.77974 1.94193C-0.680668 5.02154 -1.27709 11.7877 2.61679 15.5517C7.3836 20.3552 15.6989 18.179 17.5257 11.6697C17.6249 11.26 17.9088 9.91699 17.6622 8.41718Z"
                fill="white"
            />
            <Path
                d="M9.86618 8.32251C10.1558 8.61214 10.3814 8.94855 10.5359 9.31476C11.1259 8.67579 14.2409 5.29615 14.7581 4.73565L17.5239 1.73604C17.826 1.4083 17.834 0.923258 17.5422 0.631196C17.2498 0.339134 16.7641 0.347449 16.4364 0.650598L12.3915 4.39405C11.5132 5.20659 9.76633 6.82384 8.87012 7.65316C9.23251 7.8049 9.57169 8.02802 9.86618 8.32251Z"
                fill="white"
            />
            <Path
                d="M8.5764 8.66034C7.78728 8.27633 6.831 8.41897 6.19106 9.05669C5.53009 9.64109 5.15481 11.8652 5.1167 13.0714C6.32645 13.0321 8.54515 12.659 9.13108 11.997C9.52396 11.6042 9.74015 11.0821 9.74015 10.527C9.74004 9.97126 9.52361 9.44912 9.13108 9.05704V9.05669C8.96478 8.89004 8.777 8.75804 8.5764 8.66034Z"
                fill="white"
            />
        </G>
        <Defs>
            <ClipPath id="clip0">
                <Rect
                    width="17.7335"
                    height="17.7335"
                    fill="white"
                    transform="translate(0.0288086 0.417686)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export default ArtIcon;
