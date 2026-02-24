import FoodCard from '@/src/Components/cards/FoodCard';
import React from 'react';
import CartItems from './[id]/CartItems';
import InputSearch from '@/src/Components/InputSearch/InputSearch';

const getFoods= async(search)=>{
    const res = await fetch (
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
    )
    const data= await res.json()
    await new Promise((resolve)=>setTimeout(resolve, 3000))
    return data.foods || [];
}
const foodsPage = async ({searchParams}) => {
    const {search = ""} = await searchParams
    const foods = await getFoods(search)
    return (
        <div className=' px-4'>
            <h2 className='text-4xl font-bold'>Total <span className='text-yellow-500'>{foods.length}</span> Found</h2>
            <div>
                <InputSearch></InputSearch>
            </div>

            <div className='flex gap-5'>
            <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-5'>
                {
                    foods.map(food=><FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
            <div className="w-[250px] border-2 rounded-xl p-4">
                <h2 className='text-2xl font-bold'>Cart Items</h2><hr/>
                <CartItems></CartItems>
            </div>
            </div>

            
        </div>
    );
};

export default foodsPage;