import{z , TypeOf} from 'zod'

export const Userregister=z.object({
 body:z.object({
  email :z.string({required_error:" email is  requerd" , 
  invalid_type_error: "email the most be a String"}).email(),
   password:z.string({required_error:" Password is  requerd" , 
    invalid_type_error: "Password the most be a String"}).min(8).max(40),
   name:z.string({required_error: "the username is requerd"})
}),
})
export type userregisterType =z.infer<typeof Userregister>['body']


export const UserregisterID=z.object({
params:z.object({
    id:z.string({required_error:"Please enter id in params"})
})

})
export type UserregisterIDType =z.infer<typeof UserregisterID>['params']

//___________________________________________________________________


export const UserLogin=z.object({
    body:z.object({
        username :z.string({required_error:" username is  requerd" }),
      password:z.string({required_error:" Password is  requerd" }),
   }),
   })
   export type UserLoginType =z.infer<typeof UserLogin>



   export const UserLogID=z.object({
    params:z.object({
        id:z.string({required_error:"Please enter id in params"})
    })
    
    })
    export type UserLogIDType =z.infer<typeof UserLogID>['params']
    