import React from "react";
import TreeItem from "@mui/lab/TreeItem";
import { v4 as uuidv4 } from "uuid";
const MakeTree = ({ employee }) => {
  return (
    <>
      {Object.keys(employee)?.map((emp, res) => {
        return (
          <>
            <TreeItem nodeId={uuidv4()} label={emp}>
              {employee[emp]?.map((child) => (
                <MakeTree employee={child} />
              ))}
            </TreeItem>
          </>
        );
      })}
    </>
  );
};

export default MakeTree;
