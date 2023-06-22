import { useState } from "react";
import Loader from "../Components/Loader";

const EmployeeNode = ({ employee, employeeId }) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [children, setChildren] = useState(null);
  const [loading, setLoading] = useState(false);
  const clickHandler = (e) => {
    setLoading(true);
    var ans = [];
    Object.keys(employee)?.map((emp, res) => {
      if (emp === employeeId) {
        ans = employee[emp];
      }
    });
    setChildren(ans);
    if (ans.length > 0) {
      setIsDisplay(true);
    } else {
      setIsDisplay(false);
    }
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <button onClick={() => clickHandler()} style={{ marginLeft: "25px" }}>
            {employeeId}
          </button>

          {isDisplay && (
            <div style={{ paddingLeft: "25px" }}>
              {children.map((child) => {
                return <EmployeeNode employee={employee} employeeId={child} />;
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EmployeeNode;
