"use client"
import React, { useEffect, useState } from 'react';
import ReviewLoading from './loading';
import ReviewCard from '@/src/Components/cards/ReviewCard';

const ReviewPage = () => {
    const [reviews, setReview] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
            .then(res => res.json())
            .then(data => {
                setReview(data.reviews || [])
                setLoading(false)
            })
    }, [])

    if(loading){
        return <ReviewLoading></ReviewLoading>
    }

    return (
        <div>
            <h2 className='text-4xl font-bold'>
                Total <span className='text-yellow-500'>{reviews.length}</span> Found
            </h2>

            <div className='grid grid-cols-3 my-5 gap-5'>
                {
                    reviews.map((rev) => (
                        <ReviewCard review={rev} key={rev._id} ></ReviewCard>
                    ))
                }
            </div>
        </div>
    );
};

export default ReviewPage;