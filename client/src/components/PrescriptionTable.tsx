import { useSelector } from "react-redux";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";

const PrescriptionTable = () => {
  const { currentUser } = useSelector((state: any) => state.user);
  const [data, setData] = useState([]);

  const columns = ["Medicine", "Frequency", "Time", "How"];

  useEffect(() => {
    if (currentUser) {
      const formattedData = currentUser.medicine.map(
        (medicine: any, index: any) => [
          medicine,
          `${currentUser.frequency[index]} / day` || "(N.A.)",
          `${currentUser.time[index]} ${
            currentUser.AM[index] === true ? "A.M" : "P.M."
          }` || "(N.A.)",
          currentUser.how[index] || "(N.A.)",
        ]
      );
      setData(formattedData);
    } else {
      setData([]);
    }
  }, [currentUser]);

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
        <div className="flex justify-center items-center mx-auto">
          <h1 className="text-2xl lg:text-4xl font-light tracking-widest border-2 shadow-lg rounded-lg lg:rounded-2xl p-5 lg:p-10">
            Nothing to see here
          </h1>
        </div>
      )}
    </>
  );
};

export default PrescriptionTable;
