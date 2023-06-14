import axios from "axios";


export const getNews = async() => {
    const request = await axios.get("https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=eph4xRHl4ffKIAv4cmqZOmKkTfjxgob8");
    console.log(request);
}