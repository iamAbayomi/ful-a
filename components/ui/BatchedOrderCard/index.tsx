
import optionsMenu from '../../../assets/images/options-menu.svg'
import downArrow from "../../../assets/images/down-arrow.svg"
import upArrow from "../../../assets/images/up-arrow.svg"
import bicycle from "../../../assets/images/bicycle.svg"
import bag from "../../../assets/images/bag.svg"

const BatchedOrderCard = () => {
    return (
        <div className="card-elevated">
            <div className="display-flex">
                <div className='batched-order-no-container'>
                    <p className='batched-order-heading'>Batch 2</p>
                    <p className='batched-order-no'>#C267</p>
                </div>
                <img src={optionsMenu.src} />
            </div>
            <div className="order-section display-flex-withoutspace">
                <img src={bag.src} />
                <p className="orders-notification">3 orders</p>
            </div>
            <div className={"display-flex"}>
                <div className="display-flex-withoutspace">
                    <img src={bicycle.src} />
                    <p className="orders-notification">Timi Busola</p>
                </div>
                <img src={downArrow.src} />
                {/* <img src={upArrow.src} /> */}
            </div>
            <div className="order-row">
                <div className='display-flex'>
                    <div className="order-number">
                        <p className='neworderheading'>Order 4</p>
                        <p className='neworderno'>#1270</p>
                    </div>
                    <div className='badge'>
                        <p className="badge-text"> Package </p>
                    </div>
                </div>
                <div className='neworder-line'></div>
            </div>
        </div>
    )
}


export default BatchedOrderCard
