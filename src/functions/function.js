import axios from "axios";

export const getNASA = async(state) => {
    const request = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY || "I8UhPoqXqnDK2im3ficSk47KNYIW7V7IgAG7NYcV"}`)
    state(request.data)
}
// export const getApi = async(state) => {
//     const request = await axios.get("https://api.adviceslip.com/advice")
//     state(request.data.slip.advice)
// }