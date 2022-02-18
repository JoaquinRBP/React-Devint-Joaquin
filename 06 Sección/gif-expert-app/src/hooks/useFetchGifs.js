import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';
import PropTypes from 'prop-types';
export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    });
    useEffect(()=>{
        getGifs(category)
        .then(imgs => {
                setstate({
                    data:imgs,
                    loading: false
                });
    },[category]);
})
    return state;
}

useFetchGifs.propTypes ={
    category: PropTypes.string.isRequired
}