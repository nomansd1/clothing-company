const columns = [
  { label: "S.N.O", type: "name" },
  { label: "Employee", type: "name" },
  { label: "Products", type: "slider" },
  { label: "Budget", type: "name" },
  { label: "More Products", type: "action" },
  { label: "Add Items", type: "action" },
];

const employeeOrderBudgetColumns = [
  { label: "S.N.O", type: "name" },
  { label: "Employee", type: "name" },
  { label: "Products", type: "slider" },
  { label: "Budget", type: "name" },
  { label: "Allocate Budget",type:"input"},
  { label: "Products", type: "action" },
  { label: "Add Items", type: "action" },
];
const employeeColumns = [
  { label: "S.N.O", type: "name" },
  { label: "Employee", type: "name" },
  { label: "Email", type: "name" },
  { label: "Gender", type: "name" },
  { label: "Budget", type: "name" },
];

const orderColumns = [
  { label: "S.N.O", type: "name" },
  { label: "Employee", type: "name" },
  { label: "Products", type: "slider" },
  { label: "Bill", type: "name" },

];

const budgetRequestColumns = [
  { label: "S.N.O", type: "name" },
  { label: "Employee", type: "name" },
  { label: "Request Amount", type: "name" },
  { label: "Current Budget", type: "name" },
  // { label: "Approved Amount", type: "name" },
  {label:"Allocate Budget",type:"input"},
  {label:"Request Status",type:"name"},
  { label: "select",type:"input"},
  // {label:"Result",type:"checkbox",result:"result"},
  { label: "Action", type: "action" },
];

let sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
}

export const tableStructureData = {
  columns,
  sliderSettings,
  employeeColumns,
  orderColumns,
  budgetRequestColumns,
  employeeOrderBudgetColumns
};

