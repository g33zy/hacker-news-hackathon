import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./SearchBar";

import HitsCard from "./HitsCard";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortHits, setSortHits] = useState("title");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSort = (e) => {
    e.preventDefault();
    setSortHits(e.target.value);
  };

  // if (searchInput.length > 0) {
  //     text.filter((text) => {
  //     return text.name.match(searchInput);
  // });
  // }

  useEffect(() => {
    if (sortHits === "author") {
      axios
        .get(
          `https://hn.algolia.com/api/v1/search?tags=story,author_${searchInput}`
        )
        .then((res) => {
          setArticles(res.data.hits);
        });
    } else if (sortHits === "date") {
      axios
        .get(`https://hn.algolia.com/api/v1/search_by_date?query=${searchInput}`)
        .then((res) => {
          setArticles(res.data.hits);
        });
    } else {
      axios
        .get(
          `https://hn.algolia.com/api/v1/search?query=${searchInput}&tags=story`
        )
        .then((res) => {
          setArticles(res.data.hits);
        });
    }
    // axios

    // .get("http://hn.algolia.com/api/v1/search?tags=front_page")
    // .get(`http://hn.algolia.com/api/v1/search?tags=story,author_pg`)
    // .get(`http://hn.algolia.com/api/v1/search?query=chatgpt&tags=story`)
    // .get(`http://hn.algolia.com/api/v1/search_by_date?query=2023/03`)
    // .get(`http://hn.algolia.com/api/v1/search_by_date?query=${searchInput}`)
    // .then((res) => {
    //   setArticles(res.data.hits);
    // });
  }, [searchInput, sortHits]);
  console.log(articles);
  // console.log(articles[0].created_at)

  // `http://hn.algolia.com/api/v1/search?query=${userInput}&tags=story`

  return (
    <div className="App">
      <header className="App-header">
        <div class="search-header"></div>
          <span class="searchHeader_logo"></span>
            <a href="https://news.ycombinator.com/">
              <img src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png" alt="search"></img>
              </a>
              <div class="SearchHeader_label">
                Search
                <br></br>
                Hacker News
              </div>
        <SearchBar class="logo" handleChange={handleChange} handleSort={handleSort} />
      
        {articles.map((hit, index) => {
          return (
            <HitsCard
              key={index}
              author={hit.author}
              title={hit.title}
              url={hit.url}
              created={hit.created_at}
              comments={hit.num_comments}
              points={hit.points}
            />
        
          );
        })}
      </header>
    </div>
  );
}

export default App;
