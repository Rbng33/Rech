import React from "react";




function SearchCard(props) {
  const URL = '/DescCreche?name=' + props.name
  return (
    <div className="max-w-[1000px] justify-self-center ">
      <div className="mx-1  my-3 rounded-2xl bg-white font-inter">
        <div className=" grid  text-center items-center w-full border-b-4 border-gray-100 border-t-4 my-3 ">
          <h1 className="font-inter text-3xl  text-rose-950 font-semibold  my-2 justify-self-center">{props.name} </h1>
        </div>
        <div className="grid sm:grid-cols-2 ">
        <div className=" grid  rounded-xl justify-center items-center  justify-self-center ">
           <img src={ props.image[1] }  className="justify-center ring-2 ring-rose-50"/>  
         </div>
        <div className="grid justify-center pl-5 ">
          <h1 className="font-inter mt-5 mb-3 justify-self-center "> <span className="font-bold"> Nom : </span> {props.name} </h1>
          <h1 className="font-inter my-3 justify-self-center"> <span className="font-bold"> Location : </span>  {props.Commune} , {props.Wilaya} </h1>
          <h1 className="font-inter my-3  justify-self-center "> <span className="font-bold"> Description : </span> {props.Description} </h1>
          <a href={URL} className="justify-self-center" >
            <button className=" bg-red-400 text-white py-2 px-2  w-fit  rounded-md font-medium text-center mt-3 mb-5  ring-2 ring-gray-100 hover:bg-red-600 hover:scale-105 duration-0" title="Supprimer">
              Voir Plus
            </button>
          </a>
        </div>
        

        </div>
      </div>
 


    </div>
  )


}

export default SearchCard; 