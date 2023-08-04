import React from 'react';

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div class='w-[100%] pl-[150px] flex flex-row justify-between'>
            <h1 class='text-4xl font-bold'>Portfolio</h1>
        <div class='flex flex-row pr-[230px]'>
            <p class='text-ms text-[#22222280]'>See More</p>
            <svg class='mt-1.5 ml-2.5'xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.50146C0 6.30995 0.0760804 6.12627 0.211504 5.99085C0.346928 5.85542 0.530603 5.77934 0.722121 5.77934L17.7541 5.77934L13.209 1.23576C13.0734 1.10016 12.9973 0.916257 12.9973 0.724497C12.9973 0.532737 13.0734 0.34883 13.209 0.213235C13.3446 0.0776405 13.5285 0.00146389 13.7203 0.00146389C13.9121 0.00146389 14.096 0.0776405 14.2316 0.213235L20.0085 5.9902C20.0758 6.05728 20.1291 6.13697 20.1655 6.2247C20.2019 6.31243 20.2207 6.40648 20.2207 6.50146C20.2207 6.59645 20.2019 6.6905 20.1655 6.77823C20.1291 6.86596 20.0758 6.94565 20.0085 7.01273L14.2316 12.7897C14.096 12.9253 13.9121 13.0015 13.7203 13.0015C13.5285 13.0015 13.3446 12.9253 13.209 12.7897C13.0734 12.6541 12.9973 12.4702 12.9973 12.2784C12.9973 12.0867 13.0734 11.9028 13.209 11.7672L17.7541 7.22359L0.722121 7.22359C0.530603 7.22359 0.346928 7.1475 0.211504 7.01208C0.0760804 6.87666 0 6.69298 0 6.50146Z" fill="#222222" fill-opacity="0.5"/>
            </svg>
        </div>
        </div>
        <div class='w-[100%] h-[300px] flex flex-row justify-center pt-[50px]'>
            <img class='w-[300px] h-[290px] mr-10' src="./image/chat.jpeg"/>
            <img class='w-[300px] h-[290px]' src="./image/layout.jpeg"/>
            <img class='w-[300px] h-[290px] ml-10' src="./image/miniproject.jpeg"/>
        </div>
    </div>
  );
};

export default Portfolio;
