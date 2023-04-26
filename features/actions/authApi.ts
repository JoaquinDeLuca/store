import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import api from 'api';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'user',

  baseQuery: fetchBaseQuery({ baseUrl: `${api}` }),

  endpoints: (build) => ({
    loginUser: build.mutation({
        query: (userData) => ({
            url: "api/auth/login",
            method: "POST",
            body: userData
        })
    }),
    SignUpUser: build.mutation ({
      query: (userData) => ({
        url: "api/auth/signUp",
        method: "POST",
        body: userData
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserMutation, useSignUpUserMutation } = authApi