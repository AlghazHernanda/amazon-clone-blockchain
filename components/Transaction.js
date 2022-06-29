import React, { useEffect, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { AmazonContext } from '../context/AmazonContext'


const Transaction = ({ item }) => {

    const { username } = useContext(AmazonContext)

  return (
    <div>
         <>
      {item.map((asset, index) => {
        return (
          <div className={styles.container} key={index}>
            <div className={styles.top}>
              <div className='flex w-full gap-[80px]'>
                <div className={styles.topHeaderText}>
                  ORDER PLACED <br />
                  {moment(asset.purchaseDate).format('MMMM Do YYYY')}
                </div>
                <div className={styles.topHeaderText}>
                  TOTAL <br />
                  {asset.price} AC
                </div>
                <div className={styles.topHeaderText}>
                  SHIP TO <br />
                  {username}
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.date}>
                Bought on {moment(asset.purchaseDate).format('MMMM Do')}
              </div>
              <div className={styles.item}>
                <Image
                  className='object-cover'
                  src={asset.src}
                  alt='item'
                  height={100}
                  width={100}
                />
                <div className={styles.nameContainer}>
                  <div className={styles.itemName}>{asset.name}</div>
                  <div className='flex flex-row items-center justify-center gap-4'>
                    <div className={styles.buyAgainBtn}>Buy it Again</div>
                    <Link href={`${asset.etherscanLink}`}>
                      <a target='_blank' rel='noopener'>
                        <div className={styles.etherscanBtn}>Etherscan</div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
    </div>
  )
}

export default Transaction