import ProductCart from "../ProductCart/ProductCart";
import Pagination from "../Pagination/Pagination";
import { useState, useEffect } from "react";
const Products = () => {
    const [selectedCheckbox, setSelectedCheckbox] = useState('');
    const [products, setproducts] = useState([])
    const [searchwithTitle, setSearchWithTitle] = useState([])
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const jsonData = await response.json();
            setproducts(jsonData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    const handleCheckboxChange = (event) => {
        setSelectedCheckbox(event.target.value);
    };
    const filteredData = products.filter((item) => item.category === selectedCheckbox);

    const SearchHandler = (e) => {
        const searchdata = products.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(products, "inputSearchData")
        setSearchWithTitle(searchdata)
        setproducts(searchwithTitle)
    }

    return (<div class="Product_container_You">
        <h1 >Products For You</h1>
        <div class="product_container_you_content">
            <aside class="product_category_you_aside">
                <h3>Category</h3>
                <div class="search_category_input">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" onChange={SearchHandler} placeholder="Search" />
                </div>
                <div class="display_Category_list">
                    <label forHtml="all-product" >
                        <input type="radio" value="all-product"
                            checked={selectedCheckbox === "all-product"}
                            onChange={handleCheckboxChange} />
                        <span>all</span>
                    </label>
                    <label forHtml="men's clothing" >
                        <input type="radio" value="men's clothing"
                            checked={selectedCheckbox === "men's clothing"}
                            onChange={handleCheckboxChange} />
                        <span>men's clothing</span>
                    </label>
                    <label forHtml="jewelery">
                        <input type="radio" value="jewelery"
                            checked={selectedCheckbox === 'jewelery'}
                            onChange={handleCheckboxChange} />
                        <span>jewelery</span>
                    </label>
                    <label forHtml="electronics">
                        <input type="radio" value="electronics"
                            checked={selectedCheckbox === 'electronics'}
                            onChange={handleCheckboxChange} />
                        <span>Electronics</span>
                    </label>

                    <label forHtml="women's clothing">
                        <input type="radio" value="women's clothing"
                            checked={selectedCheckbox === "women's clothing"}
                            onChange={handleCheckboxChange} />
                        <span>women's clothing</span>
                    </label>
                </div>

            </aside>
            <main class="product_category_display" id="product_category_displayId">
                <ProductCart inputSearchData={searchwithTitle} filteredData={filteredData} products={products} />
            </main>

        </div>
    </div>);
}

export default Products;