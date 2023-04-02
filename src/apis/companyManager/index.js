// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../config";


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ManagerApi = createApi({
  reducerPath: 'rtkManagerApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getEmployeesProducts: builder.query({
      query: () => "/product/get-products",
    }),
    addNewOrder: builder.mutation({
      query: (payload) => ({
        url: '/order/add-order',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['product'],
    

    
  }),
})
})


export const { useGetEmployeesProductsQuery, useAddNewOrderMutation } = ManagerApi
