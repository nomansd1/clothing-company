import React, { useEffect, useState } from "react";
import { tableFunctions } from "../../global-functions/GlobalFunctions";
import { type } from "@testing-library/user-event/dist/type";
import Slider from "react-slick";
import { tableStructureData } from "../../utils/TableStructureData";

function Table({ tableData, setTableData, columns, tableTitle, openDrawer ,addItem}) {
  const [filterDrop, setFilterDrop] = useState(false);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [searchTerm, setSearchTerm] = useState("");
  const [typeAction, setTypeAction] = useState(false);
  const [typeSlider, setTypeSlider] = useState(false);

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
        setTypeSlider(true);
      }
    });
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">{tableTitle ? tableTitle : ""}</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <div className="flex items-center justify-between pb-4">
          <div>
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
              } w-48 bg-white divide-y divide-gray-100 rounded-lg shadow`}
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
            {filteredData.map((row) => (
              <tr key={row.id} className="bg-white border-b hover:bg-gray-50">
                <td scope="col" className="px-2 py-3">
                  {row.SNO}
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {row.name}
                </th>

                <td className="px-6 py-4 relative">
                  <Slider {...sliderSettings} className=" w-full max-w-[200px]">
                    {row.slider?.showProducts?.map((val, i) => {
                      return val?.products.map((val, i) => (
                        <div
                          key={val._id}
                          className="w-10 h-10 max-w-[2.5rem] mx-2 rounded-md cursor-pointer relative"
                        >
                          <img
                            src={val.productImage}
                            alt=""
                            className="w-full h-full rounded-md"
                          />
                          <div class="w-full h-full absolute top-0 left-0 bg-gray-900 opacity-0 hover:opacity-75 flex justify-center items-center rounded-md transition-all duration-500 ease-in-out">
                            <span class="material-symbols-rounded text-3xl text-white">
                              {val.productName}
                            </span>
                          </div>
                        </div>
                      ));
                    })}
                  </Slider>
                </td>

                <td className="px-6 py-4">{row.budget}</td>
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
                {typeAction ? (
                  <td className="px-6 py-4">
                    <button className="p-1 bg-black text-white rounded-md text-xs" onClick={()=>{addItem(row)}}>
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
