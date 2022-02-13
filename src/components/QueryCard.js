import React from 'react'; 
import {AiTwotoneDelete} from 'react-icons/ai'; 
import { FaHeart } from 'react-icons/fa';
import {FiEdit} from 'react-icons/fi'; 
import {Link } from 'react-router-dom'; 
import { toast } from 'react-toastify';
function QueryCard({title,query, tags, name, email ,_id, YoursQuery ,yourqueriesFun}) {
  const handleDeleteQuery= async()=>{
    console.log(_id);
    await fetch(`http://localhost:5000/delete-query/${_id}`, {
     method:"Delete", 
     headers:{
       'Content-Type':'application/json'
     }, 
     
   })
    toast.success("Deleted");
    yourqueriesFun();
  }
  return (
  <div className="md:mx-40 border-2 border-[#0e1e2c] border-b-yellow-400 p-1 ">
      <div className="flex w-full px-4 py-5 bg-cover  bg-[#0c1824] ">
      <div className="flex w-full  bg-cover bg-[#0f2b44] ">
        <div className="card-body w-full flex">
    <Link to={`/polls/${_id}`}>
          <h1 className="card-title font-bold text-2xl  text-gray-300">{title}</h1> 
           <div>
            <p className='text-[#FFE400] font-bold text-xl underline '>{name} </p>
            <span className='text-xs font-extralight'>{email}</span>
           </div>
          <p className='font-medium text-gray-200 mt-2'>{query}</p> 
    </Link>  
          <div className="card-actions w-full pt-3">
            <button className="bg-transparent hover:bg-blue-900 text-blue-800 font-semibold hover:text-white py-1 px-2 border  hover:border-transparent rounded"><FaHeart/></button>
            {YoursQuery?(<>
              <button className='bg-transparent hover:bg-blue-900 text-blue-800 font-semibold hover:text-white py-1 px-2 border  hover:border-transparent rounded'><FiEdit/></button>
            <button onClick={handleDeleteQuery} className='bg-transparent hover:bg-blue-900 text-blue-800 font-semibold hover:text-white py-1 px-2 border  hover:border-transparent rounded'><AiTwotoneDelete/></button>
            </>):null}
          </div>
          <div className='place-items-end flex justify-end'>
            <button className="btn btn-outline btn-xs cursor-default">{tags}</button>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default QueryCard
