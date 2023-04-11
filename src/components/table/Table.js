import React, { useEffect, useState } from "react";
import { tableFunctions } from "../../global-functions/GlobalFunctions";
import { type } from "@testing-library/user-event/dist/type";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { tableStructureData } from "../../utils/TableStructureData";
import EditableInput from "../editable-input/EditableInput-1";
import DoubleCheckbox from "../checkbox/DoubleCheckbox";

function Table({
  tableData,
  setTableData,
  columns,
  tableTitle,
  openDrawer,
  addItem,
  hideButtons,
  setInputBudget,
  inputBudget,
  setInputSelectedResult,
  inputSelectedResult,
  inputBudgetRequest,
  setInputBudgetRequest,
  updatedInput,
  updateBudgetF,
  budgetDecisionF,
}) {
  const [filterDrop, setFilterDrop] = useState(false);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [searchTerm, setSearchTerm] = useState("");
  const [typeAction, setTypeAction] = useState(false);
  const [typeSlider, setTypeSlider] = useState(false);

  const role = localStorage.getItem("role");
  // sorting functionality
  const sortData = (data, sortOrder) => {
    const sortedData = [...tableData];
    sortedData.sort((a, b) => {
      if (sortOrder === "ascending") {
        return a.budget - b.budget;
      } else {
        return b.budget - a.budget;
      }
    });
    return sortedData;
  };
  const handleSortAscending = () => {
    setSortOrder("ascending");
    const sortedData = sortData(tableData, "ascending");
    setTableData(sortedData);
  };
  const handleSortDescending = () => {
    setSortOrder("descending");
    const sortedData = sortData(tableData, "descending");
    setTableData(sortedData);
  };
  // search functionality
  const filteredData = tableData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  let sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
  };

  useEffect(() => {
    columns.forEach((element) => {
      if (element.type == "action") {
        setTypeAction(true);
      } else if (element.type == "slider") {
        if (hideButtons == undefined) {
          setTypeSlider(true);
        } else if (hideButtons == false) {
          setTypeSlider(false);
        }
      }
    });
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">{tableTitle ? tableTitle : ""}</h1>
      <div className="relative overflow-auto shadow-md sm:rounded-lg mt-4">
        <div className="flex items-center justify-between pb-4">
          <div className="relative">
            <button
              onClick={() => setFilterDrop(!filterDrop)}
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
              type="button"
            >
              <svg
                className="w-4 h-4 mr-2 text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Sort Data
              <svg
                className="w-3 h-3 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className={`z-10 ${
                filterDrop ? "block" : "hidden"
              } absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow`}
            >
              <ul className="p-3 space-y-1 text-sm text-gray-700">
                <li>
                  <div
                    onClick={handleSortAscending}
                    className="cursor-pointer flex items-center p-2 rounded hover:bg-gray-100"
                  >
                    Ascending Sort
                  </div>
                </li>
                <li>
                  <div
                    onClick={handleSortDescending}
                    className="cursor-pointer flex items-center p-2 rounded hover:bg-gray-100"
                  >
                    Descending Sort
                  </div>
                </li>
              </ul>
            </div>
            <button className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1 ml-2">
              <span className="material-symbols-rounded text-base">refresh</span>
            </button>
          </div>
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {columns.map((val) => {
                return (
                  <th scope="col" className="px-2 py-3">
                    {val.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, i) => (
              <tr key={row.id} className="bg-white border-b hover:bg-gray-50">
                <td scope="col" className="px-2 py-3">
                  {row.SNO}
                </td>
                {row.name ? (
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {row.name}
                  </th>
                ) : (
                  ""
                )}
                {row.requestAmount ? (
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {row.requestAmount}
                  </th>
                ) : (
                  ""
                )}
                {row.email ? (
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {row.email}
                  </th>
                ) : (
                  ""
                )}
                {row.gender ? (
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {row.gender}
                  </th>
                ) : (
                  ""
                )}

                {row.slider ? (
                  <td className="px-6 py-4 relative">
                    {role === "employee"
                      ? row.slider.showProducts.length == 0  && (
                        <h1>Add Products To Buy</h1>
                      ):""}
                      {
                     role=="manager"?  row.slider.showProducts[0].products.length == 0 && (
                          <h1>Add Products To Buy</h1>
                        ):""
                     }
                    <Slider
                      {...sliderSettings}
                      className="!mx-auto w-full   min-w-[500px] max-w-[500px]"
                    >
                      {role === "manager" ? (
                        row.slider.showProducts.map((val, i) => {
                        return  val.products.map((val, i) => (
                            <div
                              key={val._id}
                              className="w-[7.5rem] h-[7.5rem] max-w-[7.5rem] rounded-md cursor-pointer relative"
                            >
                              <img
                                src={val.productImage}
                                alt=""
                                className="w-full h-full rounded-md"
                              />
                              <div class="w-full h-full absolute top-0 left-0 bg-gray-900 opacity-0 hover:opacity-100 flex flex-col justify-center items-center rounded-md transition-all duration-500 ease-in-out">
                                <span className="text-xs text-white text-center font-semibold">
                                  {val.productName}
                                </span>
                                <div>
                                  {" "}
                                  <span className="text-xs text-white text-center font-semibold">
                                    Price : {val.productPrice}
                                  </span>
                                </div>
                                <div>
                                  {" "}
                                  <span className="text-xs text-white text-center font-semibold">
                                    Quantity : {val.productQuantity != undefined?val.productQuantity:1}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ));
                        })
                      ) : row.slider.showProducts.map((val,i)=>(
                        <div
                        key={val._id}
                        className="w-[7.5rem] h-[7.5rem] max-w-[7.5rem] rounded-md cursor-pointer relative"
                      >
                        <img
                          src={val.productImage}
                          alt=""
                          className="w-full h-full rounded-md"
                        />
                        <div class="w-full h-full absolute top-0 left-0 bg-gray-900 opacity-0 hover:opacity-100 flex flex-col justify-center items-center rounded-md transition-all duration-500 ease-in-out">
                          <span className="text-xs text-white text-center font-semibold">
                            {val.productName}
                          </span>
                          <div>
                            {" "}
                            <span className="text-xs text-white text-center font-semibold">
                              Price : {val.productPrice}
                            </span>
                          </div>
                          <div>
                            {" "}
                            <span className="text-xs text-white text-center font-semibold">
                              Quantity : {val.productQuantity}
                            </span>
                          </div>
                        </div>
                      </div>
                      ))}
                    </Slider>
                  </td>
                ) : (
                  ""
                )}
                {row.bill ? <td className="px-6 py-4">{row.bill}</td> : ""}

                {inputBudgetRequest != undefined ? (
                  <td className="px-6 py-4">
                    <EditableInput
                      inputBudgetRequest={inputBudgetRequest}
                      updateBudgetF={updateBudgetF}
                      value={row.budget}
                      id={row.id}
                      updatedInput={updatedInput}
                    />
                  </td>
                ) : (
                  <td className="px-6 py-4">{row.budget}</td>
                )}

                {/* {row.allocateBudget ? <td className="px-6 py-4">{row.allocateBudget}</td> : ""} */}
                {row.allocateBudget ? (
                  <td className="px-6 py-4">
                    <EditableInput
                      showBtn={row.allocateBudget.showBtn}
                      updateBudgetF={updateBudgetF}
                      id={row.id}
                      value={row.allocateBudget.value}
                      updatedInput={updatedInput}
                    />
                  </td>
                ) : (
                  ""
                )}
                {typeSlider ? (
                  <td className="px-6 py-4">
                    <button
                      className="p-1 bg-black text-white rounded-md text-xs"
                      onClick={() => openDrawer(row)}
                    >
                      {row.slider.name}
                    </button>
                  </td>
                ) : (
                  ""
                )}
                {row.status ? (
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {row.status}
                  </th>
                ) : (
                  ""
                )}
                {row.selectBudgetAprroval ? (
                  <DoubleCheckbox
                    budgetDecisionF={budgetDecisionF}
                    i={i}
                    row={row}
                  />
                ) : (
                  ""
                )}
                {row.select ? (
                  <DoubleCheckbox
                    budgetDecisionF={budgetDecisionF}
                    i={i}
                    row={row}
                  />
                ) : (
                  //   <td className="px-6 py-4">
                  //   <label class="relative inline-flex items-center  cursor-pointer">
                  //     <input type="checkbox" onChange={()=>{setInputSelectedResult(!inputSelectedResult)}} checked={inputSelectedResult} class="sr-only peer" />
                  //       <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  //   </label>
                  // </td>
                  ""
                )}

                {typeAction ? (
                  <td className="px-6 py-4">
                    <button
                      className="p-1 bg-black text-white rounded-md text-xs"
                      onClick={() => {
                        addItem(row);
                      }}
                    >
                      {row.action.name}
                    </button>
                  </td>
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
