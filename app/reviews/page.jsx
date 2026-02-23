"use client"
import ReviewCard from '@/Components/cards/ReviewCard';
import React, { useEffect, useState } from 'react';
import Loading from '../foods/[id]/loading';

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
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-4xl font-bold'>
                Total <span className='text-yellow-500'>{reviews.length}</span> Found
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-5'>
                {
                    reviews.map((rev) => (
                        <ReviewCard review={rev} key={rev._id} />
                    ))
                }
            </div>
        </div>
    );
};

export default ReviewPage;