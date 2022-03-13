import optionsMenu from '../../../assets/images/options-menu.svg'

const MenuOptions = () => {
    return (
        <div className="icon-container">
            <img
                className='app-logo'
                src={optionsMenu.src}
            />
            <div className='dropdown-menu'>
                <p>Select</p>
                <p>Auto Batch Order</p>
            </div>
        </div>
    )
}

export default MenuOptions