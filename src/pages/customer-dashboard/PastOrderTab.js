import React, { useState, useEffect } from "react";
import { useGetOrdersQuery} from "../../apis/companyManager/index";
import Table from "../../components/table/Table";
import { globalFunctions } from "../../global-functions/GlobalFunctions";
import { tableStructureData } from "../../utils/TableStructureData";

function PastOrderTab() {
  const { data, error, isLoading } = useGetOrdersQuery();
  console.log("data----", data, "loading", isLoading);

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    // console.log("get",getLocalStorageCartData)
    if (data != undefined) {
      let tableDataConvert =
        globalFunctions.orderTableDataFormatConverter(data);
      console.log("past orders", tableDataConvert);
      setTableData(tableDataConvert);
    }
  }, [data]);

  return (
    <div>
      <Table
        tableData={tableData}
        setTableData={setTableData}
        columns={tableStructureData.orderColumns}
        tableTitle="Order Details"
        hideButtons={false}
      ></Table>
    </div>
  );
}

export default PastOrderTab;
