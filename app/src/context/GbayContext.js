import { createContext, useState } from "react";

const GbayContext = createContext();  

export const GbayProvider = ({ children }) => {
    
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            url: "/assets/images/1.jpg",
            price: "€20",
            category_id: 1,
            theme_id: 4,
            user_id: 1,
            shortDescription: "Getting a leg hug from your girlfriend",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula sem, pellentesque et elementum non, luctus sit amet arcu. Duis faucibus, ipsum vel interdum faucibus, nunc velit porta magna, vitae pellentesque purus urna vitae libero. Proin mattis lorem non nisi dictum facilisis. Morbi et nibh turpis. Nunc ultricies nulla diam, vel bibendum justo vehicula quis. Donec ut felis id dolor faucibus placerat. Vivamus facilisis ligula in scelerisque dapibus. Duis sagittis consequat pulvinar. Phasellus pharetra luctus nulla, ut dictum lacus eleifend consectetur. Duis in molestie mauris. Quisque auctor dolor et arcu molestie, ornare aliquam lorem pulvinar. Nam mattis est at nulla tincidunt semper. Aenean nec facilisis nibh, a elementum urna."
        },
        {
            id: 2,
            name: "Product 2",
            url: "/assets/images/2.jpg",
            price: "€50",
            category_id: 2,
            theme_id: 3,
            user_id: 1,
            shortDescription: "Photoshopped birthday wishes from J-Lo",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula sem, pellentesque et elementum non, luctus sit amet arcu. Duis faucibus, ipsum vel interdum faucibus, nunc velit porta magna, vitae pellentesque purus urna vitae libero. Proin mattis lorem non nisi dictum facilisis. Morbi et nibh turpis. Nunc ultricies nulla diam, vel bibendum justo vehicula quis. Donec ut felis id dolor faucibus placerat. Vivamus facilisis ligula in scelerisque dapibus. Duis sagittis consequat pulvinar. Phasellus pharetra luctus nulla, ut dictum lacus eleifend consectetur. Duis in molestie mauris. Quisque auctor dolor et arcu molestie, ornare aliquam lorem pulvinar. Nam mattis est at nulla tincidunt semper. Aenean nec facilisis nibh, a elementum urna."
        },
        {
            id: 3,
            name: "Product 3",
            url: "/assets/images/3.jpg",
            price: "€350",
            category_id: 2,
            theme_id: 2,
            user_id: 1,
            shortDescription: "Having a refreshing icecream with a dictator",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula sem, pellentesque et elementum non, luctus sit amet arcu. Duis faucibus, ipsum vel interdum faucibus, nunc velit porta magna, vitae pellentesque purus urna vitae libero. Proin mattis lorem non nisi dictum facilisis. Morbi et nibh turpis. Nunc ultricies nulla diam, vel bibendum justo vehicula quis. Donec ut felis id dolor faucibus placerat. Vivamus facilisis ligula in scelerisque dapibus. Duis sagittis consequat pulvinar. Phasellus pharetra luctus nulla, ut dictum lacus eleifend consectetur. Duis in molestie mauris. Quisque auctor dolor et arcu molestie, ornare aliquam lorem pulvinar. Nam mattis est at nulla tincidunt semper. Aenean nec facilisis nibh, a elementum urna."
        },
        {
            id: 4,
            name: "Product 4",
            url: "/assets/images/4.jpg",
            price: "€20",
            category_id: 3,
            theme_id: 1,
            user_id: 1,
            shortDescription: "Toasting to a hedgehog",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula sem, pellentesque et elementum non, luctus sit amet arcu. Duis faucibus, ipsum vel interdum faucibus, nunc velit porta magna, vitae pellentesque purus urna vitae libero. Proin mattis lorem non nisi dictum facilisis. Morbi et nibh turpis. Nunc ultricies nulla diam, vel bibendum justo vehicula quis. Donec ut felis id dolor faucibus placerat. Vivamus facilisis ligula in scelerisque dapibus. Duis sagittis consequat pulvinar. Phasellus pharetra luctus nulla, ut dictum lacus eleifend consectetur. Duis in molestie mauris. Quisque auctor dolor et arcu molestie, ornare aliquam lorem pulvinar. Nam mattis est at nulla tincidunt semper. Aenean nec facilisis nibh, a elementum urna."
        },
        {
            id: 5,
            name: "Product 5",
            url: "/assets/images/5.jpg",
            price: "€15",
            category_id: 2,
            theme_id: 4,
            user_id: 1,
            shortDescription: "Multiple screens with OG Putin",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula sem, pellentesque et elementum non, luctus sit amet arcu. Duis faucibus, ipsum vel interdum faucibus, nunc velit porta magna, vitae pellentesque purus urna vitae libero. Proin mattis lorem non nisi dictum facilisis. Morbi et nibh turpis. Nunc ultricies nulla diam, vel bibendum justo vehicula quis. Donec ut felis id dolor faucibus placerat. Vivamus facilisis ligula in scelerisque dapibus. Duis sagittis consequat pulvinar. Phasellus pharetra luctus nulla, ut dictum lacus eleifend consectetur. Duis in molestie mauris. Quisque auctor dolor et arcu molestie, ornare aliquam lorem pulvinar. Nam mattis est at nulla tincidunt semper. Aenean nec facilisis nibh, a elementum urna."
        }
    ]);

    // const fetchUser = (username) => {
    //     const url = "http://localhost:9000/users/" + username;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             if(data.results.length !== 0) {
    //             setQuestions(data.results);
    //             setFaultyFetch(false);
    //             setNewGameComponent(false);
    //             } else {
    //             setFaultyFetch(true);
    //             setNewGameComponent(true);
    //             }
    //             setAPIcalled(true);
    //         })
    //         .catch(err => console.log(err));
    // }

    const [users, setUsers] = useState([
        {
            id: 1,
            username: "Test", 
            email: "test@test.com",
            password: "testtest"
        }
    ]);

    const [categories, setCategories] = useState([
        {
            id: 1, 
            name: "Art"
        },
        {
            id: 2,
            name: "Shrimps"
        },
        {
            id: 3,
            name: "Coffee"
        },
        {
            id: 4,
            name: "Marvel"
        }
    ]);

    const [themes, setThemes] = useState([
        {
            id: 1, 
            name: "React"
        },
        {
            id: 2,
            name: "Javascript"
        },
        {
            id: 3,
            name: "Coffeescript"
        },
        {
            id: 4,
            name: "Shrimpstack"
        },
    ]);
    const [cart , setCart] = useState([
        {
            id: 3,
            name: "Product 3",
            url: "../assets/images/3.jpg",
            price: "€350",
            category_id: 2,
            user_id: 1,
            shortDescription: "Having a refreshing icecream with a dictator"
        },
        {
            id: 5,
            name: "Product 5",
            url: "../assets//images/5.jpg",
            price: "€15",
            category_id: 2,
            user_id: 1,
            shortDescription: "Multiple screens with OG Putin",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ligula sem, pellentesque et elementum non, luctus sit amet arcu. Duis faucibus, ipsum vel interdum faucibus, nunc velit porta magna, vitae pellentesque purus urna vitae libero. Proin mattis lorem non nisi dictum facilisis. Morbi et nibh turpis. Nunc ultricies nulla diam, vel bibendum justo vehicula quis. Donec ut felis id dolor faucibus placerat. Vivamus facilisis ligula in scelerisque dapibus. Duis sagittis consequat pulvinar. Phasellus pharetra luctus nulla, ut dictum lacus eleifend consectetur. Duis in molestie mauris. Quisque auctor dolor et arcu molestie, ornare aliquam lorem pulvinar. Nam mattis est at nulla tincidunt semper. Aenean nec facilisis nibh, a elementum urna."
        }
    ])

    const [loggedInUser, setLoggedInUser] = useState(null);

    return <GbayContext.Provider value={{
        products,
        users,
        setUsers,
        loggedInUser,
        setLoggedInUser,
        themes,
        categories,
        cart,
        setCart
    }}>{children}</GbayContext.Provider>;
}

export default GbayContext;