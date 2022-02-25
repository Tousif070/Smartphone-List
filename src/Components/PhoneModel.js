import React from "react"

function PhoneModel(props)
{
    return (
        <div className="phonemodel card mt-4">
            
            <img src={ props.item.image } className="card-img-top" alt="image" />
            
            <div className="card-body">

                <h5 className="mb-3">{ props.item.name }</h5>

                <p><label>Screen:</label> <span>{ props.item.screen }</span></p>
                <p><label>RAM:</label> <span>{ props.item.memory.ram }</span></p>
                <p><label>ROM:</label> <span>{ props.item.memory.rom }</span></p>
                <p><label>Battery:</label> <span>{ props.item.battery.capacity }</span></p>
                <p><label>Charging:</label> <span>{ props.item.battery.charging }</span></p>
                <p><label>Color:</label> <span>{ props.item.color }</span></p>
                <p><label>Price:</label> <span>${ props.item.price }</span></p>

            </div>

        </div>
    )
}

export default PhoneModel