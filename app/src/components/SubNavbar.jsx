import "./SubNavbar.scss"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";

function SubNavbar (content) {

    const [subContent, setSubContent] = useState(content)

    console.log(subContent.content,"jelle");


    // Handler on/out mouse over
    const [isHoveringTheme, setIsHoveringTheme] = useState(false);
    const [isHoveringCategory, setIsHoveringCategory] = useState(false);

    const handleMouseOverTheme = () => {
        setIsHoveringTheme(true);
    };

    const handleMouseOutTheme = () => {
        setIsHoveringTheme(false);
    };

    const handleMouseOverCategories = () => {
        setIsHoveringCategory(true);
    };

    const handleMouseOutCategories = () => {
        setIsHoveringCategory(false);
    };


    //----------------------------------------------------------------//

    const [theme, setTheme] = useState('');

    const [category, setCategory] = useState('');

    const fetchAllThemes = async () => {
        fetch('http://localhost:9000/themes')
            .then(res => res.json())
            .then(data => {
                console.log(data.response)
                setTheme(data.resultData);
                console.log(data)
            })
            .catch(err=> console.log(err))
    }
    useEffect(()=>{
        fetchAllThemes()
            .then(()=> console.log(theme))
    }, [])

    const fetchAllCategories = async () => {
        fetch('http://localhost:9000/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data.response)
                setCategory(data.resultData);
                console.log(data)
            })
            .catch(err=> console.log(err))
    }
    useEffect(()=>{
        fetchAllCategories()
            .then(()=> console.log(theme))
    }, [])

    return (
        <div className="container SubNavbar" >

            {subContent.content === "themes" ? (
            <div onMouseOver={handleMouseOverTheme} onMouseOut={handleMouseOutTheme}>
            <nav>
                <ul>
                    <li>
                        <Link to="/themes">Themes</Link>
                    </li>


                    {isHoveringTheme ?(
                        <div>
                            <ul>
                                {theme.map(theme => <li>{theme.theme_name}</li>)}
                            </ul>
                        </div>
                        ):(<div></div>)}

                </ul>
            </nav>
            </div>
            ) : (
            <div onMouseOver={handleMouseOverCategories} onMouseOut={handleMouseOutCategories}>
            <nav>
                <ul>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>

                    {isHoveringCategory ?(
                        <div>
                            <ul>
                                {category.map(category => <li>{category.category}</li>)}
                            </ul>
                        </div>
                    ):(<div></div>)}

                </ul>
            </nav>
            </div>
            )}
        </div>
    )

}

export default SubNavbar