import React from 'react'
import { login, logo } from '../../assets/images'

function Login() {
    return (
        <div>
            <div class="flex col-span-12 h-[100vh] overflow-hidden">
                <div class="hidden lg:flex lg:flex-col lg:col-span-6 h-screen w-[50%] bg-black   items-center justify-center relative">
                    <img src={login} alt="" srcset="" class="animate__bounceInUp -ml-5 -mt-20" />
                    <div class="-mt-10 mx-auto w-[80%]">
                        <h1 class="text-3xl font-extrabold text-white">Our philosophy is simple</h1>
                        <h1 class="text-xl font-semibold text-white">Streamline your operations with our solutions.</h1>
                    </div>
                    <div class="absolute bottom-[20px] left-[65px]">
                        <p class="font-semibold text-white text-sm">2023 © BISILUX</p>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 w-[100%] lg:w-[50%] flex justify-center items-center">
                    <div class="text-center bg-red- w-[80%] mx-auto">
                        <img src={logo} alt="" className='w-44 mx-auto py-5' />
                        <h1 class="text-3xl font-semibold">Welcome Back</h1>
                        <form>
                            <div class="animate__bounceInRight max-w-lg lg:max-w-md mt-4 bg-white border-b-4 border-b-black rounded-xl shadow p-4 mx-auto">
                                <h1 class="text-2xl font-medium text-left ml-2">Sign in</h1>
                                {/* <h2 class="text-xs font-semibold bg-[#fd4444] text-white w-fit mt-1 px-3 py-1 rounded-full">Invalid Credentials</h2> */}
                                <div class="form_element w-full p-2 relative">
                                    <input type="text" name="email" required placeholder="Email" class="w-full p-2 active:outline-none focus:outline-none border-[#2070e9] border-b-2 rounded-md" />
                                    <div class="validation text-xs absolute top-[50%] right-[0.5rem]">Required</div>
                                </div>
                                <div class="form_element w-full p-2 mt-1 relative">
                                    <input type="password" name="password" required placeholder="Password" class="w-full p-2 active:outline-none focus:outline-none border-[#2070e9] border-b-2 rounded-md" />
                                    <div class="validation text-xs absolute top-[50%] right-[0.5rem]">Required</div>
                                </div>
                                {/* <div class="flex justify-between items-center mt-2 px-2">
                                    <div class="flex justify-between items-center">
                                        <input type="checkbox" name="" id="" />
                                        <span class="text-sm font-medium ml-2">Remember me?</span>
                                    </div>
                                    <div>
                                        <a class="cursor-pointer text-sm text-[#007bff] font-medium hover:underline">Forgot password?</a>
                                    </div>
                                </div> */}
                                <button type="submit" class="bg-black hover:bg-[#aca9a9] transition-all ease-in-out duration-500 w-[90%] text-white font-medium p-2 rounded-lg mt-5">Sign in</button>
                            </div>
                        </form>
                    </div >
                </div >
            </div >
        </div >
    )
}

export default Login