import React from 'react'
import UserPageFoto from '../../assets/UserPage.png'
import styles from './UserPage.module.css'
function UserPage() {
  return (
    <>
    <button className={styles.Menu}></button>
    <div className='grid h-screen place-items-center'>
        <h1 className="text-9xl">BE KIND TO YOUR MIND</h1>
        <img src={UserPageFoto} className="max-w-l min-h-full"/>
    </div>
    </>
  )
}

export default UserPage