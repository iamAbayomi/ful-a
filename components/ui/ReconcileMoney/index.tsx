const ReconcileCash  = () =>{
    return(
        <div>
            <p>Reconcile Cash</p>
            <p>Input Cash amount</p>
            <input type={"name"} />
            <button className="red-button">Confirm</button>
        </div>
    )
}


// const CashReconciledSuccesful

const ReconcileMoney= () => {
    return(
        <div className="backdropdown">
            <div className="backdropdown-line"></div>
            <p className="order-title">Reconcile money</p>
            <p className="order-subtitle">What do you want to reconcile first</p>
            <button className="button-red button-pink">Cash</button>
            <button className="button-red">Continue</button>
        </div>
    )
}

export default ReconcileMoney

//const s