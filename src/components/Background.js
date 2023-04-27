import React from "react";
import blobMerah from "../img/blob-merah.svg";
import blobKuning from "../img/blob-kuning.svg";
import blobBiru from "../img/blob-biru.svg";
import group1 from "../img/group-1.svg";
import kuningTengah from "../img/blob-kuning-tengah.svg";
import merahTengah from "../img/blob-merah-tengah.svg";
import matahariKanan from "../img/matahari-kanan.svg";
import matahariKiri from "../img/matahari-kiri.svg";
import kuningTengah2 from "../img/blob-kuning-tengah-2.svg";
import merahTengah2 from "../img/blob-merah-tengah-2.svg";
import group2 from "../img/group-2.svg";
import merahBawah from "../img/blob-merah-bawah.svg";

function Background() {
  return (
    <div className="absolute -z-10 w-screen">
      <div className="w-full">
        <div className="flex w-screen">
          <div className="mt-64">
            <img src={blobMerah} alt="" className="" />
          </div>
          <div className="ml-14 mt-96 mr-80">
            <img src={blobBiru} alt="" className="" />
          </div>
          <div className="mt-60 ml-96">
            <img src={blobKuning} alt="" className=" " />
          </div>
        </div>
        <div className="container-bg flex">
          <img src={group1} alt="" className="pt-36" />
          <img src={kuningTengah} alt="" className="pt-96 mt-28" />
          <img src={merahTengah} alt="" className="pl-96 ml-96 mb-56" />
          <img src={matahariKanan} alt="" className="pt-52" />
        </div>
        <div className="container-bg flex ">
          <img src={matahariKiri} alt="" className="mt-24 pt-96" />
          <img src={kuningTengah2} alt="" className="mt-20 ml-96 pt-96" />
          <img src={merahTengah2} alt="" className=" ml-60" />
          <img src={group2} alt="" className="justify-end mt-36 ml-10" />
        </div>
        <div className="container-bg flex mt-96">
          <img src={blobBiru} alt="" className="flex pt-80 mr-96 pr-4" />
          <img src={kuningTengah} alt="" className="ml-96 pl-80 pt-96" />
        </div>
        <div className="container-bg flex">
          <img src={kuningTengah} alt="" className="mt-36 mr-96 pr-24" />
          <img src={merahBawah} alt="" className="mt-80 ml-96 pl-80 " />
        </div>
        <div className="container-bg flex mt-36">
          <img src={blobMerah} alt="" className="" />
          <img src={blobBiru} alt="" className="text-center mx-auto " />
        </div>
      </div>
    </div>
  );
}

export default Background;
