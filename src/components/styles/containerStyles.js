export const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: "auto auto",
    maxWidth: 1200,
    border: "1px solid blue",
    height: "100vh",
    backgroundColor: "#E0F4F4",
    justifyContent: "center"
  },

  totalContainer: {
    border: "1px solid red",
    width: "680px",
    margin: "50px",
    padding: 20,
    margin: "163px",
    padding: "140px 40px"
  },

  grid: {
    display: "flex",
    alignItems: "center",
    border: "1px solid orange",
    textAlign: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
    padding: "62px 0"
  },

  costContainer: {
    width: "160px"
  },

  inputFormAddSub: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center"
  },

  title: {
    fontSize: 14,
    color: theme.palette.primary.main,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 8,
    marginTop: 10
  },

  costPer: {
    backgroundColor: "#1DC090"
  },

  totalCost: {
    backgroundColor: "#AF74E3"
  },

  cost: {
    fontSize: 30,
    color: "white",
    textAlign: "left",
    paddingLeft: 7
  },

  unitForm: {
    padding: "0 18px",
    marginTop: "5px"
  },

  unitTitle: {
    color: "#819B9B",
    fontSize: 14,
    fontWeight: "bold"
  },

  input: {
    backgroundColor: "white",
    width: "50px"
  },

  addSubtract: {
    color: "#819B9B",
    fontSize: "40px",
    "&:hover": {
      cursor: "pointer"
    }
  },

  resize: {
    fontSize: "20px",
    textAlign: "center",
    padding: "6px"
  }
});
