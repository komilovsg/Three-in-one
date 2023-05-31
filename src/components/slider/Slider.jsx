import React from 'react'
import '../product-list/product-list.styles.css'
import react from '../img/React-icon.svg.png' 


export default function Slider({callback}) {
  console.log(callback);
  const message = 'Lorem We are here'
  return (
    <div>
      <div className='slider'>
      <h1>Slider</h1>
      <div className="sliderr ">
        <div className='div-one'>
        <div class="one xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg shadow-xl hover:shadow-blue-300">
              <h3 class="text-center text-black font-semibold mb-2 text-2xl">Альфа-Банк</h3>
              <img
                class="h-30 rounded w-full object-cover object-center mb-6 hover:shadow-sm"
                src={react}
                alt="content"
              />
              <h3
                class="tracking-widest text-black text-lg font-bold title-font text-center"
              >
                100 дней без %
              </h3>
              <h2 class="text-lg text-gray-400 font-medium title-font mb-4 text-center">
                Кредитный лимит
                <p class="text-blue-600 font-bold">2 000 000 ₽</p>
                <p class="">
                  Годовая ставка
                  <p class="text-blue-600 font-bold text-lg">12%</p>
                </p>
                <p class="">
                  Кэшбэк
                  <p class="text-blue-600 font-bold text-lg">до 30%</p>
                </p>
              </h2>
              
            </div>
          </div>
        </div>
        <div class="one xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg shadow-xl hover:shadow-blue-300">
              <h3 class="text-center text-black font-semibold mb-2 text-2xl">Альфа-Банк</h3>
              <img
                class="rounded w-full object-cover object-center mb-6 hover:shadow-sm"
                src={react}
                alt="content"
              />
              <h3
                class="tracking-widest text-black text-lg font-bold title-font text-center"
              >
                100 дней без %
              </h3>
              <h2 class="text-lg text-gray-400 font-medium title-font mb-4 text-center">
                Кредитный лимит
                <p class="text-blue-600 font-bold">2 000 000 ₽</p>
                <p class="">
                  Годовая ставка
                  <p class="text-blue-600 font-bold text-lg">12%</p>
                </p>
                <p class="">
                  Кэшбэк
                  <p class="text-blue-600 font-bold text-lg">до 30%</p>
                </p>
              </h2>
              
            </div>
          </div>
        <div class="one xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg shadow-xl hover:shadow-blue-300">
              <h3 class="text-center text-black font-semibold mb-2 text-2xl">Альфа-Банк</h3>
              <img
                class=" rounded w-full object-cover object-center mb-6 hover:shadow-sm"
                src={react}
                alt="content"
              />
              <h3
                class="tracking-widest text-black text-lg font-bold title-font text-center"
              >
                100 дней без %
              </h3>
              <h2 class="text-lg text-gray-400 font-medium title-font mb-4 text-center">
                Кредитный лимит
                <p class="text-blue-600 font-bold">2 000 000 ₽</p>
                <p class="">
                  Годовая ставка
                  <p class="text-blue-600 font-bold text-lg">12%</p>
                </p>
                <p class="">
                  Кэшбэк
                  <p class="text-blue-600 font-bold text-lg">до 30%</p>
                </p>
              </h2>
              
            </div>
          </div>
          <div class="one xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg shadow-xl hover:shadow-blue-300">
              <h3 class="text-center text-black font-semibold mb-2 text-2xl">Альфа-Банк</h3>
              <img
                class=" rounded w-full object-cover object-center mb-6 hover:shadow-sm"
                src={react}
                alt="content"
              />
              <h3
                class="tracking-widest text-black text-lg font-bold title-font text-center"
              >
                100 дней без %
              </h3>
              <h2 class="text-lg text-gray-400 font-medium title-font mb-4 text-center">
                Кредитный лимит
                <p class="text-blue-600 font-bold">2 000 000 ₽</p>
                <p class="">
                  Годовая ставка
                  <p class="text-blue-600 font-bold text-lg">12%</p>
                </p>
                <p class="">
                  Кэшбэк
                  <p class="text-blue-600 font-bold text-lg">до 30%</p>
                </p>
              </h2>
              
            </div>
          </div>
          <div class="one xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg shadow-xl hover:shadow-blue-300">
              <h3 class="text-center text-black font-semibold mb-2 text-2xl">Альфа-Банк</h3>
              <img
                class=" rounded w-full object-cover object-center mb-6 hover:shadow-sm"
                src={react}
                alt="content"
              />
              <h3
                class="tracking-widest text-black text-lg font-bold title-font text-center"
              >
                100 дней без %
              </h3>
              <h2 class="text-lg text-gray-400 font-medium title-font mb-4 text-center">
                Кредитный лимит
                <p class="text-blue-600 font-bold">2 000 000 ₽</p>
                <p class="">
                  Годовая ставка
                  <p class="text-blue-600 font-bold text-lg">12%</p>
                </p>
                <p class="">
                  Кэшбэк
                  <p class="text-blue-600 font-bold text-lg">до 30%</p>
                </p>
              </h2>
              
            </div>
          </div>
          <div class="one xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg shadow-xl hover:shadow-blue-300">
              <h3 class="text-center text-black font-semibold mb-2 text-2xl">Альфа-Банк</h3>
              <img
                class=" rounded w-full object-cover object-center mb-6 hover:shadow-sm"
                src={react}
                alt="content"
              />
              <h3
                class="tracking-widest text-black text-lg font-bold title-font text-center"
              >
                100 дней без %
              </h3>
              <h2 class="text-lg text-gray-400 font-medium title-font mb-4 text-center">
                Кредитный лимит
                <p class="text-blue-600 font-bold">2 000 000 ₽</p>
                <p class="">
                  Годовая ставка
                  <p class="text-blue-600 font-bold text-lg">12%</p>
                </p>
                <p class="">
                  Кэшбэк
                  <p class="text-blue-600 font-bold text-lg">до 30%</p>
                </p>
              </h2>
              
            </div>
          </div>
          </div>
    </div>
    <h1>{callback (message)}</h1>
    </div>
  )
}
