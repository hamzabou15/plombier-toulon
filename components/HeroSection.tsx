import React from 'react'


interface HeroSectionProps {
    title: string;
}

const HeroSection = ({
    title
}: HeroSectionProps) => {
    return (
        <div className='w-full md:min-h-32 pt-36 flex flex-col items-center justify-center text-[#222626] gap-8'>

            <h1 className='text-[3.353em] font-semibold max-w-[600px] text-center'>{title}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="14.626" height="8.639" viewBox="0 0 14.626 8.639"><g id="down-arrow" transform="translate(0 -70.698)"><g id="Group_8820" data-name="Group 8820" transform="translate(0 100.698)"><path id="Path_6507" data-name="Path 6507" d="M14.392,101.42l-.479-.482a.8.8,0,0,0-1.132,0L7.316,106.4l-5.472-5.472a.8.8,0,0,0-1.132,0l-.479.479a.8.8,0,0,0,0,1.131l6.515,6.538a.818.818,0,0,0,.567.257h0a.818.818,0,0,0,.566-.257l6.508-6.52a.808.808,0,0,0,.234-.571A.8.8,0,0,0,14.392,101.42Z" transform="translate(0 -130.698)"></path></g></g></svg>

        </div>
    )
}

export default HeroSection