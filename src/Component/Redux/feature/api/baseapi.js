import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseapi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://asetta-autos-production.up.railway.app' }),
  endpoints: (builder) => ({
    getourteam: builder.query({
      query: () => '/ourteam',
    }),
    getblogs:builder.query({
      query:()=>'/our-blogs'
    })
  })
})


export const { useGetourteamQuery , useGetblogsQuery} = baseapi;
export default baseapi;