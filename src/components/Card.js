import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

function Card(props){
    let review = props.review;
    return(
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="rounded-full aspect-square w-[140px] h-[140px] z-25" src={review.image}/>
                <div className="rounded-full aspect-square w-[140px] h-[140px] bg-violet-500 absolute top-[-6px] z-[-20] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="text-2xl font-bold tracking-wider capitalize">{review.name}</p>
                
                <p className="text-sm uppercase text-violet-300">{review.job}</p>

            </div>

            

            <div className="mx-auto mt-5 text-center text-violet-400">
                <FaQuoteLeft/>
            </div>

            <div className="mt-4 text-center text-slate-500">
                <p>{review.text}</p>
            </div>

            <div className="mx-auto mt-5 text-center text-violet-400">
                <FaQuoteRight/>
            </div>

            

        </div>
    );
}
export default Card;