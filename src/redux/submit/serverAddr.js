import axios from 'axios';
const SERVER_ADDR = 'https://iv-engineering-backend.onrender.com/api'
const LOCAL_ADDR = 'http://localhost:3000/api'

const serverAddr = () =>
  (axios.defaults.baseURL =
    process.env.NODE_ENV === 'development'
	    ? LOCAL_ADDR
	    : axios.defaults.baseURL = SERVER_ADDR);

export default serverAddr;
