import React,{useEffect,useState} from "react";
import '../App.css';
import Image from '../components/image';
import {LoadImages,SearchImages} from '../components/api';
import {Container} from 'react-bootstrap';
import {GoSearch } from "react-icons/go";
function Search() {
  const [query,setQuery] = useState();
  const [searchQ,setSearch] = useState();
  const data =  LoadImages();
  const search = () =>{
    setSearch(query);
  }
  const searchData = SearchImages(searchQ);
  return (
    <div className="App">
    <div>
      <Container className="text-center">
      <input placeholder="Search the Web.."className="search-bar"type="text" onChange={(e)=>setQuery(e.target.value)}/>
      <button className="search-box"onClick={search}><GoSearch/></button>
  
      </Container>
      </div>
    <div className="container2">
    {searchQ ? searchData.map((img,key)=>(
      <Image key={key} src={img.urls.regular} hd={img.urls.full} raw={img.urls.raw} thumb={img.urls.thumb} small={img.urls.small}/>
    )) : data.map((img,key)=>(
      <Image key={key} src={img.urls.regular} hd={img.urls.full} raw={img.urls.raw} thumb={img.urls.thumb} small={img.urls.small}/>
    ))}
    </div>
   
    </div>
  );
}
export default Search;