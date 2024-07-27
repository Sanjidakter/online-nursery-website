import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://nursery-db.vercel.app/api" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        return {
          url: `/nurseries`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        console.log("inside base api=>", data);
        return {
          url: "/nurseries",
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
          url: `/nurseries/${options.id}`,
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
          url: `/nurseries/${options.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
    getProductsById: builder.query({
      query: (id: string) => {
        return{
         url: `/nurseries/${id}`,
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
