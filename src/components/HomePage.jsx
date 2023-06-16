import React from 'react';
import { useState, useEffect } from 'react';
import { getNASA, getApi } from '../functions/function';

function HomePage() {
    const [photo, setPhoto] = useState(null)
    useEffect(() => {
        getNASA(setPhoto)
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
    <div>
        {photo? (
            <div>
                <h3>{photo.title}</h3>
                <p>{photo.copyright} - {photo.date}</p>
                <img src={photo.url} alt={photo.title}/>
                <p>{photo.explanation}</p>
            </div>
        ): "is Loading"}
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