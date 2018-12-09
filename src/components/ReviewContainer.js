import React, { Component } from 'react'
//import review component
import Review from './Review'

//Hold Array of reviews
const reviewList = [
    {
        name: "- Lorem",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu",
        rating: 3,
        stars: []
    },
    {
        name: "- Ipsum",
        description: " Dididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu",
        rating: 4,
        stars: []
    },
    {
        name: "- Elit",
        description: "Lorem se cilluolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labo",
        rating: 3,
        stars: []
    },
    {
        name: "- Culpa",
        description: "Lorem se cilluolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labo",
        rating: 2,
        stars: []
    },
    {
        name: "- Nulla",
        description: "Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labo",
        rating: 5,
        stars: []
    }
]

//create stars for rating
const starGenerator = () => {
    for (var i = 0; i < reviewList.length; i++) {
        const stars = reviewList[i].stars
        const revRating = reviewList[i].rating
        const emptyStars=  5 - revRating;
        //Full Stars
        for(var j = 0; j < revRating; j++){
            stars.push(<i class="fas fa-star"></i>);
        }
        // Empty Stars
        for( var k=0; k <emptyStars; k++){
            stars.push(<i class="far fa-star"></i>);
        }
    }
}


export default class ReviewContainer extends Component {
    //Map Array into Review Component
    render() {
        starGenerator();
        return (
            <div className="reviewContainer">
                {reviewList.map((review, key) =>
                    <Review stars = {review.stars} rating={review.rating} description={review.description} author={review.name} key={key}>
                    </Review>
                )}
            </div>
        )
    }
}
