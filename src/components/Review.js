import React, { Component } from 'react'

export default class Review extends Component {
    render() {
        return (
            <div className="reviewBox">
                <div className="ratingBox">
                    <div className="stars">
                        {this.props.stars}
                    </div>
                    <div className="rating">
                        {this.props.rating}
                    </div>
                </div>
                <div className="reviewDescription">
                    {this.props.description}
                </div>
                <div className="author">
                    {this.props.author}
                </div>
            </div>
        )
    }
}
