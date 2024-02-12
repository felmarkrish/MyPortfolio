/* global $ */

import React, { useEffect } from 'react';
import './sport.css';
import image1 from '../../components/sports/image/city11.jpg';
import image2 from '../../components/sports/image/city2.jpg';
import image3 from '../../components/sports/image/city3.jpg';
import image4 from '../../components/sports/image/industrial1.jpg';
import image5 from '../../components/sports/image/industrial2.jpg';
import image6 from '../../components/sports/image/industrial3.jpg';
import image7 from '../../components/sports/image/nature1.jpg';
import image8 from '../../components/sports/image/nature2.jpg';
import image9 from '../../components/sports/image/nature3.jpg';
import 'jquery';
import './jquery.filterizr.min.js';

const Sport = () => {
    useEffect(() => {
        $(document).ready(() => {
            $('.filtr-container').filterizr({});
        });
    }, []);
    return (
        <div id='sport-holder' className=''>
            <div className='wrap'>
                <div className='sport-container'>
                    <h3>My Sports</h3>
                    <div className='sport-img-box'>
                            <ul>
                                <li data-filter='all'>View All</li>
                                <li data-filter='1'>Basketball</li>
                                <li data-filter='2'>Chess</li>
                                <li data-filter='3'>Tong Hits</li>
                            </ul>
                            <div className='filtr-container'>
                                <div className='filtr-item' data-category='1' data-sort='value'>
                                    <img src={ image1 } alt='' />
                                </div>
                                <div className='filtr-item' data-category='1' data-sort='value'>
                                    <img src={ image1 } alt='' />
                                </div>
                                <div className='filtr-item' data-category='1' data-sort='value'>
                                    <img src={ image1 } alt='' />
                                </div>
                                <div className='filtr-item' data-category='2' data-sort='value'>
                                    <img src={ image1 } alt='' />
                                </div>
                                <div className='filtr-item' data-category='2' data-sort='value'>
                                    <img src={ image1 } alt='' />
                                </div>
                                <div className='filtr-item' data-category='2' data-sort='value'>
                                    <img src={ image1 } alt='' />
                                </div>
                                <div className='filtr-item' data-category='3' data-sort='value'>
                                    <img src={ image1 } alt='' />
                                </div>
                                <div className='filtr-item' data-category='3' data-sort='value'>
                                    <img src={ image1 } alt='' />
                                </div>
                                <div className='filtr-item' data-category='3' data-sort='value'>
                                    <img src={ image1 } alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Sport;
