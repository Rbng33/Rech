import React from "react";
import Navbar from "../../Navbar";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FaCalendarAlt } from "react-icons/fa";
SwiperCore.use([Navigation]);


function DetailsCreche(props) {
  const sliderRef = useRef();
  const Images = props.image;
  const Avis = props.Avis;
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      {/* <div>
        <HeaderDescription />
  </div> */}

      <a><div className="fixed bottom-5 right-5 z-50 ring-4 ring-[#ff706e] rounded-xl flex justify-evenly bg-[#ffad9e] py-4 px-10 hover:cursor-pointer<">

        <FaCalendarAlt className="mt-1 mr-1" />
        <span> Envoyer une demande</span>
      </div>
      </a>

      {/* <FixedButton/> */}





      <div className="mt-[2%] mx-auto max-w-[1000px] my-10 rounded-lg border-4 border-[#fc8280] p-5 bg-[#f1c1c0]">
        <div className="px-4 sm:px-0">







          <div className="flex flex-col text-center">
            <h1 className="text-4xl font-inter font-bold mb-5">Creche {props.name}</h1>
          </div>

        </div>
        <div className="mt-6  ">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Nom du propriétaire
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.proprio}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Addresse
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.adr}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Type d'etablissement
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.TypeEtab}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Type d'accueil
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.TypeAcc}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Type de pedagogie
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.Peda}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Age d'accueil
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                entre {props.MinAge} et {props.MaxAge} ans
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Capacites d'accueil
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.Capacite} places
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Places disponibles
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.PlaceDispo} places
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Jours d'accueil
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-bold sm:col-span-2 sm:mt-0">
                <ul className="flex flex-row">
                  <div>
                    <li>Dimanche : </li>

                    <li>Lundi    : </li>
                    <li>Mardi    : </li>
                    <li>Mercredi : </li>
                    <li>Jeudi    : </li>
                    <li>Vendredi    : </li>
                    <li>Samedi    : </li>
                  </div>
                  <div className="ml-3 font-medium">
                    <li>{props.hdim1} - {props.hdim2} </li>
                    <li>{props.hlun1} - {props.hlun2} </li>
                    <li>{props.hmar1} - {props.hmar2} </li>
                    <li>{props.hmer1} - {props.hmer2} </li>
                    <li>{props.hjeu1} - {props.hjeu2} </li>
                    <li>{props.hven1} - {props.hven2} </li>
                    <li>{props.hsam1} - {props.hsam2} </li>

                  </div>
                </ul>
              </dd>
            </div>



            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Services proposes
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                <ul>
                  <li>- Alimentation </li>
                  <li>- Transport </li>
                  <li>- Présence du Médecin </li>
                  <li>- Prendre en charge les enfants handicapés </li>
                  <li>- Classes préparatoires </li>
                </ul>
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">


              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.Email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Numero de telephone de la creche
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.Tel}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                Paiement mensuel
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.Paiement} DA
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-bold leading-6 text-rose-500 ld:text-rose-950">
                A propos
              </dt>
              <dd className="mt-1 text-sm leading-6 text-blue-950 font-semibold sm:col-span-2 sm:mt-0">
                {props.Description}
              </dd>
            </div>

          </dl>


        </div>

      </div>
      <div>
        <h2 className="text-3xl font-bold font-[Inter] tracking-tight text-blue-950 text-center my-10 sm:text-4xl">
          Geolocalisation de la creche
        </h2>
        <div className="flex justify-center max-w-[800px] mx-auto rounded-xl ring-4 bg-[#f7d7d6] ring-[#fc8280] px-5 py-5  mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.97278256306!2d3.0813428!3d36.723214899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128faddf7f824d7f%3A0xfb77ea53037312b2!2sCreche%20Amoula!5e0!3m2!1sfr!2sdz!4v1682460139044!5m2!1sfr!2sdz"

            className=" max-w-[800px] w-[90%]  xxs:h-[360px] md:h-[550px] "
            allowfullscreen=""
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


      </div>
      <h1 className="text-center mt-20 text-3xl font-bold font-[Inter]  tracking-tight text-blue-950 sm:text-4xl"> Images </h1>
      {/* Swiper */}
      <div className="flex  mx-auto max-w-[1050px] mt-7 py-5 px-0  gap-2 pio:gap-4 sm:gap-8  items-center  ">
        <div className="flex xxs:ml-[5%] ml-[1%] z-50" >
          <button onClick={() => sliderRef.current?.slidePrev()} className="bg-red-100   flex  justify-center items-center xxs:w-10 xxs:h-10 w-5 h-5 rounded-full ring ring-[#fc8280] shadow focus:outline-none hover:bg-white hover:ring-rose-900 hover:scale-125 duration-300">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="chevron-left w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <Swiper freeMode={true} grabCursor={true}
          Pagination={true}


          onSwiper={it => (sliderRef.current = it)} modules={[Navigation]}
          className="mySwiper bg-rose-100 w-[100%] rounded-xl ring-4  ring-[#fc8280] "
          slidesPerView={1} spaceBetween={25}



          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            567: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            808: {
              slidesPerView: 1,
              spaceBetween: 25,
            },


          }}
        >

          {Images.map((slide, index) => {


            return (

              <SwiperSlide key={index} className="   mx-auto   flex   my-4 bg-whtie     " >

                <img className=" mx-auto mt-2  w-[95%] " src={Images[index]} alt="" />




              </SwiperSlide>



            );
          })}



        </Swiper>

        <div className="flex xxs:mr-[5%] mr-[1%] z-50" >
          <button onClick={() => sliderRef.current?.slideNext()} className="bg-red-100 ring ring-[#fc8280]   flex  justify-center items-center xxs:w-10 xxs:h-10 w-5 h-5 rounded-full shadow focus:outline-none hover:bg-white hover:ring-rose-900 hover:scale-125 duration-300">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="chevron-right w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

      </div>
      {/* Fin swiper */}


      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center lg:mx-0">
            <h2 className="text-3xl font-bold font-[Inter]  tracking-tight text-blue-950 sm:text-4xl">
              Consulter les retours de nos utilisateurs sur cette creche
            </h2>

          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-rose-400 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Avis.map((post) => (
              <article

                className="flex max-w-xl flex-col items-start justify-between"
              >




                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>

                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>

                <div className="group relative">

                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>

              </article>
            ))}
          </div>
        </div>
      </div>


    </>
  );
}


export default DetailsCreche;