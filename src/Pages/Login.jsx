import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section className='container d-flex align-items-center justify-content-center vh-100'>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form className='shadow-sm bg-white p-5'>
                        <h4 className='text-center mb-5'>Login Now</h4>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label className='form-label'>Email Address</label>
                                <input type="text" className='form-control rounded-0' />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className='form-label'>Password</label>
                                <input type="password" className='form-control rounded-0' />
                            </div>
                            <div className="col-md-12 mt-3">
                                <button type="submit" className='btn btn-dark rounded-0 w-100'>Login Now</button>
                                <p className='text-center mt-4'>I don't have an account <Link to='/register'>Register</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login