export const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: "auto auto",
    maxWidth: 1200,
    border: "1px solid blue",
    height: "100vh",
    backgroundColor: "#E0F4F4"
  },

  totalContainer: {
    border: "1px solid red",
    width: "100%",
    margin: "50px",
    padding: 20
  },

  grid: {
    display: "flex",
    alignItems: "center",
    border: "1px solid orange",
    textAlign: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main
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
    color: theme.palette.primary.main
  },

  costPer: {
    backgroundColor: "#1DC090"
  },

  totalCost: {
    backgroundColor: "#AF74E3"
  },

  cost: {
    fontSize: 30,
    color: "white"
  },

  unitForm: {
    padding: "0 20px"
  },

  unitTitle: {
    color: "#819B9B",
    fontSize: 14
  },

  input: {
    backgroundColor: "white",
    width: "50px"
  },

  addSubtract: {
    color: "#819B9B",
    "&:hover": {
      cursor: "pointer"
    }
  },

  resize: {
    fontSize: "20px",
    textAlign: "center",
    padding: "0"
  }
});
