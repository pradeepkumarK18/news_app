import News from './components/News';
import { useEffect, useState } from 'react';

const Technology = () => {
    const [data, setData] = useState([]);

    
    useEffect(() => {
        let unmounted = false;

        if (!unmounted) {
            
//             const proxyUrl = "https://cors-anywhere.herokuapp.com/"
//             const category = "business";
//             const country = "us";
//             const pageSize = "8";
//             const page = "1";
//             const apiKey = "2da91faa1ded4851b4f5f0f1c3a57c5e";
            const url = `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`;
            const request = new Request(url);

            fetch(request)
              .then(response => response.json())
              .then((news) => {
                setData(news);
                console.log(news);
              })
              .catch(error => {
                console.log(error);
              });
            
        }

        return () => {
            unmounted = true;
        }
    }, []);

    return (
        <>
            <News 
                category="Technology"
                data={data}
            />
        </>
    );
}

export default Technology;
