import { useRef, useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Input from './components/Input'
import Layout from './components/Layout'

const SignIn = () => {

  const formRef = useRef()
  const [loginError, setLoginError] = useState('')

  const initialValues = {
    username: '',
    password: ''
  }

  const validationSchema = yup.object({
    username: yup.string().required('Please enter your username'),
    password: yup.string().required('Please enter your password')
  })

  const onSubmit = (values) => {

  }

  return (
    <>
      <Layout>
        <div className="flex justify-center items-center pt-20">

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

            {({ values, errors, isValid, handleChange, handleBlur, handleSubmit }) => (

              <form ref={formRef} className="w-full sm:min-w-[400px] sm:max-w-[400px]" method="post" action="/api/auth/callback/credentials" onSubmit={handleSubmit}>

                <h2 className="text-4xl font-semibold mb-4">Login</h2>

                <p className="text-gray-400 font-medium mb-4">Securely login to your PollApp account</p>

                <div className="mb-4">
                  <Input type="text" name="username" error={errors.username} onChange={handleChange} onBlur={handleBlur} value={values.username} placeholder="Username" />
                </div>

                <div className="mb-4">
                  <Input type="password" name="password" error={errors.password} onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="Password" />
                </div>

                {loginError && <p className="text-sm font-medium text-red-400 py-4">{loginError}</p>}

                <button disabled={!isValid} type="submit" className="block w-full p-4 bg-green-400 hover:bg-green-500 disabled:bg-green-300 text-white text-md font-semibold rounded duration-75">
                  Sign in
                </button>

              </form>
            )}

          </Formik>

        </div>
      </Layout>
    </>
  )
}

export default SignIn