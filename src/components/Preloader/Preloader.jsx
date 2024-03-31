import React from 'react'
import { ReactComponent as LoaderSvg } from "./../../assets/img/preload.svg";
import './Preloader.scss'
export default function Preloader() {
  return (
    <div className='preloader'>
      <div className='container-preloader'>
      <LoaderSvg className="loader-svg"/>
      </div>
  
    </div>
  )
}
