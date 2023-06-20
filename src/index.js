import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss"
import HeaderMeme from "./component/memeGenerator/header";
import ContentMeme from "./component/memeGenerator/contentMeme";




const image = require('./component/images/photo-1633332755192-727a05c4013d.jpeg')


function App() {
   /* const info = infos.map(element => {
        console.log(element)
        return <ProductCard
            image={image}
            {...element}
        />
    });*/
    return(
        <div className="container">
            <HeaderMeme />
            <ContentMeme />
           {/* <div className="container-card">
                {info}
            </div>*/}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App />,
        document.getElementById("root")
);
