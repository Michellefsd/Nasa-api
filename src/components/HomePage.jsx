import React from 'react';
import { useState, useEffect } from 'react';
import { getNASA, getApi } from '../functions/function';

function HomePage() {
    const [nasaNews, setNasaNews] = useState(null)
    useEffect(() => {
        getNASA(setNasaNews)
    }, [])
    // const [api, setApi] = useState(null)
    // const [refresh, setRefresh] = useState(false)
    // const rerender = () => {
    //     setRefresh(!refresh)
    // }
    // useEffect(() => {
    //     getApi(setApi)
    // }, [setRefresh])
  return (
    <div className='container'>
        {nasaNews? (
            <div className='content'>
                <img src={nasaNews.url} alt={nasaNews.title}/>
                <h3>{nasaNews.title}</h3>
                <div className='text'>
                    <p>{nasaNews.copyright} - {nasaNews.date}</p>
                    <p>{nasaNews.explanation}</p>
                </div>
            </div>
        ): "is Loading"}
        <footer className='footer'>
            <p>This webPage was build thanks to Nasa Api.</p>
            <p>It shows the picture of the day and a brief explanation about it.</p>
            <p>Come back tomorrow to see another interesting info.</p>
        </footer>
        {/* {api? (
            <div>
                <p>{api}</p>
                <button onClick={rerender}>refresh </button>
            </div>
        ): "is Loading"} */}
    </div>
  );
}

export default HomePage;