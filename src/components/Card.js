import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
function Card({course,likedCourses,setLikedCourses}){

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            // if course is liked
            setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
            toast.warning("like removed");
        }else{
            // if course if liked
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
                
            }
            else{
                setLikedCourses((prev)=> [...prev, course.id]);
            }
            toast.success("liked");
        }
    } 
    function clickhandler2(){
        
    }
    return(
        <div className='w-[300px] bg-bgDark bg-opacity-80
         rounded-md overflow-hidden'>
            <div className='relative'>
            <img src={course.image.url} alt=''></img>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute
            right-2 bottom-[-11px] grid place-items-center'>
            <button onClick={clickHandler}>
                {!likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem"/>)
                 :(<FcLike fontSize="1.75rem" color='red' />)
    }
             </button>
           
            </div>
            </div>
            
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='text-white mt-2' onClick={clickhandler2}>
                    {
                course.description.length>100 ? ((course.description.substr(0,100))+"...")
                :(course.description)
                }
                </p>
            </div>
            
            
            
        </div>
    )

}
export default Card;