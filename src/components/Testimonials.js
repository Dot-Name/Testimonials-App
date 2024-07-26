import { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
function Testimonials(props){
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length -1);
        }
        else{
            setIndex(index-1);
        }
    }
    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function surpriseHandler(){
        setIndex(Math.floor(Math.random()*reviews.length));
        console.log(index);
    }

    return(
        <div className="w-[85vw] md:w-[700px] justify-center items-center bg-white flex-col mt-10 p-10 transition-all shadow-md duration-1000 hover:shadow-xl rounded-md">
            <Card review = {reviews[index]}/>
            <div className="flex justify-center gap-3 text-3xl font-bold mt-9 text-violet-400">
                <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500"><FiChevronLeft/></button>
                <button onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500"><FiChevronRight/></button>
            </div>

            <div className="flex justify-center mt-6 ">
                <button onClick={surpriseHandler} className="px-10 py-2 text-lg font-bold text-white transition-all duration-200 rounded-md cursor-pointer bg-violet-400 hover:bg-violet-500">
                    Surprise Me
                </button>
            </div>
        </div>
    );
}
export default Testimonials;