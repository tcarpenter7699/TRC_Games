import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const addProduct = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [gameName, setGameName] = useState("")
    const [gamedeveloper, setDeveloper] = useState("")
    const [gameyear, setYear] = useState("")
    const [gameplatform, setPlatform] = useState("")
    const [gamecategory, setCategory] = useState("")
    const [gamedescription, setDescription] = useState("")


    const newGame = async () => {
        const response = await fetch(`/api/games`,
            {
                method: "POST",
                body: JSON.stringify({
                    imageUrl: image,
                    name: gameName,
                    developer: gamedeveloper,
                    year: gameyear, 
                    platform: gameplatform, 
                    category: gamecategory,
                    description: gamedescription,
                    
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            }
        )
        navigate("/menu");
    }


    return (
        <>
            <div className="newItem">
                <form onSubmit={()=>{newGame()}} className="newItemForm">
                    <input type="text" onChange={(e)=>{setImage(e.target.value)}} placeholder="Image URL" required/>
                    <input type="text" onChange={(e)=>{setGameName(e.target.value)}} placeholder="Game Name" required/>
                    <input type="text" onChange={(e)=>{setDeveloper(e.target.value)}} placeholder="Developer" required/>
                    <input type="text" onChange={(e)=>{setYear(e.target.value)}} placeholder="Year" required/>
                    <input type="text" onChange={(e)=>{setPlatform(e.target.value)}} placeholder="Platform" required/>
                    <input type="text" onChange={(e)=>{setCategory(e.target.value)}} placeholder="Category" required/>
                    <input type="text" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description"/>
                    <input type="submit"/>
                </form>

            </div>
        </>
    )
        
    

}

export default addProduct;