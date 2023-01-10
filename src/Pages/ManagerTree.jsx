import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Loader from "../Components/Loader";
import MakeTree from "../Pages/MakeTree";

const ManagerTree = () => {
  const [loading, setLoading] = useState(false);
  const [employeeTree, setEmployeeTree] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await axios.get(
        "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees"
      );
      const arr = data.data;
      const ans = new Map();
      const allManager = [];
      arr.map((row) => {
        let managerId = `${row.manager_id}`;
        if (managerId !== "") {
          if (ans[managerId] === undefined) {
            ans[managerId] = [row.id];
          } else {
            let num = ans[managerId];
            num.push(row.id);
          }
        } else {
          allManager.push(row.id);
        }
      });
      // console.log(ans);
      setEmployeeTree(ans);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            height: "80vh",
            flexGrow: 1,
            maxWidth: 500,
            overflowY: "auto",
            margin: "auto",
          }}
        >
          <MakeTree employee={employeeTree} employeeId={"EMP001"} />
        </Box>
      )}
    </>
  );
};
export default ManagerTree;
