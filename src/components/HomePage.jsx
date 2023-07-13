import { useState, useEffect } from 'react';
import { getNASA, getApi } from '../functions/function';
import { ImSpinner3 } from 'react-icons/im';

function HomePage() {
    const [nasaNews, setNasaNews] = useState(null)
    useEffect(() => {
        getNASA(setNasaNews)
    }, [])
    const style = {
      "animation": "spin infinite 3.3s linear",
      "color":"rgb(71, 89, 252)",
      "fontSize":"4em"
    }
  return (
    <div className='container'>
        {nasaNews? (
            <div className='content'>
                <div>
                  <img src={nasaNews.url} alt={nasaNews.title}/>
                </div>
                <h3>{nasaNews.title}</h3>
                <div>
                    <p className='text'>{nasaNews.copyright} - {nasaNews.date}</p>
                    <div className='text-div'>
                      <p className='text'>{nasaNews.explanation}</p>
                    </div>
                </div>
            </div>
        ): <div className='title'><ImSpinner3 style={style}/></div>}
        <footer className='footer'>
            <p>This web page was build thanks to Nasa Api.</p>
            <p>It shows the picture of the day and a brief explanation about it. Come back tomorrow to see another interesting info.</p>
            <p>Michelle Rodriguez Developer </p>
        </footer>
    </div>
  );
}

export default HomePage;


        // const [api, setApi] = useState(null)
    // const [refresh, setRefresh] = useState(false)
    // const rerender = () => {
    //     setRefresh(!refresh)
    // }
    // useEffect(() => {
    //     getApi(setApi)
    // }, [setRefresh])
    //    {/* {api? (
      //      <div>
        //        <p>{api}</p>
          //      <button onClick={rerender}>refresh </button>
            //</div>
    //    ): "is Loading"} */}