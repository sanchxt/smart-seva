import { useSelector } from "react-redux";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const columns = ["Medicine", "Frequency", "Time", "How"];

const PrescriptionTable = () => {
  const { currentUser } = useSelector((state: any) => state.user);

  const data = [
    ["Adderall", "2 / day", "10 A.M., 8 P.M.", "After Food"],
    ["Amoxicillin", "1 / day", "8 A.M.", "Before Food"],
    ["Methadone", "1 / day", "8 P.M.", "After Food"],
    ["Cephalexin", "1 / day", "5 P.M.", "After Food"],
  ];

  const options = {
    // filterType: "checkbox",
    selectableRows: "none",
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20],
  };

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: "Montserrat",
      },
      palette: {
        background: {
          paper: "#F0F8FF",
          default: "#F0FFFF",
        },
        mode: "light",
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: "10px 4px",
            },
            body: {
              padding: "15px",
              color: "#000",
            },
            footer: {},
          },
        },
      },
    });

  return (
    <>
      {currentUser.currentPrescription !== "" ? (
        <div className="bg-white py-10 min-h-screen w-screen grid place-items-center">
          <div className="w-10/12 max-w-4xl text-center text-white">
            <ThemeProvider theme={getMuiTheme}>
              <MUIDataTable
                title={"Your Prescription"}
                data={data}
                columns={columns}
                options={options}
              />
            </ThemeProvider>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PrescriptionTable;
