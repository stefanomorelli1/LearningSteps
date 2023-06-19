import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss"
import Header from "./global/components/header";
import Footer from "./global/components/footer";
import Content from "./global/components/content";
import Card from "./global/components/card";



function App() {
    return(
        <div>
            <Card />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App />,
        document.getElementById("root")
);
