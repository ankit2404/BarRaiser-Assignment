import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Loader from "../Components/Loader";

const Home = () => {
  const [employeData, setEmployeData] = useState(null);
  const [orignalData, setOrignalData] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState("");
  const [loading, setLoading] = useState(false);
  const columns = [
    { id: "id", label: "Employee Id", minWidth: 80 },
    { id: "first_name", label: "First Name", minWidth: 100 },
    { id: "last_name", label: "Last Name", minWidth: 100 },
    { id: "date_of_birth", label: "Date of Birth", minWidth: 100 },
    { id: "address", label: "Address", minWidth: 100 },
    { id: "date_of_joining", label: "Date of Joining", minWidth: 100 },
    { id: "salary", label: "Salary", minWidth: 100 },
    { id: "designation", label: "Designation", minWidth: 100 },
  ];
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await axios.get(
        "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees"
      );
      setEmployeData(data.data);
      setOrignalData(data.data);
      setLoading(false);
    };
    getData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
    const prod = orignalData.filter((emp) =>
      emp.first_name?.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setEmployeData(prod);
  };
  const dropdown = (event) => {
    setSalary(event.target.value);
    const listData = [...orignalData];
    const prod = listData.filter((emp) => {
      const newSalary = parseInt(emp.salary?.split(",").join(""));
      return event.target.value === 300000
        ? newSalary <= parseInt(event.target.value)
        : event.target.value === 1300000
        ? newSalary > 1100000
        : newSalary <= parseInt(event.target.value) &&
          newSalary > parseInt(event.target.value) - 200000;
    });
    console.log(prod);
    setEmployeData(prod);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Paper sx={{ width: "90%", overflow: "hidden", margin: "auto" }}>
          <TableContainer sx={{ maxHeight: "80vh" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <TextField
                id="filled-multiline-flexible"
                label="First Name"
                maxRows={4}
                value={searchText}
                onChange={handleChange}
                variant="filled"
                style={{
                  marginLeft: "25px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              />
              <h2>Bar Raiser</h2>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  marginRight: "25px",
                  marginTop: "18px",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small">Salary</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={salary}
                  label="Age"
                  onChange={dropdown}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={300000}> Less or equal to 300000</MenuItem>
                  <MenuItem value={500000}> Between 300000 to 500000</MenuItem>
                  <MenuItem value={700000}> Between 500000 to 700000</MenuItem>
                  <MenuItem value={900000}> Between 700000 to 900000</MenuItem>
                  <MenuItem value={1100000}>Between 900000 to 1100000</MenuItem>
                  <MenuItem value={1300000}> More then 1100000</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {employeData &&
                  employeData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          <TableCell>
                            <Link
                              to={`/employee/${row.id}`}
                              style={{ textDecoration: "none", color: "blue" }}
                            >
                              {row.id}
                            </Link>
                          </TableCell>
                          <TableCell>{row.first_name}</TableCell>
                          <TableCell>{row.last_name}</TableCell>
                          <TableCell>{row.date_of_birth}</TableCell>
                          <TableCell>{row.address}</TableCell>
                          <TableCell>{row.date_of_joining}</TableCell>
                          <TableCell>{row.salary}</TableCell>
                          <TableCell>{row.designation}</TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={employeData?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
};
export default Home;
