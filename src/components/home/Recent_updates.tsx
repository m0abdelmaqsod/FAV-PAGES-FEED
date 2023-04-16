import styles from '../../styles/components/home/recent_updates/recent_updates.module.css';
import Image from "next/image";
import Link from "next/link";
import { GoKebabHorizontal } from 'react-icons/go';
import { FaRegStar } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import { published } from '../../pages/api/data';








const Recent_updates = () => {
  return (
    <div className={styles.recent_updates}>

      <div className={styles.updates}>
        <div className={styles.iconStar}>
          <FaRegStar />
        </div>
        <p>Here you’ll see the recent updates of your Fav Pages</p>
      </div>




      {
        published.map((order, id) => {
          return (
            <div key={id} className={styles.published}>
              <div className={styles.div_published}>

                <div className={styles.div_friend}>
                  <div className={styles.image}>
                    <Image src={order.imgPro} alt="" width={40} height={40} />
                  </div>
                  <div className={styles.data}>
                    <Link href='/'>{order.name} </Link>
                    <h6>{order.time}</h6>
                  </div>
                </div>

                <div className={styles.dotBtn}>
                  <GoKebabHorizontal />
                </div>

              </div>

              <div className={styles.description}>
                <p>{order.description}</p>
              </div>

              <div className={order.imgPost == '' ? styles.imgNone : styles.imgPost}>
                <Image src={order.imgPost} alt="" width={300} height={300} />
              </div>





              <div className={styles.imgsAll}>
                <div className={order.grobImg.grobImg1 == '' ? styles.imgNone : styles.imgtop}>
                  <Image src={order.grobImg.grobImg1} alt="" width={300} height={300} />
                  <Image src={order.grobImg.grobImg2} alt="" width={300} height={300} />
                </div>

                <div className={order.grobImg.grobImg3 == '' ? styles.imgNone : styles.imgBottom}>
                  <Image src={order.grobImg.grobImg3} alt="" width={300} height={300} />
                  <Image src={order.grobImg.grobImg4} alt="" width={300} height={300} />
                  <div className={styles.imgEnd}>
                    <Image src={order.grobImg.grobImg5} alt="" width={300} height={300} />
                    <span>+12</span>
                  </div>
                </div>
              </div>




              <div className={styles.bottm_bar_post}>

                <div className={styles.liked_published}>
                  <Link href="/">
                    <span><BsHeart /></span>
                    <span>{order.bottm_bar_post.likedNumper}</span>
                  </Link>

                  <div className={order.bottm_bar_post.imgPagesLike.imgLike1 == '' ? styles.allLikedNone : styles.all_liked
                  }>
                    <Link href='/'>
                      <Image src={order.bottm_bar_post.imgPagesLike?.imgLike1} alt="" width={30} height={30} />
                    </Link>

                    <Link href='/'>
                      <Image src={order.bottm_bar_post.imgPagesLike?.imgLike2} alt="" width={30} height={30} />
                    </Link>

                    <Link href='/'>
                      <Image src={order.bottm_bar_post.imgPagesLike?.imgLike3} alt="" width={30} height={30} />
                    </Link>

                    <Link href='/'>
                      <Image src={order.bottm_bar_post.imgPagesLike?.imgLike4} alt="" width={30} height={30} />
                    </Link>

                    <Link href='/'>
                      <Image src={order.bottm_bar_post.imgPagesLike?.imgLike5} alt="" width={30} height={30} />
                    </Link>

                  </div>

                  <div className={order.bottm_bar_post.name_liked.nameLik1 == '' ? styles.nameNone : styles.name_liked
                  }>
                    <span>
                      <Link href='/'>{order.bottm_bar_post.name_liked?.nameLik1}</Link>
                      ,
                      <Link href='/'>{order.bottm_bar_post.name_liked?.nameLik2}</Link>
                      and
                    </span>

                    <span>
                      <Link href='/'>{order.bottm_bar_post.name_liked?.nameLik3}</Link>
                    </span>
                  </div>
                </div>





                <div className={styles.repost_comment}>
                  <div className={styles.comment}>
                    <Link href="/">
                      <span><BiMessageDetail /></span>
                      <span>{order.bottm_bar_post.repost_comment.comment}</span>
                    </Link>
                  </div>

                  <div className={styles.repost}>
                    <Link href="/">
                      <span><HiArrowsRightLeft /></span>
                      <span>{order.bottm_bar_post.repost_comment.report}</span>
                    </Link>
                  </div>

                </div>



              </div>


              <div className={styles.controls_interaction}>
                <ul>
                  <li>
                    <Link href='/'><BsHeart /></Link>
                  </li>


                  <li>
                    <Link href='/'><BiMessageDetail /></Link>
                  </li>


                  <li>
                    <Link href='/'><HiArrowsRightLeft /></Link>
                  </li>
                </ul>
              </div>



              {/* <div className={order.bottm_bar_post.grobComments.comment1.name == '' ? styles.comment_posts_none : styles.comment_posts}>

                <div className={styles.div_published}>

                  <div className={styles.div_friend}>
                    <div className={styles.image}>
                      <Image src={order.bottm_bar_post.grobComments.comment1.img} alt="" width={35} height={35} />
                    </div>
                    <div className={styles.data}>
                      <Link href='/'>{order.bottm_bar_post.grobComments.comment1.name} </Link>
                      <h6>{order.bottm_bar_post.grobComments.comment1.time}</h6>
                    </div>
                  </div>

                  <div className={styles.dotBtn}>
                    <GoKebabHorizontal />
                  </div>

                </div>

                <div className={styles.description}>
                  <p>{order.bottm_bar_post.grobComments.comment1.description}</p>
                </div>

                <div className={styles.link_comment}>
                  <Link href='/'><BsHeart />
                    <p>{order.bottm_bar_post.grobComments.comment1.like}</p>
                  </Link>
                  <Link href='/'>Reply
                    <p>{order.bottm_bar_post.grobComments.comment1.reply}</p>
                  </Link>

                </div>
              </div>



              <div className={order.bottm_bar_post.grobComments.comment2.name == '' ? styles.comment_posts_none : styles.comment_posts}>

                <div className={styles.div_published}>

                  <div className={styles.div_friend}>
                    <div className={styles.image}>
                      <Image src={order.bottm_bar_post.grobComments.comment2.img} alt="" width={35} height={35} />
                    </div>
                    <div className={styles.data}>
                      <Link href='/'>{order.bottm_bar_post.grobComments.comment2.name} </Link>
                      <h6>{order.bottm_bar_post.grobComments.comment2.time}</h6>
                    </div>
                  </div>

                  <div className={styles.dotBtn}>
                    <GoKebabHorizontal />
                  </div>

                </div>

                <div className={styles.description}>
                  <p>{order.bottm_bar_post.grobComments.comment2.description}</p>
                </div>

                <div className={styles.link_comment}>
                  <Link href='/'><BsHeart />
                    <p>{order.bottm_bar_post.grobComments.comment2.like}</p>
                  </Link>
                  <Link href='/'>Reply
                    <p>{order.bottm_bar_post.grobComments.comment2.reply}</p>
                  </Link>

                </div>
              </div> */}


            </div>
          )
        })
      }



      <div className={styles.dotBtnIcon}>

        <Link href='/'>
          <GoKebabHorizontal />
        </Link>
      </div>

    </div>
  )

}

export default Recent_updates