"use client"

import PokemonD from "./pokemon";
import styles from "./page.module.css"

const page = () => {
    return (
        <div className={styles.main}>
            <PokemonD />
        </div>
    )
}

export default page;