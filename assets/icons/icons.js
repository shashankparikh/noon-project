import Svg, { Path } from "react-native-svg";

export const SearchIcon = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.075 11.264a8.56 8.56 0 01-8.561 8.56 8.56 8.56 0 01-8.561-8.56 8.56 8.56 0 018.56-8.561c3.13 0 5.869 1.68 7.362 4.187M18.726 19.886a1.411 1.411 0 111.41 1.411"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
