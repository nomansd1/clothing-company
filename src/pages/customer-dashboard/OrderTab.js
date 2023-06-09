import React, { useState, useEffect } from "react";
import Table from "../../components/table/Table";
import { tableStructureData } from "../../utils/TableStructureData";
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
import { useSelector, useDispatch } from "react-redux";
import {
  useGetEmployeesProductsQuery,
  useUpdateBudgetMutation,
} from "../../apis/companyManager/index";
import { globalFunctions } from "../../global-functions/GlobalFunctions";
import { showPopup, errorPopup } from "../../redux-slice/UserSliceAuth";


const Index = () => {
  const { data, error, isLoading } = useGetEmployeesProductsQuery();
  console.log("data",data)
  const [budgetUpdate, response] = useUpdateBudgetMutation();
  const dispatch = useDispatch();

  const [tableData, setTableData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [inputBudgetRequest, setInputBudgetRequest] = useState(false);

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

  const updatedInput = (selectedInput) => {
    console.log("selected Input", selectedInput);
    setInputBudgetRequest(selectedInput);
  };

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

  const addItem = (row) => {
    let cartItems = [];

    let getLocalStorageCartData = JSON.parse(localStorage.getItem("addToCart"));

    let totalBilled = row.slider.showProducts[0].products.map(
      (val) => val.productPrice
    );
    totalBilled = totalBilled.reduce(
      (previousScore, currentScore, index) => previousScore + currentScore,
      0
    );
    console.log("totl", totalBilled);
    let cartItemObj;
    if (totalBilled <= row.budget) {
      if (
        getLocalStorageCartData != undefined ||
        getLocalStorageCartData != null
      ) {
        let filterData = getLocalStorageCartData.filter(
          (val) => val.id != row.id
        );
        cartItemObj={...row,totalBilled}
        console.log("cart ",cartItemObj)
        filterData.push(cartItemObj);
        localStorage.setItem("addToCart", JSON.stringify(filterData));
      } else {
        cartItemObj={...row,totalBilled:totalBilled}
        cartItems.push(cartItemObj);
        console.log("cart ",cartItemObj)
        localStorage.setItem("addToCart", JSON.stringify(cartItems));
      }
    dispatch(showPopup({ state: true, message: "Product added in cart" }));

    } else {
      dispatch(errorPopup({ state: true, message: "budget is not enough" }));
    }
  };

  const budgetDecisionF = () => {
    if (inputBudgetRequest || inputBudgetRequest.value < 0) {
      const updatedBudget = {
        employeeId: inputBudgetRequest.inputId,
        changeBudgetAmount: inputBudgetRequest.value,
      };
      budgetUpdate(updatedBudget)
        .unwrap()
        .then((res) => {
          console.log("res", res);

          dispatch(
            showPopup({ state: true, message: "Budget Sucesssfully Increased" })
          );
          // setComment("");
        })
        .catch((error) => {
          dispatch(
            errorPopup({
              state: true,
              message: "please refresh page and try again",
            })
          );
        });
    } else {
      dispatch(
        errorPopup({
          state: true,
          message: "budget input should be positive value",
        })
      );
    }
  };

  useEffect(() => {
    let getLocalStorageCartData = JSON.parse(localStorage.getItem("addToCart"));
    // console.log("get",getLocalStorageCartData)
    if (data != undefined && data.length != 0) {
      let tableDataConvert = globalFunctions.tableDataFormatConverter(data);
      console.log(">>table", tableDataConvert);
      setTableData(tableDataConvert);
    }
  }, [data]);

  return (
    <>
      <Table
        tableData={tableData}
        setTableData={setTableData}
        columns={tableStructureData.columns}
        tableTitle="Create Order"
        openDrawer={openDrawer}
        addItem={addItem}
        inputBudgetRequest={inputBudgetRequest}
        setInputBudgetRequest={setInputBudgetRequest}
        updatedInput={updatedInput}
        updateBudgetF={budgetDecisionF}
      />
      <ProductDrawer
        show={showDrawer}
        setShow={setShowDrawer}
        img={products}
        addMoreProduct={addMoreProduct}
      />
    </>
  );
};

export default Index;
