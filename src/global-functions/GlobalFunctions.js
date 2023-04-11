export const tableDataFormatConverter = (data) => {
  let tableData = data.map((val, i) => {
    return {
      SNO: i + 1,
      id: val._id,
      name: val.employeeName,
      budget: val.budget,
      slider: { showProducts: val.result, name: "Show Products" },
      action: { name: "Add Order", showProducts: [] },
    };
  });
  return tableData;
};

export const employeeTableDataFormatConverter = (data) => {
  debugger
  let tableData = data[0]?.result.map((val, i) => {
    return {
      SNO: i + 1,
      id: val._id,
      name: val.employeeName,
      email: val.employeeEmail,
      gender: val.gender,
      budget: val.budget,
    };
  });
  return tableData;
};

export const orderTableDataFormatConverter = (data) => {
  debugger;

  let tableData = data[0].orders.map((val, i) => {
    console.log("val",val.products)
    return {
      SNO: i + 1,
      id: val._id,
      name: data[0].employees.filter(vals=>vals._id==val.employeeId)[0].employeeName,
      slider: {
        showProducts: [{ products: val.products }],
        name: "Show Products",
      },
      bill: val.bill,
      // budget: budget,
    };
  });
  return tableData;
};

export const budgetRequestTableDataFormatConverter = (datas) => {
  // debugger;
  const statusF = (status) => {
    if (status == 0) {
      return "pending";
    } else if (status == 1) {
      return "approved";
    } else {
      return "rejected";
    }
  };
  const statusResult = (status) => {
    if (status == 0 || status == 1) {
      return false;
    } else {
      return true;
    }
  };
  let tableData = datas.map((data, i) => {
    return {
      SNO: i + 1,
      id: data._id,
      employeeId:data.employeeId,
      name: data.result[0].employeeName,
      requestAmount: data.requestAmount,
      budget: data.result[0].budget,
      allocateBudget: {value:`0`,showBtn:false},
      status: statusF(data.status),
      select: {result:statusResult(data.status)},
      action: { name: "Save" },
    };
  });
  return tableData;
};



export const employeeOrderBudgetFormatConverter = (data) => {
  let tableData = data?.map((val, i) => {
    return {
      SNO: i + 1,
      id: val._id,
      name: val.employeeName,
      budget: val.budget,
      allocateBudget: {value:`${0}`,showBtn:true},
      slider: { showProducts: val?.products[0].products,productId:val.products[0]._id, name: "Show Products" },
      action: { name: "Add Order", showProducts: [] },
    };
  });
  return tableData;
};


export const globalFunctions = {
  tableDataFormatConverter,
  employeeTableDataFormatConverter,
  orderTableDataFormatConverter,
  budgetRequestTableDataFormatConverter,
  employeeOrderBudgetFormatConverter
};
