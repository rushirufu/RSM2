//  Internally, customStyles will deep merges your customStyles with the default styling.
export const customStyles = {
  header: {
    style: {
      fontFamily: "Inter",
      fontSize: "16px",
      paddingLeft: "0px", // override the cell padding for data cells
      fontWeight: "900",
      color: "black",
    },
  },
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      fontSize: "14px",
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontWeight: "900",
      fontFamily: "Inter",
      color: "black",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      fontSize: "14px",
      fontFamily: "Inter",
    },
  },
};
