import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss"
import Header from "./global/components/header";
import Footer from "./global/components/footer";
import Content from "./global/components/content";
import Card from "./global/components/card";
import ProductCard from "./global/components/productCard";
import Infos from "./global/assets/infos";
import infos from "./global/assets/infos";

const image = require('./component/images/photo-1633332755192-727a05c4013d.jpeg')



function App() {
    const info = infos.map(element => {
        return <ProductCard
            image={image}
            name={element.name}
            number={element.number}
            email={element.email}
            rank={element.rank} />
    });
    return(
        <div className="container">
            <Header />
            <div className="container-card">
                {info}
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App />,
        document.getElementById("root")
);
