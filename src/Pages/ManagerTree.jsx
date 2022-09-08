import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import axios from "axios";
import Loader from "../Components/Loader";

const ManagerTree = () => {
  const [expanded, setExpanded] = useState([]);
  const [loading, setLoading] = useState(false);
  //   var queue = [];
  //   queue.push(0);
  //   queue.push(1);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ["1", "5", "6", "7"] : []
    );
  };

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
          <Box sx={{ mb: 1 }}>
            <Button onClick={handleExpandClick}>
              {expanded.length === 0 ? "Expand all" : "Collapse all"}
            </Button>
          </Box>
          <TreeView
            aria-label="controlled"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            expanded={expanded}
            onNodeToggle={handleToggle}
            multiSelect
          >
            <TreeItem nodeId="1" label="EMP001">
              <TreeItem nodeId="2" label="EMP002">
                <TreeItem nodeId="4" label="EMP004">
                  <TreeItem nodeId="11" label="EMP011">
                    <TreeItem nodeId="20" label="EMP020">
                      <TreeItem nodeId="52" label="EMP052" />
                      <TreeItem nodeId="84" label="EMP084" />
                    </TreeItem>
                    <TreeItem nodeId="29" label="EMP029">
                      <TreeItem nodeId="61" label="EMP061" />
                      <TreeItem nodeId="93" label="EMP093" />
                    </TreeItem>
                    <TreeItem nodeId="38" label="EMP038">
                      <TreeItem nodeId="70" label="EMP070" />
                      <TreeItem nodeId="102" label="EMP102" />
                    </TreeItem>
                    <TreeItem nodeId="47" label="EMP047">
                      <TreeItem nodeId="79" label="EMP079" />
                    </TreeItem>
                  </TreeItem>
                  <TreeItem nodeId="12" label="EMP012">
                    <TreeItem nodeId="21" label="EMP021">
                      <TreeItem nodeId="53" label="EMP053" />
                      <TreeItem nodeId="85" label="EMP085" />
                    </TreeItem>
                    <TreeItem nodeId="30" label="EMP030">
                      <TreeItem nodeId="62" label="EMP062" />
                      <TreeItem nodeId="94" label="EMP094" />
                    </TreeItem>
                    <TreeItem nodeId="39" label="EMP039">
                      <TreeItem nodeId="71" label="EMP071" />
                      <TreeItem nodeId="103" label="EMP103" />
                    </TreeItem>
                    <TreeItem nodeId="48" label="EMP048">
                      <TreeItem nodeId="80" label="EMP080" />
                    </TreeItem>
                  </TreeItem>
                </TreeItem>
                <TreeItem nodeId="5" label="EMP005">
                  <TreeItem nodeId="13" label="EMP013">
                    <TreeItem nodeId="22" label="EMP022">
                      <TreeItem nodeId="54" label="EMP054" />
                      <TreeItem nodeId="86" label="EMP086" />
                    </TreeItem>
                    <TreeItem nodeId="31" label="EMP031">
                      <TreeItem nodeId="63" label="EMP063" />
                      <TreeItem nodeId="95" label="EMP095" />
                    </TreeItem>
                    <TreeItem nodeId="40" label="EMP040">
                      <TreeItem nodeId="72" label="EMP072" />
                      <TreeItem nodeId="104" label="EMP104" />
                    </TreeItem>
                    <TreeItem nodeId="49" label="EMP049">
                      <TreeItem nodeId="81" label="EMP081" />
                    </TreeItem>
                  </TreeItem>
                  <TreeItem nodeId="14" label="EMP014">
                    <TreeItem nodeId="23" label="EMP023">
                      <TreeItem nodeId="55" label="EMP055" />
                      <TreeItem nodeId="87" label="EMP087" />
                    </TreeItem>
                    <TreeItem nodeId="32" label="EMP032">
                      <TreeItem nodeId="64" label="EMP064" />
                      <TreeItem nodeId="96" label="EMP096" />
                    </TreeItem>
                    <TreeItem nodeId="41" label="EMP041">
                      <TreeItem nodeId="73" label="EMP073" />
                      <TreeItem nodeId="105" label="EMP105" />
                    </TreeItem>
                    <TreeItem nodeId="50" label="EMP050">
                      <TreeItem nodeId="82" label="EMP082" />
                    </TreeItem>
                  </TreeItem>
                </TreeItem>
                <TreeItem nodeId="6" label="EMP006">
                  <TreeItem nodeId="15" label="EMP015">
                    <TreeItem nodeId="24" label="EMP024">
                      <TreeItem nodeId="56" label="EMP056" />
                      <TreeItem nodeId="88" label="EMP088" />
                    </TreeItem>
                    <TreeItem nodeId="33" label="EMP033">
                      <TreeItem nodeId="65" label="EMP065" />
                      <TreeItem nodeId="97" label="EMP097" />
                    </TreeItem>
                    <TreeItem nodeId="42" label="EMP042">
                      <TreeItem nodeId="74" label="EMP074" />
                      <TreeItem nodeId="106" label="EMP106" />
                    </TreeItem>
                    <TreeItem nodeId="51" label="EMP051">
                      <TreeItem nodeId="83" label="EMP083" />
                    </TreeItem>
                  </TreeItem>
                  <TreeItem nodeId="16" label="EMP016">
                    <TreeItem nodeId="25" label="EMP025">
                      <TreeItem nodeId="57" label="EMP057" />
                      <TreeItem nodeId="89" label="EMP089" />
                    </TreeItem>
                    <TreeItem nodeId="34" label="EMP034">
                      <TreeItem nodeId="66" label="EMP066" />
                      <TreeItem nodeId="98" label="EMP098" />
                    </TreeItem>
                    <TreeItem nodeId="43" label="EMP043">
                      <TreeItem nodeId="75" label="EMP075" />
                    </TreeItem>
                  </TreeItem>
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="3" label="EMP003">
                <TreeItem nodeId="7" label="EMP007">
                  <TreeItem nodeId="17" label="EMP017">
                    <TreeItem nodeId="26" label="EMP026">
                      <TreeItem nodeId="58" label="EMP058" />
                      <TreeItem nodeId="90" label="EMP090" />
                    </TreeItem>
                    <TreeItem nodeId="35" label="EMP035">
                      <TreeItem nodeId="67" label="EMP067" />
                      <TreeItem nodeId="99" label="EMP099" />
                    </TreeItem>
                    <TreeItem nodeId="44" label="EMP044">
                      <TreeItem nodeId="76" label="EMP076" />
                    </TreeItem>
                  </TreeItem>
                  <TreeItem nodeId="18" label="EMP018">
                    <TreeItem nodeId="27" label="EMP027">
                      <TreeItem nodeId="59" label="EMP059" />
                      <TreeItem nodeId="91" label="EMP091" />
                    </TreeItem>
                    <TreeItem nodeId="36" label="EMP036">
                      <TreeItem nodeId="68" label="EMP068" />
                      <TreeItem nodeId="100" label="EMP100" />
                    </TreeItem>
                    <TreeItem nodeId="45" label="EMP045">
                      <TreeItem nodeId="77" label="EMP077" />
                    </TreeItem>
                  </TreeItem>
                </TreeItem>
                <TreeItem nodeId="8" label="EMP008">
                  <TreeItem nodeId="19" label="EMP019">
                    <TreeItem nodeId="28" label="EMP028">
                      <TreeItem nodeId="60" label="EMP060" />
                      <TreeItem nodeId="92" label="EMP092" />
                    </TreeItem>
                    <TreeItem nodeId="37" label="EMP037">
                      <TreeItem nodeId="69" label="EMP069" />
                      <TreeItem nodeId="101" label="EMP101" />
                    </TreeItem>
                    <TreeItem nodeId="46" label="EMP046">
                      <TreeItem nodeId="78" label="EMP078" />
                    </TreeItem>
                  </TreeItem>
                </TreeItem>
                <TreeItem nodeId="9" label="EMP009" />
                <TreeItem nodeId="10" label="EMP010" />
              </TreeItem>
            </TreeItem>
          </TreeView>
        </Box>
      )}
    </>
  );
};
export default ManagerTree;
