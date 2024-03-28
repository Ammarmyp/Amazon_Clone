import axios, {CanceledError} from "axios";

    //an access client with custom configuartion
export default axios.create({
    // baseURL: 'https://api.escuelajs.co/api/v1'
    baseURL: 'https://fakestoreapi.com'
})

export { CanceledError}