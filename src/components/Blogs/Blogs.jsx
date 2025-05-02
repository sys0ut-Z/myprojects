import React from 'react'
import img1 from '../../assets/koenigsegg/koenigsegg agera rs landscape 2_1.jpeg'
import img2 from '../../assets/lamborghini/lambo terzo millenio landscape 2.jpg'
import img3 from '../../assets/ferrari/ferrari laferrari landscape.jpg'
import BlogCard from './BlogCard'

const blogDetails = [
  {
    id: 1,
    image: img1,
    title : 'Koenigsegg-Blog',
    author : 'Tobey Maguire',
    blogDate : '23 Apr, 2024',
    text : 'Koenigsegg is a Swedish hypercar manufacturer known for producing some of the fastest and most advanced cars in the world. Their vehicles feature groundbreaking technology, lightweight design, and extreme performance.',
    description : 'Koenigsegg is a Swedish hypercar manufacturer founded in 1994 by Christian von Koenigsegg with the vision of creating the ultimate performance car. The company quickly gained global recognition for its groundbreaking engineering and record-breaking vehicles. Koenigsegg cars are known for their extreme speed, lightweight carbon fiber construction, and innovative features like the camless Freevalve engine and the unique dihedral synchro-helix doors. Models such as the Agera RS, Jesko, and Regera have pushed the boundaries of automotive performance and technology. The Agera RS once held the title of the world’s fastest production car, showcasing Koenigsegg’s engineering prowess. Every car is handcrafted in a limited number, making them exclusive and highly sought after. The company also focuses on sustainability, incorporating hybrid technology without compromising performance. Koenigsegg continues to challenge industry norms and redefine what a hypercar can be. Their Jesko model uses a revolutionary multi-clutch "Light Speed Transmission" that shifts in 20 milliseconds, Koenigsegg once held the record for the fastest production car with the Agera RS, hitting 277.87 mph. Koenigsegg designs and manufactures nearly every component in-house, including their engines and even unique 3D-printed titanium parts.'
  },
  {
    id: 2,
    image: img2,
    title : 'Lamborghini-Blog',
    author : 'Andrew Garfield',
    blogDate : '16 Dec, 2024',
    text : 'Lamborghini is an Italian luxury sports car brand known for its bold designs, roaring engines, and thrilling performance. Its cars are built to stand out, blending aggressive styling with cutting-edge technology.',
    description : 'Lamborghini is a renowned Italian luxury sports car manufacturer founded in 1963 by Ferruccio Lamborghini, aiming to rival Ferrari with more refined and powerful cars. Known for its bold and aggressive designs, Lamborghini vehicles feature sharp lines, low stances, and signature scissor doors that make them instantly recognizable. Models like the Aventador, Huracán, and the all-electric Terzo Millennio showcase cutting-edge engineering, powerful V10 and V12 engines, and a relentless pursuit of performance. Lamborghini cars are crafted for speed and handling, blending power with extraordinary design. The brand also has a strong motorsport presence, especially in endurance racing, while pushing technological boundaries with innovations like carbon fiber construction and advanced aerodynamics. Lamborghini’s rich history is defined by a commitment to producing exclusive, hand-built machines that offer a unique blend of luxury and performance. The brand’s vehicles are designed not just for speed but to evoke emotion, delivering an unparalleled driving experience. Lamborghini also frequently collaborates with various industries, from fashion to technology, to further cement its position as a symbol of elite automotive culture. With a loyal fanbase and an undeniable aura of prestige, Lamborghini remains one of the most sought-after car manufacturers in the world.'
  },
  {
    id: 3,
    image: img3,
    title : 'Ferrari-Blog',
    author : 'James Morgans',
    blogDate : '21 Nov, 2024',
    text : 'Ferrari is an iconic Italian sports car manufacturer celebrated for its racing heritage, sleek design, and powerful performance. Its cars combine luxury with speed, making them a symbol of prestige and passion.',
    description : 'Ferrari is a legendary Italian sports car manufacturer founded by Enzo Ferrari in 1939, originally as a racing team. The brand is renowned for its sleek design, high-performance engines, and deep roots in Formula 1 racing. Ferrari cars, such as the 488 GTB, LaFerrari, and SF90 Stradale, combine luxury with cutting-edge technology. The signature prancing horse logo has become a global symbol of speed, passion, and prestige. With countless victories in motorsport, especially in Formula 1, Ferrari has built a legacy of excellence on and off the track. Each car is crafted with meticulous attention to detail and a focus on the driving experience. The company balances innovation with heritage, often drawing inspiration from its racing history. Ferrari continues to captivate enthusiasts and collectors with its bold designs, roaring engines, and unmistakable Italian flair. Ferrari’s commitment to excellence extends beyond performance, with a strong emphasis on design, innovation, and luxury. With a perfect blend of tradition and progress, Ferrari remains one of the most admired and respected names in the automotive world.'
  },
]

const Blogs = () => {
  return (
    <div className='pt-16 pb-28 bg-white dark:bg-gray-800'>
      <h1 className='pb-10 text-3xl lg:text-4xl font-bold text-center text-primary'>Latest Blogs</h1>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-11 lg:gap-7">
          {
            blogDetails.map((blogInfo) => (
              <BlogCard {...blogInfo} key={blogInfo.id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Blogs