import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    
   baseQuery:fetchBaseQuery({
     baseUrl:"http://localhost:3000/",
     credentials: "include",
   }),

   endpoints:(build)=>({
      
      addNewUser:build.mutation({

        query:(userdata)=>({
            url:"auth/registration",
            method:"POST",
            body:userdata
        })


      })
   })
})


export const {  useAddNewUserMutation }=apiSlice