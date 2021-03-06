import React, { useState, useContext, useEffect } from 'react'
import Card from './Card'
import { AmazonContext } from '../context/AmazonContext'

const Cards = () => {
    // const item ={
    //     id:0,
    //     attributes:{
    //         name: "Doge",
    //         price : 2,
    //         src: "https://media1.giphy.com/media/tRYARMeyH4OCMn7wV1/giphy.gif?cid=790b7611d15f0eefbcf4ea64af184c339f7bb93c8d7e07cf&rid=giphy.gif&ct=g",
    //     }
    // }
    const { assets } = useContext(AmazonContext)

    const styles = {
        container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
        title: `text-xl font-bolder mb-[20px] mt-[30px]  ml-[30px]`,
        cards: `flex items-center  flex-wrap gap-[80px]`,
      }

  return (
    <div  className={styles.container}>
        <div className={styles.title}>
            New Release
        </div>
        <div className={styles.cards}>
            {assets.map((item) => {
            let asset = item.attributes

            return <Card key={item.id} item={item.attributes} />
          })}
        </div>
    </div>
  )
}

export default Cards