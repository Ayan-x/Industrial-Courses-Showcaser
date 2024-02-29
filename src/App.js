import React, { useEffect, useState } from "react";
import NavBar from './components/Navbar';
import { filterData, ApiUrl } from "./data";
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { toast } from "react-toastify";

const App = () => {

  const[courses,setCourses] = useState(null);
  const[loading,setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title)
  
  async function fetchdata() {
    setLoading(true);
      try {
        const res = await fetch(ApiUrl);
        const output = await res.json();
        // save data into variable
        // console.log(data);
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    useEffect(()=>{
      fetchdata();
    },[])
    
  return (
   
  <div className="min-h-screen flex flex-col bg-bgDark3">
    <div >
    <NavBar />

    </div>
    <div className="">
    <div>
    <Filter
     filterData = {filterData}
     category = {category}
     setCategory = {setCategory}
     />
    </div> 
    <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center
    item-center min-h-[50vh] flex-wrap">
    {
        loading ? (<Spinner/>) : (<Cards courses = {courses} category={category}/>)
      }
   </div>
   </div>
    
      
     
    
   </div>
  );
};

export default App;
