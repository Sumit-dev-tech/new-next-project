"use client"
import React, { useEffect, useState } from 'react';
import supabase from '@/supabase/config';
// import { FaWater } from "react-icons/fa6";

const Home = () => {
    const [data, setData]= useState([]);
    const [loading, setLoading]=useState(true)
    useEffect(() => {
        const getData = async () => {

            let { data: schoollist, error } = await supabase
                .from('schoollist')
                .select('*');
                if (error){
                    console.log(error);
                }
                if(schoollist){
                    console.log(schoollist)
                    setData(schoollist);
                    setLoading(false);
                }

        }
        getData();
        
    }, [])
    return loading ? <p>Loading...</p> : (
        <>
            {JSON.stringify(data,null)}
            <div>
            
            </div> 
        </>
    )
}

export default Home
