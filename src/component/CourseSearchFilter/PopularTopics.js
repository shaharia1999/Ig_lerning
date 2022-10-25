import React from 'react';
import blender from '../../asset/images/popular-topics/blender.png'
import ps from '../../asset/images/popular-topics/adobe-ps.png'
import ai from '../../asset/images/popular-topics/adobe-ai.png'
import bag from '../../asset/images/popular-topics/bag-icon.png'
import connectivity from '../../asset/images/popular-topics/connectivity.png'
import figma from '../../asset/images/popular-topics/figma.png'
import ui from '../../asset/images/popular-topics/ui-ux.png'
import xd from '../../asset/images/popular-topics/ui-ux.png'

const PopularTopics = () => {
    return (
        <div className='relative mt-20 mx-10'>
            <h4>Popular Topics</h4>
            <div className='grid grid-cols-4 gap-5 w-full'>
                <div className='flex items-center justify-center border rounded-full py-2'>
                    <img height="28px" width="28px" src={blender} alt="" />
                        <span>Blender 3D</span>
                </div>
                <div className='flex items-center justify-center border rounded-full py-2'>
                    <img height="28px" width="28px" src={ai} alt="" />
                        <span>Illustrator</span>
                </div>
                <div className='flex items-center justify-center border rounded-full py-2'>
                    <img height="28px" width="28px" src={ui} alt="" />
                        <span>UI/UX Design</span>
                </div>
                <div className='flex items-center justify-center border rounded-full py-2'>
                    <img height="28px" width="28px" src={ps} alt="" />
                        <span>Digital MArketing</span>
                </div>
                <div className='flex items-center justify-center border rounded-full py-2'>
                    <img height="28px" width="28px" src={figma} alt="" />
                        <span>Figma</span>
                </div>
                <div className='flex items-center justify-center border rounded-full py-2'>
                    <img height="28px" width="28px" src={xd} alt="" />
                        <span>Adobe XD</span>
                </div>
                <div className='flex items-center justify-center border rounded-full py-2'>
                    <img height="28px" width="28px" src={bag} alt="" />
                        <span>Business & Comapany</span>
                </div>
                <div className='flex items-center justify-center border rounded-full py-2'>
                <img height="28px" width="28px" src={connectivity} alt="" />
                <span>IA & Big Data</span>
                </div>
            </div>
        </div>
    );
};

export default PopularTopics;