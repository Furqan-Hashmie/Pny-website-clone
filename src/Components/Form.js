import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const Login = () => {
    const { handleSubmit, handleChange, handleReset, errors, values, touched } = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            address: '',
            mobile: '',
        },
    validationSchema: Yup.object({
            firstname: Yup.string().min(6, 'name must be consist on six character')
                .max(6, 'Must be six characters or less')
                .required('Required'),
            lastname: Yup.string().min(6, 'name must be consist on six character')
                .max(6, 'Must be six characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Password is required').matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
                'Must contain at least 12 Characters , 1 Uppercase , 1 Lowercase , 1 Special Character , and 1 Number '
            ),
            address: Yup.string().required('Required'),
            mobile: Yup.string().required('Required').matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ , 'Phone number is not valid').min(11, 'number must be consist of 11 numbers').max(11, 'number must be consist of 11 numbers'),
            confirmPassword: 
            Yup.string().required('Required').oneOf([("password")], "Passwords must match")
    
           
        }),
    })
    return (
        <div className='container'>
            <h3 className='text-center mt-3'>FORM VALIDATION</h3>
            <div className='container  center mt-5'>
                <div className='col-lg-6'>
                    <form className='formborder' onSubmit={handleSubmit}>
                        <div className='my-4'>
                            <div className='d-flex'>
                                <div className="mb-3 mt-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label"><b> First Name :</b> </label>
                                    <input type="text" name='firstname' onChange={handleChange} className="form-control inputsize " placeholder='enter your firstname' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                   <div className='form-error'> <div style={{ color: "red" }}>{touched.firstname ? errors.firstname : ''}</div></div>

                                </div>
                                <div className="mb-3 mt-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label"><b>Last Name :</b> </label>
                                    <input type="text" name='lastname' onChange={handleChange} className="form-control inputsize " placeholder='enter your lastname' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div className='form-error' style={{ color: "red" }}>{touched.lastname ? errors.lastname : ''}</div>

                                </div>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="exampleInputEmail1" className="form-label"><b>Address :</b> </label>
                                <input type="text" onChange={handleChange} className="form-control inputaddress " name='address' placeholder='enter your address' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div className='form-error' style={{ color: "red" }}>{touched.address ? errors.address : ''}</div>

                            </div>
                            <div className='d-flex'>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address :</b></label>
                                    <input type="email" onChange={handleChange} name='email' className="form-control inputsize" placeholder='enter your email address' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div className='form-error' style={{ color: "red" }}>{touched.email ? errors.email : ''}</div>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label"><b>Mobile no :</b></label>
                                    <input type="phone" className="form-control inputsize" onChange={handleChange} name='mobile' placeholder='enter your mobile no' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div className='form-error' style={{ color: "red" }}>{touched.mobile ? errors.mobile : ''}</div>

                                </div>
                            </div>
                         <div className='d-flex'>
                         <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><b>Password :</b></label>
                                <input type="password" onChange={handleChange} className="form-control inputsize" name='password' placeholder='enter your password' id="exampleInputPassword1" />
                                <div className='form-error' style={{ color: "red" }}>{touched.password ? errors.password : ''}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><b>Confirm Password :</b></label>
                                <input type="password" onChange={handleChange} className="form-control inputsize" name='confirmpassword' placeholder='enter your password' id="exampleInputPassword1" />
                                <div className='form-error' style={{ color: "red" }}>{touched.confirmpassword ? errors.confirmpassword : ''}</div>
                            </div>   
                         </div>
                            <div className="mb-3 form-check radio">
                                <input type="checkbox" className="form-check-input radio1" id="exampleCheck1" />
                                <label className="form-check-label " htmlFor="exampleCheck1"><b>Check me out</b></label>
                            </div>

                            <div className='d-flex '>
                                <button type="submit" className="btn btn-warning btn mt-2"><b>Submit</b></button>
                                <div><p className='forgot mt-3'>Forgot password</p></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form