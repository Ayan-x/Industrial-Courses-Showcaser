import React from 'react';
import Card from './Card';
import { useState } from 'react';

function Cards({courses,category}){
    const[likedCourses,setLikedCourses] = useState([]);

   
    function getCourses(){
        if(category==="All"){
        let allCourses = [];

        Object.values(courses).forEach(
            (array) =>{
                array.forEach(courseData=>{
                    allCourses.push(courseData);
                })
            }
        )
        return allCourses;
        }
        else{
            // To pass specific category data
            return courses[category];
        }
    }


    return(
        <div className='flex flex-wrap justify-center gap-5 mb-4'>
            {
            getCourses().map((course) => {
                return <Card  key={course.id} course={course} likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}/>
            })
        }
        </div>
    );
}
export default Cards;