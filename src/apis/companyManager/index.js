// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../config";

// export const getProductEmployeeApi = createApi({
//   reducerPath: "admin",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3977/api" }),
//   endpoints: (builder) => ({
//     getProductEmployeesQuery: builder.query({
//       query: (name) => `product/get-products`,
//     }),
//   }),
// });

// export const { useGetProductEmployeesQuery } = getProductEmployeeApi;

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ManagerApi = createApi({
  reducerPath: 'rtkManagerApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getEmployeesProducts: builder.query({
      query: () => "/product/get-products",
    }),
  }),
})


export const { useGetEmployeesProductsQuery } = ManagerApi
