import * as yup from 'yup'

export default yup.object.shape({
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long')
})