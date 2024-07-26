import { Add, Close, Delete } from "@mui/icons-material";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllGames = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);

    
    useEffect(()=>{
        const fetchGames = async () => {
            const response = await fetch("./api/games");
            // console.log(response)
            const gamesData = await response.json();
            console.log(gamesData);
            setGames(gamesData);
            setIsLoading(false)
            getCategories();

        };
        fetchGames();
    }, [])

    const getCategories = async () => {
        await fetch('./api/categories')
          .then(res => res.json())
          .then(data => {
            setCategories(data);
          })
          .catch(err => alert(err))
          .finally(()=>{
              setIsLoading(false);
          })
    }

    const addCategory = (category) => {
        if(!selectedCategories.includes(category)){
            setSelectedCategories(prev => ([...prev, category]))
        }
    }

    const removeCategory = (category) => {
        if(selectedCategories.includes(category)){
            const removedList = selectedCategories.filter((item) => (item !== category));
            setSelectedCategories(removedList);
        }
    }

    const resetCategory = () => {
        setSelectedCategories([]);
    }

    useEffect(()=>{
        if(selectedCategories.length === 0){
            setFilteredGames(games);
        }else{
            setFilteredGames(games.filter((item)=>(selectedCategories.includes(item.category.name))))
        }

    },[selectedCategories, games])

    const deleteItem = async (id) => {
        const deleteItem = await fetch(`/api/games/${id}`,{
            method: "DELETE"
        })
        window.location.reload();
    }





    
    if(isLoading){
        return(
            <h1>Loading . . .</h1>
        )
    }
    console.log(games)
    // console.log(categories)
    return (
        <>
            <div className="menuContent">
                {/* <div className="categories">
                {
                    categories.map((category)=> {
                        return(
                            <div onClick={()=>{
                                if(selectedCategories.includes(category.name)){
                                    removeCategory(category.name);
                                    
                                }else{
                                    addCategory(category.name);
                              
                                }
                            }} className={selectedCategories.includes(category.name)?'selectedCat':'catButton'} key={category.id}>
                                {category.name}
                            </div>
                        )   
                    })
                }
                <div onClick={()=>{resetCategory()}} className={selectedCategories.length>0?'clearCat':'hiddenBtn'}>
                Clear
                <Close/>
                </div>
                
                </div> */}
                {/* <div className="allGames">
                {filteredGames.map(item => {
                    return (
                        <div className="itemCard" key={item.id}>
                            <img src={item.imageUrl} className="itemCardImg"/>
                            <p>{item.name}</p>


                            <p>${item.price}</p>
                            <div> */}
                                {/* <Link to={`/menu/${item.id}`}><button className="toSingleItem">Order Now</button></Link> */}
                                {/* {admin?<div onClick={()=>{deleteItem(item.id)}} className="deleteReview"><Delete/></div>:<></>} */}
                            {/* </div>
                        </div>
                    
                    )
                })} */}
                {/* {admin?<Link to="/admin/newproduct">
                    <div className="itemCard">
                    <Add/>
                    </div>
                </Link>:<></>} */}
                {/* </div> */}
            </div>
        </>
    );
};

export default AllGames;