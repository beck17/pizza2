import React from "react"
import ContentLoader from "react-content-loader"

const IsLoadingPizza = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={480}
        viewBox="0 0 280 480"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="130" cy="130" r="130"/>
        <rect x="0" y="275" rx="13" ry="13" width="280" height="27"/>
        <rect x="0" y="327" rx="20" ry="20" width="280" height="90"/>
        <rect x="1" y="432" rx="15" ry="15" width="95" height="30"/>
        <rect x="129" y="426" rx="18" ry="18" width="152" height="45"/>
    </ContentLoader>
)

export default IsLoadingPizza