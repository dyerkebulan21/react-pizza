import React from 'react'
import ContentLoader from "react-content-loader"
function LoadingBlock() {
    return(
        <ContentLoader 
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      
      >
        <circle cx="134" cy="144" r="115" /> 
        <rect x="0" y="274" rx="6" ry="6" width="280" height="26" /> 
        <rect x="0" y="310" rx="6" ry="6" width="280" height="84" /> 
        <rect x="0" y="418" rx="6" ry="6" width="91" height="33" /> 
        <rect x="143" y="417" rx="25" ry="25" width="122" height="34" />
      </ContentLoader>
      )
}

export default LoadingBlock
