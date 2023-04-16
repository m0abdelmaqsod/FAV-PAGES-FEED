import styles from '../../styles/components/home/your_fav/your_fav.module.css';
import Image from "next/image";
import Link from "next/link";
import { GoKebabHorizontal } from 'react-icons/go';
import { FaRegStar } from 'react-icons/fa';
import { your_fav } from '../../pages/api/data';







const Your_fav = () => {
  return (
    <div className={styles.favourite_page}>

      <div className={styles.div_create_page}>
        <div className={styles.nav_create}>
          <FaRegStar />
          <Link href='/'><GoKebabHorizontal /></Link>


        </div>

        <h6>Be like them and</h6>

        <p>Create your own Favourite Page!</p>

        <ul>
          <li>
            <Link href="/">start New!</Link>
          </li>
        </ul>
      </div>


      <div className={styles.your_fav_pages}>
        <div className={styles.nav_create}>
          <h6>Your Fav Pages (54)</h6>
          <span><GoKebabHorizontal /></span>
        </div>

        <hr />
        <div className={styles.your_fav}>
          <ul>
            {
              your_fav.map((order, id) => {
                return (
                  <li key={id}>
                    <Link href='/'>
                      <Image src={order.imgYourFav} alt="" width={35} height={35} />
                    </Link>
                  </li>
                )
              })
            }
            <li >
              <Link href="/">
                <p>+40</p>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Your_fav;


