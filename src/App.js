import React from "react"

import Header from "./Components/Header"
import MainContent from "./Components/MainContent"

function App()
{
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Header />
                </div>
                <div className="col-md-12">
                    <MainContent />
                </div>
            </div>
        </div>
    )
}

export default App