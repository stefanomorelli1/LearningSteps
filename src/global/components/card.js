import React from "react";
import Info from "../../component/info";
import About from "../../component/about";
import Interest from "../../component/interest";
import Footer from "../../component/footer";

export default function Card() {
    return (
        <div className="card">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}