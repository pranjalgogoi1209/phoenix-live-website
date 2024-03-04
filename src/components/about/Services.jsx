import React from 'react'
import styles from "./Service.module.css"
import services from '../../data/about/services'

const Card = ({item}) => {

    return (
        <div className={styles.card}>
            <img src={item.img}></img>
            <h2>{item.title}</h2>
        </div>
    )
}

const Services = () => {
  return (
    <div className={styles.container}>
        <div className={styles.headerRow}>
            <h1>What We Love To Do</h1>
        </div>
        <div className={styles.mainRow}>
            {services.map((item, ind) => (
                <Card item={item}/>
            ))}
        </div>
    </div>
  )
}

export default Services
