import React, { useState, useEffect } from "react";
import Table from "../../components/table/Table";
import ProductDrawer from "../../components/ProductDrawer";
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
} from "../../assets/images/index";
import { useSelector } from "react-redux";
import { useGetEmployeesProductsQuery,useEmployeeRequestBudgetIncrementMutation,useAddNewOrderMutation } from "../../apis/companyManager/index";
import { globalFunctions } from "../../global-functions/GlobalFunctions";
import { tableStructureData } from "../../utils/TableStructureData";

const Index = () => {
  const { data, error, isLoading } = useGetEmployeesProductsQuery();
  const [addNewOrder, responseOrder] = useAddNewOrderMutation();
  const [budgetRequest, response] = useEmployeeRequestBudgetIncrementMutation();

  // only to show editable input
  const [inputBudgetRequest, setInputBudgetRequest] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [inputBudgetValue, setInputBudgetValue] = useState(0);
  console.log("data", data, "loading", isLoading);

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

  const openDrawer = (row) => {
    setShowDrawer(!showDrawer);
    console.log("row", row);
    setSelectedEmployee(row);
  };
  const addMoreProduct = (products) => {
    // debugger
    console.log("peoducts", products);
    let emp = selectedEmployee.slider.showProducts[0].products;
    const obj = { ...selectedEmployee };
    emp = [...emp, products];
    obj.slider.showProducts = [{ products: emp }];
    let updateCollection = tableData.filter(
      (val) => val.id != selectedEmployee.id
    );
    updateCollection.push(obj);

    setTableData([...updateCollection]);
  };
  const createOrder = (cartProducts) => {
    let orderData = orderBodyConvert(cartProducts);
    console.log("orer?", orderData);

      addNewOrder([orderData])
        .unwrap()
        .then((res) => {
          console.log("res", res);
          alert("Order created");
        })
        .catch((error) => {
          console.log(error);
          alert("error while creating order");
        });
   
  };
  const addItem = (row) => {
   orderBodyConvert(row);
   createOrder(row)
  
  };


  const updatedInput = (selectedInput) => {
    console.log("selected Input", selectedInput);
    setInputBudgetRequest(selectedInput);
  };

  const updateBudgetF = () => {
    if (inputBudgetRequest || inputBudgetRequest.value < 0) {
      const updatedBudget = {
        employeeId: inputBudgetRequest.inputId,
        requestAmount: inputBudgetRequest.value,
      }
      
      budgetRequest(updatedBudget)
        .unwrap()
        .then((res) => {
          console.log("res", res);
          alert("budget Request Fired ");
          // setComment("");
        })
        .catch((error) => {
          console.log(error);
          alert("error while updating budget");
        });
    } else {
      alert("There is issue with budget Input ");
    }
  };

  const orderBodyConvert = (cartProducts) => {
    console.log("order",cartProducts)
    debugger;
    const companyId = JSON.parse(localStorage.getItem("user"))?.result?.company;
   
      let total = cartProducts.slider.showProducts[0].products.map(
        (val) => val.productPrice
      );
      total = total.reduce(
        (previousScore, currentScore, index) => previousScore + currentScore,
        0
      );

      return {
        employeeId: cartProducts.id,
        products: cartProducts.slider.showProducts[0].products,
        id:cartProducts.slider.showProducts[0]._id,
        companyName: "ajjs",
        bill: total,
        quantity: 5,
        companyId: companyId,
        comment:"Employee Created Order By Himself",
      };
    };
  


  useEffect(() => {
    let getLocalStorageCartData = JSON.parse(localStorage.getItem("addToCart"));
    debugger
    if (data != undefined && data.length != 0) {
      let tableDataConvert = globalFunctions.employeeOrderBudgetFormatConverter(data);
      setTableData(tableDataConvert);
    }
  }, [data]);

  return (
    <div className="px-auto py-9" style={{ width: "80%", margin: "auto auto" }}>
      <h1 className=" py-3 mb-9 text-2xl font-semibold">Employee Panel</h1>

      <Table
        tableData={tableData}
        setTableData={setTableData}
        columns={tableStructureData.employeeOrderBudgetColumns}
        tableTitle="Create Order"
        openDrawer={openDrawer}
        addItem={addItem}
        inputBudgetValue={inputBudgetValue}
        setInputBudgetValue={setInputBudgetValue}
        setInputBudgetRequest={setInputBudgetRequest}
        updatedInput={updatedInput}
        updateBudgetF={updateBudgetF}
        
      />

      <ProductDrawer
        show={showDrawer}
        setShow={setShowDrawer}
        img={products}
        addMoreProduct={addMoreProduct}
      />
    </div>
  );
};

export default Index;
