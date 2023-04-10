import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    // Article
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            {/* Left Article */}
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>

            {/* Right Article */}
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    );

  return (
    <div className='widgets'>

        {/* Header */}
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Global IT spending forecast to rise 5.5%", "Top news - 9867 readers")}
        {newsArticle("Unemployment rate fell to 3.5% in March", "Economy - 7890 readers")}
        {newsArticle("Tesla is opening a Megafactory for huge batteries in China", "Business - 9867 readers")}
        {newsArticle("Google SEO says search Engine will get ChatGPT-Like integration", "Technology - 7407 readers")}
        {newsArticle("Ukraine War: Who leaked top secret US documents - and why?", "World - 5220 readers")}
        {newsArticle("NBA playoffs 2023 - The stars, stats and storylines", "Sport - 8640 readers")}

    </div>
  )
}

export default Widgets;