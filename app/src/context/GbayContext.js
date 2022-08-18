import { createContext, useState } from "react";

const GbayContext = createContext();

export const GbayProvider = ({ children }) => {
    
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            url: "../assets/images/1.jpg",
            price: "€20",
            category_id: 1,
            description: "Getting a leg hug from your girlfriend"
        },
        {
            id: 2,
            name: "Product 2",
            url: "../assets/images/2.jpg",
            price: "€50",
            category_id: 1,
            description: "Photoshopped birthday wishes from J-Lo"
        },
        {
            id: 3,
            name: "Product 3",
            url: "../assets/images/3.jpg",
            price: "€350",
            category_id: 2,
            description: "Having a refreshing icecream with a dictator"
        },
        {
            id: 4,
            name: "Product 4",
            url: "../assets/images/4.jpg",
            price: "€20",
            category_id: 3,
            description: "Toasting to a hedgehog"
        },
        {
            id: 5,
            name: "Product 5",
            url: "../assets//images/5.jpg",
            price: "€15",
            category_id: 2,
            description: "Multiple screens with OG Putin"
        }
    ]);

    const [users, setUsers] = useState([
        {
            id: 1, 
            username: "becode",
            password: "becode"
        }
    ]);

    const [loggedInUser, setLoggedInUser] = useState(null);

    return <GbayContext.Provider value={{
        products,
        users, 
        loggedInUser,
        setLoggedInUser
    }}>{children}</GbayContext.Provider>;
}

export default GbayContext;