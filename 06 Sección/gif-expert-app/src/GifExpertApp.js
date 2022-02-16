import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X','Dragon Ball']);
    
    // const handleAdd = () => {
    //     //setCategories([...categories,'HunterxHunter']);
    //     setCategories(cats=>[...cats,'HunterxHunter']);
    // }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map((category,i) =>
                    <GifGrid key={i}
                    category={category}/>
                    )
                }
            </ol>
        </div>
    );
}
