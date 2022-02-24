import OrderItemsComponent from "../../components/ui/OrderItemsComponent"

const index = () => {
    return (
        <div className="main">
            <p>Verify Package</p>
            <p>Input items in the package to confirm order items</p>
            <input type="name" placeholder="Type item here" />
            <OrderItemsComponent />
        </div>
    )
}

export default index