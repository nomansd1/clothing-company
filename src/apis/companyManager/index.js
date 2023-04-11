// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL, API } from "../../config";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const role=localStorage.getItem("role");
let companyId;
if(role=="manager"){
  companyId = JSON.parse(localStorage.getItem("user"))?.result?.company;
}else{
   companyId = JSON.parse(localStorage.getItem("user"))?.result?.companyId;
}
const employeeId = JSON.parse(localStorage.getItem("user"))?.result?._id


// const companyId="642b1cf70cbb7acac958d471"
export const ManagerApi = createApi({
  reducerPath: "rtkManagerApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ["employeeProducts", "budgetRequest","orders"],
  endpoints: (builder) => ({
    getEmployeesProducts: builder.query({
      query: () => `/product/get-products/`,
      providesTags: ["employeeProducts"],
    }),
    getCompanyAllProducts: builder.query({
      query: () => `/product/get-productsbycompanyId?companyId=${companyId}`,
    }),
    getEmployees: builder.query({
      query: () => `/employee/get-employeebycompanyId?companyId=${companyId}`,
    }),
    getOrders: builder.query({
      query: () => `/order/get-orderbycompanyId?companyId=${companyId}`,
      providesTags: ["orders"],

    }),
    getOrdersForEmployees: builder.query({
      query: () => `/order/get-orderbyemployeeId?companyId=${employeeId}`,
      providesTags: ["orders"],

    }),
    getCompanyProducts: builder.query({
      query: () => `product/get-getemployeeproductbycompanyId?companyId=${companyId}`,

    }),


    getBudgetRequest: builder.query({
      query: () => `/request/get-request`,
      providesTags: ["budgetRequest"],
    }),
    getTotalOrdersLength: builder.query({
      query: () => `/order/get-TotalOrder`,
      providesTags: ["order"],
    }),
    getTotalOrdersLengthbyCompanyId: builder.query({
      query: () => `/order/get-TotalOrder?companyId=${companyId}`,
      providesTags: ["order"],
    }),
    getTotalEmployeesLength: builder.query({
      query: () => `/employee/get-Totalemployee`,
      
    }),
    getTotalEmployeesLengthbyCompanyId: builder.query({
      query: () => `/employee/get-Totalemployee?companyId=${companyId}`,
    
    }),
    getCompanyDetails: builder.query({
      query: () => `/company/getCompanyDetails?companyId=${companyId}`,
   
    }),
    employeeGetProduct: builder.query({
      query: () => `/product/get-productsbyemployeeId?employeeId=${employeeId}`,
   
    }),
    employeeRequestBudgetIncrement: builder.mutation({
      query: (payload) => {

        return {
          url: "/request/add-request",
          method: "POST",
          body: payload,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["budgetRequest"],
    }),
    actionBudgetRequest: builder.mutation({
      query: (payload) => {
        return {
          url: "/request/approved-request",
          method: "PUT",
          body: payload,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["budgetRequest"],
    }),
    actionEmployeeBudgetRequest: builder.mutation({
      query: (payload) => {
        return {
          url: "/request/approved-request",
          method: "PUT",
          body: payload,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["budgetRequest"],
    }),
    updateBudget: builder.mutation({
      query: (payload) => {
        return {
          url: "/request/change-budget",
          method: "PUT",
          body: payload,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["employeeProducts"],
    }),

    addNewOrder: builder.mutation({
      query: (payload) => {
        console.log("payload >>", payload);

        return {
          url: "/order/add-order",
          method: "POST",
          body: payload,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["employeeProducts","orders"],
    }),
  }),
});

export const {
  useGetEmployeesProductsQuery,
  useGetCompanyProductsQuery,
  useGetEmployeesQuery,
  useGetBudgetRequestQuery,
  useActionBudgetRequestMutation,
  useActionEmployeeBudgetRequestMutation,
  useGetOrdersQuery,
  useAddNewOrderMutation,
  useUpdateBudgetMutation,
  useEmployeeRequestBudgetIncrementMutation,
  useGetOrdersForEmployeesQuery,
  useGetTotalEmployeesLengthQuery,
  useGetTotalOrdersLengthQuery,
  useGetCompanyDetailsQuery,
  useEmployeeGetProductQuery,
  useGetCompanyAllProductsQuery,
} = ManagerApi;

export const managerLogin = (data) =>
  API.post("auth/manager-login", data)
    .then((res) => res)
    .catch((err) => err);

export const employeeLogin = (data) =>
  API.post("auth/login", data)
    .then((res) => res)
    .catch((err) => err);

export const adminLogin = (data) =>
  API.post("auth/login", data)
    .then((res) => res)
    .catch((err) => err);
