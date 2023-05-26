import Image from 'next/image';
import React from 'react';
import { ProjectData } from './Common';

const Projects = () => {
  return (
    <section className="text-white body-font relative w-full bg-fixed bg-center bg-cover bg-[rgb(237,242,255)]">
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]' /> */}
      <div id='gallery' className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black z-[3]">Fetured Projects</h1>
          <h2 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-black z-[3]">Our practice is built on an inclusive mode</h2>
          <p className="lg:w-2/3 text-black mx-auto leading-relaxed text-base">Strength in architecture emerges with an emotional connect to the work. The buildings must respond to the land, go beyond concepts, geometry, forms and symmetry, incorporating continuity and change.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {ProjectData.map((item, id) => (
            <div key={id} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative z-[3]">
                <Image width={230} height={180} alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-md" src={item.img} />
                <div className="px-8 py-10 relative z-[3] w-full backdrop-blur-md bg-white/30 opacity-0 hover:opacity-100 rounded-md">
                  <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">Shooting Stars</h1>
                  <p className="leading-relaxed text-black">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;