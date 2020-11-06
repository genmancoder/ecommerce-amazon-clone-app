import Product from './Product'
import './Home.css'
function Home(){
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt="" />

             <div className="home__row">
                <Product
                    id="121314"
                    title="SAMSUNG T7 Portable SSD 2TB - Up to 1050MB/s"
                    price={21.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31GEY-L018L._AC_SR400,600_.jpg"
                />
                <Product
                    id="121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                    id="121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={15.60}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31BQ6E7g5EL._AC_SR400,600_.jpg"
                />
             </div>
             <div className="home__row">
                <Product
                    id="121314"
                    title="SAMSUNG T7 Portable SSD 2TB - Up to 1050MB/s"
                    price={21.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31GEY-L018L._AC_SR400,600_.jpg"
                />
                <Product
                    id="121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                    id="121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={15.60}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31BQ6E7g5EL._AC_SR400,600_.jpg"
                />
                <Product
                    id="121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={15.60}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31BQ6E7g5EL._AC_SR400,600_.jpg"
                />
             </div>
             <div className="home__row">
             <Product
                    id="121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={15.60}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31BQ6E7g5EL._AC_SR400,600_.jpg"
                />
                <Product
                    id="121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={15.60}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31BQ6E7g5EL._AC_SR400,600_.jpg"
                />
             </div>
        </div>
    )
}

export default Home