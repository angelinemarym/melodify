import Image from 'next/image'

import FeatImage01 from '@/public/images/party.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h1 className="h2 mb-4">Personalized Music Experience</h1>
            <p className="text-xl text-gray-400">The goal is to enable users to have a deeply personalized music experience, allowing them to select their favorite artists, songs, and musical styles with ease.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={405} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More versatile, more imaginative</div>
                  <h3 className="h3 mb-3">Musical Experience</h3>
                  <p className="text-xl text-gray-400 mb-4">Some artists or public figures may be able to produce music that is not their style or genre. This service can generate custom songs that capture the essence of the chosen artist, even in musical styles or genres they have not usually explored. As a result, users can enjoy a more versatile and imaginative musical experience, satisfying their curiosity and providing a fresh perspective on their favorite artists' capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
