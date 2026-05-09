import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    
   baseQuery:fetchBaseQuery({
     baseUrl:"http://localhost:3000",
     credentials: "include",
   }),

   endpoints:(build)=>({
      
      registration:build.mutation({

        query:(userdata)=>({
            url:"/auth/registration",
            method:"POST",
            body:userdata
        })


      }),
      login:build.mutation({
        query:(userdata)=>({
          url:"/auth/login",
          method:"POST",
          body:userdata

        })
      }),

      emailverify:build.mutation({
        query:(otpnum)=>({
          url:"/auth/verify-otp",
          method:"POST",
          body:otpnum
        })
      })
   })
})


export const {  useRegistrationMutation ,useLoginMutation ,useEmailverifyMutation }=apiSlice