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
            shortDescription: "Getting a leg hug from your girlfriend",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula sem, pellentesque et elementum non, luctus sit amet arcu. Duis faucibus, ipsum vel interdum faucibus, nunc velit porta magna, vitae pellentesque purus urna vitae libero. Proin mattis lorem non nisi dictum facilisis. Morbi et nibh turpis. Nunc ultricies nulla diam, vel bibendum justo vehicula quis. Donec ut felis id dolor faucibus placerat. Vivamus facilisis ligula in scelerisque dapibus. Duis sagittis consequat pulvinar. Phasellus pharetra luctus nulla, ut dictum lacus eleifend consectetur. Duis in molestie mauris. Quisque auctor dolor et arcu molestie, ornare aliquam lorem pulvinar. Nam mattis est at nulla tincidunt semper. Aenean nec facilisis nibh, a elementum urna."
        },
        {
            id: 2,
            name: "Product 2",
            url: "../assets/images/2.jpg",
            price: "€50",
            category_id: 1,
            shortDescription: "Photoshopped birthday wishes from J-Lo",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula sem, pellentesque et elementum non, luctus sit amet arcu. Duis faucibus, ipsum vel interdum faucibus, nunc velit porta magna, vitae pellentesque purus urna vitae libero. Proin mattis lorem non nisi dictum facilisis. Morbi et nibh turpis. Nunc ultricies nulla diam, vel bibendum justo vehicula quis. Donec ut felis id dolor faucibus placerat. Vivamus facilisis ligula in scelerisque dapibus. Duis sagittis consequat pulvinar. Phasellus pharetra luctus nulla, ut dictum lacus eleifend consectetur. Duis in molestie mauris. Quisque auctor dolor et arcu molestie, ornare aliquam lorem pulvinar. Nam mattis est at nulla tincidunt semper. Aenean nec facilisis nibh, a elementum urna."
        },
        {
            id: 3,
            name: "Product 3",
            url: "../assets/images/3.jpg",
            price: "€350",
            category_id: 2,
            shortDescription: "Having a refreshing icecream with a dictator"
        },
        {
            id: 4,
            name: "Product 4",
            url: "../assets/images/4.jpg",
            price: "€20",
            category_id: 3,
            shortDescription: "Toasting to a hedgehog",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula sem, pellentesque et elementum non, luctus sit amet arcu. Duis faucibus, ipsum vel interdum faucibus, nunc velit porta magna, vitae pellentesque purus urna vitae libero. Proin mattis lorem non nisi dictum facilisis. Morbi et nibh turpis. Nunc ultricies nulla diam, vel bibendum justo vehicula quis. Donec ut felis id dolor faucibus placerat. Vivamus facilisis ligula in scelerisque dapibus. Duis sagittis consequat pulvinar. Phasellus pharetra luctus nulla, ut dictum lacus eleifend consectetur. Duis in molestie mauris. Quisque auctor dolor et arcu molestie, ornare aliquam lorem pulvinar. Nam mattis est at nulla tincidunt semper. Aenean nec facilisis nibh, a elementum urna."
        },
        {
            id: 5,
            name: "Product 5",
            url: "../assets//images/5.jpg",
            price: "€15",
            category_id: 2,
            shortDescription: "Multiple screens with OG Putin",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula sem, pellentesque et elementum non, luctus sit amet arcu. Duis faucibus, ipsum vel interdum faucibus, nunc velit porta magna, vitae pellentesque purus urna vitae libero. Proin mattis lorem non nisi dictum facilisis. Morbi et nibh turpis. Nunc ultricies nulla diam, vel bibendum justo vehicula quis. Donec ut felis id dolor faucibus placerat. Vivamus facilisis ligula in scelerisque dapibus. Duis sagittis consequat pulvinar. Phasellus pharetra luctus nulla, ut dictum lacus eleifend consectetur. Duis in molestie mauris. Quisque auctor dolor et arcu molestie, ornare aliquam lorem pulvinar. Nam mattis est at nulla tincidunt semper. Aenean nec facilisis nibh, a elementum urna."
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