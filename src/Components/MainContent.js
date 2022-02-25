import React from "react"

import PhoneModel from "./PhoneModel"

import data from "../data"

function MainContent()
{
    let phoneModels = data.map(row => {
        return (
            <PhoneModel
                key={ row.id }
                item={ row }
            />
        )
    })

    return (
        <div className="phonemodel--div">
            { phoneModels }
        </div>
    )
}

export default MainContent