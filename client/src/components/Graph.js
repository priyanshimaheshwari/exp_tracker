import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {chart,ArcElement,Chart} from 'chart.js'
import Labels from './Labels'

Chart.register(ArcElement);

  const config={
    data:{
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        borderRadius:15,
        spacing:10
      }]
    },
    options:{
      cutoot:115
    }
  }
  
export default function Graph(){
    return(
        <div className='flex justify-content max-w-ms mx-auto'>
            <div>
                <div className='relative'>
                  <div className=''>
                    <Doughnut {...config} ></Doughnut>
                    <h3 className='mb-4 font-bold title absolute top-20 pl-[126px] pt-10  '>Total<span className=' block text-3xl text-emerald-400 '>${0}</span></h3>
                </div></div>
                <div className='flex flex-col py-10 gap-4'>
                   {/*Lables*/}
                   <Labels></Labels>
                </div>
            </div>
        </div>
    )
}
