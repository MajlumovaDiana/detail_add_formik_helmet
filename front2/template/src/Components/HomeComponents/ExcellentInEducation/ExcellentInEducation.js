import React from 'react'
import "./ExcellentInEducation.scss"
function ExcellentInEducation() {
    return (
        <div className='ExcellentInEducation'>
            <div className='ExcellentInEducation_ImgAndText'>
                <div className='ExcellentInEducation_Img'></div>
                <div className='ExcellentInEducation_Text'>
                    <h4>We Are Excellent In Education</h4>
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
            </div>
        </div>
    )
}

export default ExcellentInEducation