import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
import { iconStyle } from "../../../globalStyle";

export const { SearchAltIcon } = {
  SearchAltIcon: ({ size, color, max, min, custom, onClick }) => (
    <SearchAlt
      style={iconStyle(size || 1.2, color, max, min, custom)}
      onClick={onClick}
    />
  ),
};
