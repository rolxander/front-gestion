import React from 'react'
import './search.css'
import styled from 'styled-components'
import UploadFIles from './components/uploadfiles'
import SearchWidtget from '../search_widtget'

const  Search  = () =>{
    return(
    <>
        <div className="container">
            <div className="header">
                
            </div>
            <div className="side-1">

            </div>
            <div className="container-input">
                <div className="logo">
                    Search
                </div>
                <div className="input-search">
                        <SearchWidtget/>
                </div>
            </div>
            <div className="side-2">
                <UploadFIles/>
            </div>
            <div className="footer"></div>
        </div>
    </>)
}

export default Search