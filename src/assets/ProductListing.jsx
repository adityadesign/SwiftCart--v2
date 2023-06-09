export default function ProductListing(props){
    return (
        <>
            <label className="categories">
                Categories:
                <select id="selectCategories" onChange={props.handleChange}>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's%20clothing">Men's clothing</option>
                    <option value="women's%20clothing">Women's clothing</option>
                </select>
            </label>
            <div className="productList">
                {props.renderProducts(props.dataArr)}
            </div>
        </>
    )
}