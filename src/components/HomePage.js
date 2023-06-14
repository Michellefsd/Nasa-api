import React, { useEffect, useState } from 'react';
import { getNews } from '../functions/function';


function HomePage() {
    const [randomNews, setRandomNews] = useState(null);

    useEffect(() => {
        getNews()
    }, [])
  return (
    <div></div>
  );
}

export default HomePage;