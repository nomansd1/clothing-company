import React, { useState,useEffect } from "react";
import Table from "../components/table/Table";
import { tableStructureData } from "../utils/TableStructureData";
import ProductDrawer from "../components/ProductDrawer";
import {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
} from "../assets/images/index";
import { useSelector } from "react-redux";
import { useGetEmployeesProductsQuery } from "../apis/companyManager/index";
import { globalFunctions } from "../global-functions/GlobalFunctions";

const Index = () => {
  const { data, error, isLoading } = useGetEmployeesProductsQuery();
  console.log("data", data, "loading", isLoading);
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Syed Noman Ali",
      dressImg:
        "https://spng.pngfind.com/pngs/s/124-1245916_a-black-t-shirt-black-shirt-hd-png.png",
      budget: 100,
      slider: "Show Products",
      action: "Add Order",
    },
    {
      id: 2,
      name: "Syed Hasnain Askari",
      dressSize: 18,
      dressImg:
        "https://spng.pngfind.com/pngs/s/124-1245916_a-black-t-shirt-black-shirt-hd-png.png",
      budget: 400,
      slider: "Show Products",

      action: "Add Order",
    },
  ]);
  const [showDrawer, setShowDrawer] = useState(false);
  const products = [
    { id: 1, src: p1 },
    { id: 2, src: p2 },
    { id: 3, src: p3 },
    { id: 4, src: p4 },
    { id: 5, src: p5 },
    { id: 6, src: p6 },
    { id: 7, src: p7 },
    { id: 8, src: p8 },
    { id: 9, src: p9 },
    { id: 10, src: p10 },
    { id: 11, src: p11 },
  ];

  const value = useSelector((val) => val);
  console.log("value", value);

  const Drawer = (
    <ProductDrawer show={showDrawer} setShow={setShowDrawer} img={products} />
  );

  const openDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  useEffect(() => {
    if (data != undefined) {
     let tableDataConvert= globalFunctions.tableDataFormatConverter(data);
     setTableData(tableDataConvert)
    }
  }, [data]);

  return (
    <div style={{ padding: "7rem 6rem" }}>
      <Table
        tableData={tableData}
        setTableData={setTableData}
        columns={tableStructureData.columns}
        tableTitle="Order Table"
        openDrawer={openDrawer}
      />
      {Drawer}
    </div>
  );
};

export default Index;
