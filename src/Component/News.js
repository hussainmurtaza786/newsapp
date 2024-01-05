import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${CapitlizeLetterthis, props.category}-NewsRoom`
    
    const CapitlizeLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)

    }

 
    const  updatedNews= async ()=> {
        props.setProgress(10);    
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8151d98853554bc49fffaa421ff28879&page=1&pageSize=${props.pagesize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100);   

    }

    useEffect(() => {
        updatedNews();
    }, [])

    

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8151d98853554bc49fffaa421ff28879&page=${page+1}&pageSize=${props.pagesize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)

    };

        return (
            <div>
                <h1 className="text-center "style={{margin:'50px 0px'}}>NewsRoom {(CapitlizeLetter(props.category) )} Top Headline </h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">

                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 77) : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>

                    </div>
                </InfiniteScroll>

            </div>

        )
   


    }
News.defaultProps = {
    pagesize: 6,
    country: 'us',
    category: 'general'
}
News.propTypes = {
    name: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,

}
export default News