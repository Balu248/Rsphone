import React, { useState } from 'react'
import Nav from './Nav'

const Viewphone = () => {
    const [dphone, xsphone] = useState(
        [
            { "brand": "Apple", "model": "iPhone 14 Pro", "year": 2022, "manufactureDate": "2022-09-10", "warranty": "2 years", "price": 1299, "discount": "10%", "image": "https://m.media-amazon.com/images/I/61XO4bORHUL._UF1000,1000_QL80_.jpg" },
            { "brand": "Samsung", "model": "Galaxy S23 Ultra", "year": 2023, "manufactureDate": "2023-01-22", "warranty": "3 years", "price": 1399, "discount": "15%", "image": "https://m.media-amazon.com/images/I/71lD7eGdW-L._UF1000,1000_QL80_.jpg" },
            { "brand": "OnePlus", "model": "11R", "year": 2023, "manufactureDate": "2023-03-14", "warranty": "2 years", "price": 499, "discount": "12%", "image": "https://m.media-amazon.com/images/I/613SAOPmLeL._UF1000,1000_QL80_.jpg" },
            { "brand": "Google", "model": "Pixel 7", "year": 2022, "manufactureDate": "2022-10-05", "warranty": "2 years", "price": 699, "discount": "8%", "image": "https://m.media-amazon.com/images/I/61eTdIOfV1L.jpg" },
            { "brand": "Xiaomi", "model": "Mi 13 Pro", "year": 2023, "manufactureDate": "2023-02-01", "warranty": "1 year", "price": 599, "discount": "20%", "image": "https://m.media-amazon.com/images/I/61RvCwjI7dL._UF1000,1000_QL80_.jpg" },
            { "brand": "Realme", "model": "Narzo 60", "year": 2023, "manufactureDate": "2023-04-20", "warranty": "2 years", "price": 299, "discount": "10%", "image": "https://rukminim2.flixcart.com/image/704/844/xif0q/mobile/t/s/y/narzo-60-5g-rmx3750-realme-original-imagrht2yzyc2jyj.jpeg?q=20&crop=false" },
            { "brand": "Motorola", "model": "Edge 40", "year": 2023, "manufactureDate": "2023-06-10", "warranty": "2 years", "price": 549, "discount": "18%", "image": "https://m.media-amazon.com/images/I/71gL3+m6uuL.jpg" },
            { "brand": "Vivo", "model": "V27 Pro", "year": 2023, "manufactureDate": "2023-03-25", "warranty": "1 year", "price": 459, "discount": "14%", "image": "https://m.media-amazon.com/images/I/41AHytIiTdL.jpg" },
            { "brand": "Oppo", "model": "Reno8 T", "year": 2023, "manufactureDate": "2023-02-12", "warranty": "2 years", "price": 529, "discount": "11%", "image": "https://kirtisales.in/wp-content/uploads/2022/09/OPPO-2359-RENO-8-8-128-5G-50.jpg" },
            { "brand": "Nokia", "model": "X30 5G", "year": 2022, "manufactureDate": "2022-11-18", "warranty": "1 year", "price": 479, "discount": "13%", "image": "https://m.media-amazon.com/images/I/215lIIkByVL._UF894,1000_QL80_.jpg" },
            { "brand": "Asus", "model": "ROG Phone 6", "year": 2022, "manufactureDate": "2022-08-01", "warranty": "2 years", "price": 999, "discount": "17%", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUkqY2WCacxWA3jDZS9eckoplqxazkbRQAA&s" },
            { "brand": "Infinix", "model": "Zero 5G", "year": 2023, "manufactureDate": "2023-05-15", "warranty": "1 year", "price": 269, "discount": "16%", "image": "https://m.media-amazon.com/images/I/71+BcjHqqkL.jpg" }
        ]

    )
    return (
        <div className='bg-primary-subtle p-4 rounded'>
            <Nav />
            <div className="col">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {dphone.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card h-100">
                                                <img src={value.image} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.brand} {value.model}</h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary">{value.year}</h6>
                                                    <p class="card-text">Price: ${value.price}Warranty: {value.warranty}</p>
                                                    <p class="card-text"><b>Discount:</b> {value.discount}</p>
                                                    <p class="card-text">MFD: {value.manufactureDate}</p>
                                                    <a href="#" class="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Viewphone