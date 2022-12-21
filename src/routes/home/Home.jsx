import {Categories} from "../../components/categories/Categories";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";
import {Alert} from "../../components/alert/Alert";

export const Home = () => {

    const rootPath = 'shop';
    const categories = [
        {
            id: 1,
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            route: `${rootPath}/hats`,
        },
        {
            id: 2,
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            route: `${rootPath}/jackets`,
        },
        {
            id: 3,
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            route: `${rootPath}/sneakers`,
        },
        {
            id: 4,
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            route: `${rootPath}/womens`,
        },
        {
            id: 5,
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            route: `${rootPath}/mens`,
        },
    ];



    // const [countdown, setCountdown] = useState(10)
    // useEffect(() => {
    //     if (countdown > 0) {
    //         setTimeout(()=> setCountdown(countdown - 1) ,1000)
    //     } else {
    //         setCountdown("boom")
    //     }
    // },[countdown])
    //


    // popup
    Alert();

    return (
        <Categories categories={categories} />
    );
}