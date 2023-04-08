import React, { useEffect, useState } from "react";
import { useGetEmployeesQuery } from "../../apis/companyManager/index";
import Table from "../../components/table/Table";
import { globalFunctions } from "../../global-functions/GlobalFunctions";
import { tableStructureData } from "../../utils/TableStructureData";
function EmployeesTab() {
  const { data, error, isLoading } = useGetEmployeesQuery();
  console.log("data----", data, "loading", isLoading);

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
      // console.log("get",getLocalStorageCartData)
      if (data != undefined && data.length !=0) {
        let tableDataConvert = globalFunctions.employeeTableDataFormatConverter(data);
        console.log(">>>>>>>>",tableDataConvert)
        setTableData(tableDataConvert);
      }
  }, [data]);

  return (
    <div>
      <Table
        tableData={tableData}
        setTableData={setTableData}
        columns={tableStructureData.employeeColumns}
        tableTitle="Employee Details"
      />
    </div>
  );
}

export default EmployeesTab;
