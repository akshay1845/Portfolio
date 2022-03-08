import React, {useEffect, useState} from 'react'
import './portfolio.scss'
import PortfolioList from '../portfoliioList/PortfolioList'
import {featuredPortfolio, webPortfolio, designPortfolio, mobilePortfolio, contentPortfolio} from '../../data'

function Portfolio() {

  const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

  const list = [
    {
      id: "featured",
      title:"Featured",
    },
    {
      id: "web",
      title:"Web App",
    },
    {
      id: "mobile",
      title:"Mobile App",
    },
    {
      id: "design",
      title:"Design",
    },
    {
      id: "content",
      title:"Content",
    },
    
  ]

  useEffect(()=>{
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break; 
      case "web":
        setData(webPortfolio);
        break; 
      case "mobile":
        setData(mobilePortfolio);
        break; 
      case "design":
        setData(designPortfolio);
        break; 
      case "content":
        setData(contentPortfolio);
        break; 
      default:
          setData(featuredPortfolio)
    }
  },[selected])
  return (
    <div className="portfolio" id = "portfolio">
      <h1>Portfolio</h1>
      <ul>
      {
        list.map((item)=> (
          <PortfolioList 
              title={item.title} 
              active = {selected === item.id} 
              setSelected={setSelected}
              id={item.id}/>
        ))
      }
      </ul>
      <div className="container">
        {data.map(ele=>(
        <div className="item">
          <img src= {ele.img} alt={ele.title} />
          <h3>{ele.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio