import News from './components/News';
import { useEffect, useState } from 'react';

import newsapi from "../helpers/newsApi";

const Technology = () => {
    const [data, setData] = useState([]);

    const mergeNewsData = (responses) => {
        const arrNews = [];
        responses.map(response => {
            arrNews.push(...response.articles);
        });

        return arrNews;
    }

    useEffect(() => {
        let unmounted = false;

        if (!unmounted) {            
            const arrPromiseNews = [];
            ['sg', 'id', 'us'].map(country => {
                arrPromiseNews.push(
                    newsapi.v2.topHeadlines({
                        category: 'technology',
                        country,
                        pageSize: 8,
                        page: 1,
                        apiKey: '2da91faa1ded4851b4f5f0f1c3a57c5e',
                        mode: 'cors', 
                        headers: { 'Access-Control-Allow-Origin': '*' }
                    })
                )
            });
    
            Promise.all(arrPromiseNews)
                .then(responses => {
                    if (responses[0].status === "ok") {
                        setData(mergeNewsData(responses))
                    }
                })
                .catch(err => {
                    console.log(`Something error ${err}`);
                })
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
