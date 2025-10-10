import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice.js";

function LoginPage() {
    const { 
        register,
        handleSubmit,watch,
        formState: { errors },
        reset,
    } = useForm();
    
    const dispatch = useDispatch();
    
    function myHandleSubmit(data){
        dispatch(login({
        username: data.username,
        usermail: data.usermail,
        }));
        reset();
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto">
                    <form className="form text-center d-flex flex-column" onSubmit={handleSubmit(myHandleSubmit)}>
                        <div className="row my-3">
                            <label htmlFor="username" className="col-6 my-2 text-start">Type your name</label>
                            <input type="text" id="username" className="form-control col-6" placeholder="Enter your name" {...register("username",{required :  "Name can't be empty"})}/>
                            {errors.username && <span>{errors.username.message}</span>}
                        </div>
                        <div className="row my-3">
                            <label htmlFor="usermail" className="col-6 my-2 text-start">Type your   mail</label>
                            <input type="email" id="usermail" className="form-control col-6" placeholder="Enter your mail" {...register("usermail",{ 
                                required :  "Email can't be empty",
                                pattern:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message:"Invalid email address"
                                }
                                })}/>
                            {errors.usermail && <span>{errors.usermail.message}</span>}
                        </div>
                        <div className="row my-3">
                            <label htmlFor="userpassword" className="col-6 my-2 text-start">Password</label>
                            <input type="password" id="userpassword" className="form-control col-6" placeholder="Type your password" 
                            {...register("userpassword1",{
                                required :  "Password can't be empty",
                                pattern:{
                                    value: /^[A-Z0-9._%+-]+$/i,
                                    message:"password should have letter & numbers & special characters"
                                },
                                minLength:{
                                    value:8,
                                    message:"the minimum is 8"
                                },
                            })}/>
                            {errors.userpassword1 && <span>{errors.userpassword1.message}</span>}
                        </div>
                        <div className="row my-3">
                            <label htmlFor="userpassword2" className="col-6 my-2 text-start">Re type Password</label>
                            <input type="password" id="userpassword2" className="form-control col-6" placeholder="Re type your password" {...register("userpassword2",{
                                required :  "Password confirmation can't be empty",
                                validate: (val) => {
                                    if (watch('userpassword1') != val) {
                                    return "Your passwords do no match";
                                    }
                                },
                            })}/>
                            {errors.userpassword2 && <span>{errors.userpassword2.message}</span>}

                        </div>
                        <div className="row my-3">
                            <button className="form-control col-6 btn btn-dark"> Submit </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginPage