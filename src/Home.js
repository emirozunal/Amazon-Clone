import React from 'react'
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className='home'>
        
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''/>
        
        <div className='home__row'>
        <Product
        id='12321341'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={11.96}
        rating={5}
        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />

        <Product
        id='123213412'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={17.96}
        rating={4}
        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />

        </div>

        <div className='home__row'>
        <Product
        id='123213413'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={16.96}
        rating={5}
        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />

        <Product
        id='123213414'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={15.96}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
        />

        <Product
        id='123213415'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={9.96}
        rating={5}
        image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
        />
        </div>

        <div className='home__row'>

        <Product
        id='123213416'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={7.96}
        rating={4}
        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
        />

        </div>

        </div>
    )
}

export default Home
