
import styles from '../../styles/components/home/suggestions/suggestions.module.css';
import { suggestions, pages } from '../../pages/api/data';
import Image from "next/image";
import Link from "next/link";
import { GoKebabHorizontal } from 'react-icons/go';
import { MdTagFaces } from 'react-icons/md';
import { FaRegStar } from 'react-icons/fa'





const Suggestions = () => {
  return (
    <div className={styles.suggestions}>

      <div className={styles.friend_suggestions}>

        <div className={styles.title}>
          <h6>Friend Suggestions</h6>
          <div className={styles.dotBtn}>
            <GoKebabHorizontal />
          </div>
        </div>



        {
          suggestions.map((order, id) => {
            return (
              <div key={id} className={styles.friend}>

                <div className={styles.div_friend}>

                  <div className={styles.image}>
                    <Image src={order.img} alt="" width={35} height={35} />
                  </div>
                  <div className={styles.data}>
                    <Link href='/'>{order.name}</Link>
                    <h6>{order.Friends}</h6>
                  </div>
                </div>

                <div className={styles.emojiBtn}>
                  <span className={styles.icon}><MdTagFaces /></span>
                  <span className={styles.plus}>+</span>
                </div>

              </div>
            )
          })
        }

      </div>






      <div className={styles.pages_you_may_like}>

        <div className={styles.title}>
          <h6>Pages You May Like</h6>
          <div className={styles.dotBtn}>
            <GoKebabHorizontal />
          </div>
        </div>


        {
          pages.map((order, id) => {
            return (
              <div key={id} className={styles.pages}>
                <div className={styles.div_pages}>
                  <div className={styles.image}>
                    <Image src={order.img} alt="" width={35} height={35} />
                    <span></span>
                  </div>
                  <div className={styles.data}>
                    <Link href='/'>{order.name} </Link>
                    <h6>{order.content}</h6>
                  </div>
                </div>
                <div className={styles.starBtn}>
                  <span className={styles.icon}><FaRegStar /></span>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Suggestions