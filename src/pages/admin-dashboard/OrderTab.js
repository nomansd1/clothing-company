import React, { useState, useEffect } from "react";
import { useGetEmployeesQuery } from "../../apis/companyManager/index";
import Table from "../../components/table/Table";
import { globalFunctions } from "../../global-functions/GlobalFunctions";
import { tableStructureData } from "../../utils/TableStructureData";
function OrderTab() {
  const { data, error, isLoading } = useGetEmployeesQuery();
  console.log("data----", data, "loading", isLoading);

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    // console.log("get",getLocalStorageCartData)
    if (data != undefined) {
      let tableDataConvert =
        globalFunctions.employeeTableDataFormatConverter(data);
      console.log(">>>>>>>>", tableDataConvert);
      setTableData(tableDataConvert);
    }
  }, [data]);

  return (
    <div>
      <Table
        tableData={tableData}
        setTableData={setTableData}
        columns={tableStructureData.employeeColumns}
        tableTitle="Order Details"
      ></Table>
    </div>
  );
}

export default OrderTab;
