import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        return {
          url: `/products`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        console.log("inside base api=>", data);
        return {
          url: "/product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (options) => {
        console.log("inside base api=>", options);
        return {
          url: `/product/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (options) => {
        console.log("inside base api=>", options);
        return {
          url: `/product/${options.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
    getProductsById: builder.query({
      query: (id: string) => {
        return{
         url: `/product/${id}`,
         method:'GET'
        };
      }, // Endpoint to fetch product by ID
      providesTags: ['product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsByIdQuery
} = baseApi;
