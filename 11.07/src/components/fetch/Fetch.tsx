import { useEffect, useState } from "react";
import "./Fetch.css"
import Filter from "./Filter";
interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface News {
    status: string;
    totalResults: number;
    articles: Article[];
}


const Fetch = () => {

    const [megaNews, setMegaNews] = useState<News | null>(null);
    const [language, setLanguage] = useState<string>("de");
    const [search, setSearch] = useState<string>("apple");



    const getLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
      };

      const getSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
      };

    // https://newsapi.org/v2/everything?language={languageCode}&q={searchValue}?&apiKey=6408cf0624d24204ab6c232211f9ea53

    //https://newsapi.org/v2/everything?language={languageCode}&apiKey=6408cf0624d24204ab6c232211f9ea53

    console.log(megaNews);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?language=${language}&q=${search}&apiKey=6408cf0624d24204ab6c232211f9ea53`)
          .then((response) => response.json())
          .then((gefetchteDaten) => setMegaNews(gefetchteDaten))
          .catch((error) => console.error("Fehler beim Fetchen", error));
      }, [language, search]);  





    return ( 
        <section>
            <h2 className="Titel">NEWS</h2>
            <input onChange={getSearch} type="text" value={search}/>
            <select onChange={getLanguage} id="language">
                <option value="de">Deutsch</option>
                <option value="en">Englisch</option>
                <option value="es">Spanisch</option>
                <option value="fr">Französisch</option>
            </select>
{/* 
            <Filter/> */}
            <div className="NewsCard">
            {megaNews ? (
                megaNews.articles.map((article, index) => (
                    <div key={index} className="oneCard">
                    {/* <p>Total Results:{megaNews.totalResults}</p> */}
                    <p>Status:{megaNews.status}</p>
                    <p>Source: {article.source.name}</p>
                    <p>Author: {article.author}</p>
                    <p>Title: {article.title}</p>
                    <p>Description: {article.description}</p>
                    <img src={article.urlToImage} alt={article.title} />
                    <p>Published At: {article.publishedAt}</p>
                    <p>Content: {article.content}</p>
                </div>
            
          ))
        ) : (
            <p>News werden geladen</p>
        )}
        </div>
        {/* <div>
        {megaNews ? (
                megaNews.articles.map((article, index) => (
                    
                    <div key={index} className="oneCard">
                    <p>Total Results:{megaNews.totalResults}</p>
                    <p>Status:{megaNews.status}</p>
                    <p>Source: {article.source.name}</p>
                    <p>Author: {article.author}</p>
                    <p>Title: {article.title}</p>
                    <p>Description: {article.description}</p>
                    <img src={article.urlToImage} alt={article.title} />
                    <p>Published At: {article.publishedAt}</p>
                    <p>Content: {article.content}</p>
                </div>
            
          ))
        ) : (
            <p>News werden geladen</p>
        )}
        </div> */}
        </section>
    );
}
 
export default Fetch;