import closeButton from  "../../../assets/images/close-button.svg"

const OrderItemsComponent = () => {
    return (
        <div>
            <div className="order-items-header display-flex"> 
                <p>ORDER ITEMS</p>
                <p>TOTAL WEIGHT</p>
                <p>QUANTITY</p>
            </div>
            <div className="order-items-row display-flex">
                <div className="order-items-name">
                    <p>Boneless Beef</p>
                    <p>1kg/unit</p>
                </div>
                <p>2kg</p>
                <div className="order-items-quantity">
                    <img src={""}/>
                    <p>2</p>
                    <img src={""}/>
                </div>
                <img src={closeButton.src}/>
            </div>
        </div>
    )
}

export default OrderItemsComponent