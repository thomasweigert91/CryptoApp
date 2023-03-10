import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptApiHeaders = {
    'X-RapidAPI-Key': '10ba319715msh0f2b70f46be9d10p11885ajsn080658c04f2e',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptApiHeaders})

// Crypto API Redux Logic
export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      // get cryptocurrencies
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      // get crypto details
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      // get crypto history
      getCryptoHistory: builder.query({
        query: ({ coinId, timePeriod }) =>
          createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
      }),
    }),
  });
  
  // Export Crypto API
  export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
  } = cryptoApi;
