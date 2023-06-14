import PropTypes from 'prop-types';

export default function ProductListing(props){
    return (
        <>
            <label className="categories">
                Categories:
                <select id="selectCategories" onChange={props.handleChange}>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's%20clothing">Men&apos;s clothing</option>
                    <option value="women's%20clothing">Women&apos;s clothing</option>
                </select>
            </label>
            <div className="productList">
                {props.renderProducts(props.dataArr)}
            </div>
        </>
    )
}

ProductListing.propTypes = {
    handleChange: PropTypes.element.isRequired,
    renderProducts: PropTypes.element.isRequired,
    dataArr: PropTypes.array.isRequired
}