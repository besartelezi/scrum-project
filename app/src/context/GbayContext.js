import { createContext, useState } from "react";

const GbayContext = createContext();

export const GbayProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            url: "./images/1.jpg",
            price: "€100",
            category_id: 1,
            description: "Getting a leg hug from your girlfriend"
        },
        {
            id: 2,
            name: "Product 2",
            url: "./images/2.jpg",
            price: "€50",
            category_id: 1,
            description: "Happy birthday wishes"
        },
        {
            id: 3,
            name: "Product 3",
            url: "./images/3.jpg",
            price: "€150",
            category_id: 2,
            description: "Having a refreshing icecream with a dictator"
        },
        {
            id: 4,
            name: "Product 4",
            url: "./images/4.jpg",
            price: "€20",
            category_id: 3,
            description: "Toasting to a hedgehog"
        },
        {
            id: 5,
            name: "Product 5",
            url: "./images/5.jpg",
            price: "€15",
            category_id: 2,
            description: "OG on multiple screens"
        }
    ]);

    return <GbayContext.Provider value={{
        products
    }}>{children}</GbayContext.Provider>;
}

export default GbayContext;