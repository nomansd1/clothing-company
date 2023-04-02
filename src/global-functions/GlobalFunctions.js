export const tableDataFormatConverter = (data) => {
 
    let tableData=data.map((val,i)=>{return ({
      SNO: i + 1,
      id: val._id ,
      name: val.employeeName,
      budget:val.budget,
      slider: { showProducts: val.result, name: "Show Products" },
      action: { name: "Add Order", showProducts: [] },
    })});
    return tableData;
  };

  

  export const globalFunctions={
    tableDataFormatConverter
  }