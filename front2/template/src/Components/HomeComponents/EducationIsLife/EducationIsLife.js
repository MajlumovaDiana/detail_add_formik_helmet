import React from 'react'
import "./EducationIsLife.scss"
function EducationIsLife() {
  return (
    <div className='EducationIsLife'>
    <div className='EducationIsLife_ImgAndText'>
        <div className='EducationIsLife_Img'></div>
        <div className='EducationIsLife_Text'>
            <h4>Education is life</h4>
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

export default EducationIsLife