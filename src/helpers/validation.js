export  async function loginValidation(values){
    let error ={}
    if(!values.email){
        return error.email =toast.error('Email Required....😒!');
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)){
       return  error.email =toast.error('Invalid email....!');

    }else if(!values.password){
         return error.password =toast.error('password Required....🙌!');
    }
}