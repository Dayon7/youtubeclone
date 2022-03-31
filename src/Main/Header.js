import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <i className='fas fa-bars'></i>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png' />
            </div>  
        <div className='header-center'>
            <div className='search'>
                <input type="text" placeholder='Search' className="search-box" />
                <button className="search-btn">
                    <i className='fas fa-search'></i>
                </button>
            </div>
        </div>
        <div className='header-right'>
            <div className='user-info'>
                <i className='far fa-comment-alt'></i>
                <i className='far fa-bell'></i>
                <img className='avatar' src='https://wwbmmc.ca/wp-content/uploads/2020/12/kisspng-computer-icons-avatar-icon-design-male-teacher-5ade176c636ed2.2763610715245044284073.png' />
            </div>
            <div className='upload'>
                <button className='upload-btn'>
                    <i className='fas fa-long-arrow-alt-up'></i>
                    {" "} Upload
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header