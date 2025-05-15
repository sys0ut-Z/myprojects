import React from 'react'
import img1 from '../../assets/bugatti/bugatti centodeici portrait.jpg'
import img2 from '../../assets/ferrari/ferrari 12 cilindri portrait 2.jpeg'
import img3 from '../../assets/koenigsegg/koenigsegg cc850 portrait.jpg'
import img4 from '../../assets/lamborghini/lambo ave svj 63 portrait 2.jpg'
import img5 from '../../assets/bugatti/bugatti chiron portrait.jpg'
import img6 from '../../assets/ferrari/ferrari 458 italia portrait 2.jpg'
import img7 from '../../assets/koenigsegg/koenigsegg gemera portrait.jpg'
import img8 from '../../assets/lamborghini/lambo revuelto portrait.jpeg'
import img9 from '../../assets/bugatti/bugatti la voiture noire portrait.jpg'
import img10 from '../../assets/ferrari/ferrari daytona sp3 portrait.webp'

const carDetails = [
  {
    id: 1,
    image: img1,
    car: "Bugatti Centodieci",
    desc: "The Bugatti Centodieci is a limited-edition hypercar unveiled in 2019 to celebrate Bugatti’s 110th anniversary. Its name means '110\" in Italian, paying tribute to the iconic Bugatti EB110 from the 1990s. Based on the Chiron platform, it features a quad-turbocharged 8.0-liter W16 engine producing 1,600 horsepower. The Centodieci can accelerate from 0 to 100 km/h in just 2.4 seconds. Its sleek, angular design reinterprets the EB110’s styling with a modern twist. Only 10 units were produced, making it extremely rare and collectible. The price of each car was around $9 million. The Centodieci is handcrafted at Bugatti’s Molsheim factory in France."
  },
  {
    id: 2,
    image: img2,
    car: "Ferrari 12Cilindri",
    desc: "The Ferrari 12Cilindri is a grand tourer that marks a bold statement in the automotive world by embracing a naturally aspirated V12 engine in an era dominated by electrification and downsizing.  Unveiled in May 2024 to commemorate Ferrari's 70th anniversary in the American market, this model pays homage to the brand's rich heritage while incorporating modern advancements.At its heart lies a 6.5-liter F140HD V12 engine, delivering 819 horsepower at 9,250 rpm and 500 lb-ft of torque at 7,250 rpm. This powerhouse enables the 12Cilindri to accelerate from 0 to 100 km/h in just 2.9 seconds, with a top speed exceeding 340 km/h."
  },
  {
    id: 3,
    image: img3,
    car: "Koenigsegg cc850",
    desc: "The Koenigsegg CC850 is a limited-production hypercar unveiled in 2022 to celebrate Koenigsegg’s 20th anniversary and honor the original CC8S. It combines classic design elements with cutting-edge technology. Powering the CC850 is a 5.0-liter twin-turbo V8 engine producing up to 1,385 horsepower on E85 fuel. A standout feature is its revolutionary Engage Shift System (ESS), which can function as both a 6-speed manual and a 9-speed automatic transmission. Only 70 units will be produced, symbolizing Christian von Koenigsegg’s 50th birthday and the brand’s 20th anniversary. The CC850 can sprint from 0 to 100 km/h in under 3 seconds."
  },
  {
    id: 4,
    image: img4,
    car: "Lambo Aventador SVJ 63",
    desc: "The Lamborghini Aventador SVJ 63 is an ultra-exclusive version of the Aventador SVJ, limited to just 63 units worldwide to honor Lamborghini’s founding year, 1963. It features a naturally aspirated 6.5-liter V12 engine that delivers 770 horsepower and 720 Nm of torque. It propels the car from 0 to 100 km/h in just 2.8 seconds. The SVJ 63 stands out with its special carbon fiber accents and lightweight construction. It also incorporates Lamborghini’s ALA (Aerodinamica Lamborghini Attiva) system for active aerodynamics. The interior boasts Alcantara upholstery and exclusive “63” badging. Its top speed exceeds 350 km/h, making it one of the fastest Lamborghinis ever."
  },
  {
    id: 5,
    image: img5,
    car: "Bugatti Chiron",
    desc: "The Bugatti Chiron is a masterpiece of engineering and luxury, introduced in 2016 as the successor to the Veyron. It features an 8.0-liter quad-turbocharged W16 engine producing 1,479 horsepower and 1,600 Nm of torque. The Chiron accelerates from 0 to 100 km/h in just 2.4 seconds, with a top speed electronically limited to 420 km/h. Its design combines sleek aerodynamics with a distinctive horseshoe grille and C-shaped side profile. The Chiron offers unmatched craftsmanship, with a luxurious interior made from premium materials like leather, carbon fiber, and aluminum. Only 500 units were produced, adding to its exclusivity."
  },
  {
    id: 6,
    image: img6,
    car: "Ferrari 458 Italia",
    desc: "The Ferrari 458 Italia is a mid-engine sports car introduced in 2009, replacing the F430 in Ferrari’s lineup. It features a 4.5-liter naturally aspirated V8 engine that produces 562 horsepower and 540 Nm of torque. With a 7-speed dual-clutch transmission, the 458 can accelerate from 0 to 100 km/h in just 3.4 seconds. Its top speed is over 325 km/h, delivering thrilling performance on both road and track. The design, crafted by Pininfarina, emphasizes aerodynamics and beauty with sharp lines and aggressive styling. Inside, it offers a driver-focused cockpit with premium materials and advanced tech. The 458 Italia earned praise for its sharp handling and driving dynamics."
  },
  {
    id: 7,
    image: img7,
    car: "Koenigseg Gemera",
    desc: "The Koenigsegg Gemera is a groundbreaking hybrid hypercar, blending extreme performance with four-seat practicality. It features a revolutionary 2.0L twin-turbo 3-cylinder engine, dubbed the \"Tiny Friendly Giant,\" paired with three electric motors. Together, they produce an astonishing 1700+ horsepower. The Gemera can accelerate from 0 to 100 km/h in just 1.9 seconds, making it one of the fastest four-seaters ever built. It offers all-wheel drive, all-wheel torque vectoring, and impressive electric-only range. With luxurious interiors and cutting-edge technology, the Gemera redefines family-friendly supercars."
  },
  {
    id: 8,
    image: img8,
    car: "Lamborthini Revuelto",
    desc: "The Lamborghini Revuelto marks a bold leap into the future as the brand’s first plug-in hybrid supercar. It pairs a naturally aspirated 6.5L V12 engine with three electric motors, delivering a combined output of 1,015 hp. This electrified powerhouse accelerates from 0 to 100 km/h in just 2.5 seconds and reaches a top speed exceeding 350 km/h. Inside, it boasts a futuristic cockpit with three digital displays: a 12.3-inch driver’s cluster, an 8.4-inch central touchscreen, and a 9.1-inch passenger displayed. In India, the Revuelto launched at ₹8.89 crore (ex-showroom) and is already sold out globally until 2026. This model embodies Lamborghini’s commitment and iconic design."
  },
  {
    id: 9,
    image: img9,
    car: "Bugatti La Voiture Noire",
    desc: "The Bugatti La Voiture Noire is a one-of-a-kind hypercar unveiled at the 2019 Geneva Motor Show, paying tribute to the legendary Type 57 SC Atlantic. Handcrafted with a carbon-fiber body painted in Deep Black Gloss, it features a central dorsal seam reminiscent of its 1930s predecessor. Under the hood lies an 8.0L quad-turbocharged W16 engine producing 1,500 hp and 1,600 Nm of torque, enabling a 0–100 km/h sprint in just 2.4 seconds. Its top speed is electronically limited to 420 km/h. Priced at approximately $18.7 million, it's among the most expensive new cars ever sold. The La Voiture Noire seamlessly blends Bugatti's rich heritage with cutting-edge performance, making it a true automotive masterpiece."
  },
  {
    id: 10,
    image: img10,
    car: "Ferrari SF90 Stradale",
    desc: "The Ferrari Daytona, officially known as the 365 GTB/4, was introduced in 1968 as a front-engined grand tourer. It features a 4.4-liter V12 engine producing around 352 horsepower, allowing it to reach a top speed of over 280 km/h. The Daytona could accelerate from 0 to 100 km/h in about 5.4 seconds, making it one of the fastest cars of its time. Its sleek, aggressive design was created by Pininfarina, with a long hood and pop-up headlights giving it a distinctive look. The car was named \"Daytona\" by the media to celebrate Ferrari’s 1-2-3 finish at the 1967 Daytona 24 Hours race. Only around 1,400 units were produced, making it a rare collector's car. The Daytona remains a symbol of Ferrari’s golden era of grand touring excellence."
  }
]
const CarsInfo = () => {
  return (
    <div className='py-28 bg-white dark:bg-gray-800'>
      <div className="container py-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6">
          {
            carDetails.map(({id, image, car, desc}) => (
              <div key={id} className='flex gap-4 py-5 px-5 rounded-lg shadow-xl bg-white dark:bg-gray-700/75 cursor-default'>
                <div className='min-w-[120px] sm:min-w-[150px] md:max-h-[250px] max-h-[200px] flex pt-1'>
                  {/* here, by giving flex it will cover the image */}
                  <img src={image} className='min-w-full min-h-full object-cover rounded-md'/>
                </div>
                <div className='text-sm lg:text-base lg:px-1 px-2'>
                  <h1 className='text-base sm:text-lg xl:text-2xl font-bold pb-3 tracking-wider dark:text-secondary'>{car}</h1>
                  <span className='dark:text-gray-200 max-[1533px]:line-clamp-[9] text-xs sm:text-sm md:text-base 
                  text-pretty sm:text-justify'>{desc}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CarsInfo;