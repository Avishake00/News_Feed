import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [mode, setMode] = useState('light');

  useEffect(() => {
       fetchArticles();
  }, []);

  const fetchArticles = async () => {
    props.setprogress(0); 
     setLoading(true);
      props.setprogress(20);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8023ea42c62449dcbfd85211bdab3839&page=${page}&pageSize=${props.pageSize}`;
      const response = await fetch(url);
      const parsedData = await response.json();
      props.setprogress(50);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setprogress(100);
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8023ea42c62449dcbfd85211bdab3839&page=${nextPage}&pageSize=${props.pageSize}`;
      const response = await fetch(url);
      const parsedData = await response.json();

      setArticles(articles.concat(parsedData.articles))
      setPage(nextPage);
      
      setTotalResults(parsedData.totalResults);
    };
 

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!==totalResults}
        loader={<Spinner />}
        style={{ overflow: 'hidden' }}
      >
        <div className="row">
          {articles.map((element, index) => {
           return <div className="col-md-4 my-1" key={element.title}>
              <NewsItem
                mode={mode}
                title={element.title?element.title:""}
                imageUrl={element.urlToImage || "https://cdn.pixabay.com/photo/2018/11/03/15/51/here-3792307_1280.png"}
                description={element.description?element.description:""}
                url={element.url || "https://gizmodo.com/sec-asked-coinbase-to-halt-trading-except-for-bitcoin-1850691411"}
                
              />
            </div>
})}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
