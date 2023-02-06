import React from 'react'
import "./StriveForExcellent.scss"
function StriveForExcellent() {
    return (
        <div className='StriveForExcellent'>
            <div className='StriveForExcellent_ImgAndText'>
                <div className='StriveForExcellent_Text'>
                    <h4>Strive for Excellent</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                    <div className='iconAndspan'>
                        <i class="fa-solid fa-user-graduate"></i>
                        <span>22,931 Yearly Graduates</span>
                    </div>
                    <div className='iconAndspan'>
                        <i class="fa-solid fa-building-columns"></i>
                        <span>150 Universities Worldwide</span>
                    </div>
                </div>
                <div className='StriveForExcellent_Img'></div>
            </div>
        </div>
    )
}

export default StriveForExcellent