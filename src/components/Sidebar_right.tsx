import { useState } from 'react';
import styles from '../styles/components/sidebar_right/sidebar_right.module.css';
import { sidebar_right_top, sidebar_right_center, sidebar_right_end } from '@/pages/api/data';
import Image from 'next/image';
import Link from 'next/link';
import { GoKebabHorizontal } from 'react-icons/go';
import { VscSettings } from 'react-icons/vsc';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { TfiClose } from 'react-icons/tfi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { BiCommentX, BiCommentDetail, BiCommentAdd } from 'react-icons/bi';
import { VscClose } from 'react-icons/vsc';






const Sidebar_right = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebarCollapseHandler = () => {
    setIsOpen((prev) => !prev);



  };
  return (

    <div className={styles.sidebar}>

      <button className={styles.btnSidebarResponsiv} onClick={toggleSidebarCollapseHandler}>

        <div className={isOpen == true ? styles.btnOpen : styles.btnClose}><HiOutlineMenuAlt3 /></div>

        <div className={isOpen == true ? styles.btnClose : styles.btnOpen}><TfiClose /></div>
      </button>

      <div className={isOpen == true ? styles.sidebar_right : styles.open}>

        <div className={styles.div_sidebar_right}>
          <div className={isOpen == true ? styles.close_friends : styles.close_friends_none}>

            <ul>
              <li className={styles.friends}>
                <Link href='/'>CLOSE FRIENDS</Link>
              </li>
              <li>
                <Link href='/'>SETTINGS</Link>
              </li>
            </ul>
          </div>



          {
            sidebar_right_top.map((order, id) => {
              return (
                <div key={id} className={styles.friend}>
                  <div className={styles.div_friend}>
                    <div className={styles.image}>
                      <Image src={order.img} alt="" width={35} height={35} />

                      <span className={order.condition == 'ONLINE' ? styles.span_colot_online :
                        order.condition == 'AT WORK!' ? styles.span_colot_atwork : order.condition == 'AWAY' ? styles.span_colot_away : order.condition == 'OFFLINE' ? styles.span_colot_offline : order.condition == "INVISIBLE" ? styles.span_colot_invisible : ''}></span>
                    </div>

                    <div className={isOpen == true ? styles.data : styles.none_data}>
                      <Link href='/'>{order.name}</Link>

                      <h6>{order.condition}</h6>
                    </div>
                  </div>
                  <div className={styles.dotBtn}>
                    <GoKebabHorizontal />

                    <div className={styles.hover_dotBtn}>
                      <BiCommentDetail />
                      <BiCommentAdd />
                      <BiCommentX />
                    </div>
                  </div>
                </div>
              )
            })
          }




          <div className={isOpen == true ? styles.close_friends : styles.close_friends_none}>
            <ul>
              <li className={styles.friends}>
                <Link href='/'>MY FAMILY</Link>
              </li>
              <li>
                <Link href='/'>SETTINGS</Link>
              </li>
            </ul>
          </div>



          {
            sidebar_right_center.map((order, id) => {
              return (
                <div key={id} className={styles.friend}>
                  <div className={styles.div_friend}>
                    <div className={styles.image}>
                      <Image src={order.img} alt="" width={30} height={30} />
                      <span className={order.condition == 'ONLINE' ? styles.span_colot_online :
                        order.condition == 'AT WORK!' ? styles.span_colot_atwork : order.condition == 'AWAY' ? styles.span_colot_away : order.condition == 'OFFLINE' ? styles.span_colot_offline : order.condition == "INVISIBLE" ? styles.span_colot_invisible : ''}></span>
                    </div>

                    <div className={isOpen == true ? styles.data : styles.none_data}>
                      <Link href='/'>{order.name}</Link>

                      <h6>{order.condition}</h6>
                    </div>
                  </div>
                  <div className={styles.dotBtn}>
                    <GoKebabHorizontal />
                  </div>
                </div>
              )
            })
          }




          <div className={isOpen == true ? styles.close_friends : styles.close_friends_none}>
            <ul>
              <li className={styles.friends}>
                <Link href='/'>UNCATEGORIZED</Link>
              </li>
              <li>
                <Link href='/'>SETTINGS</Link>
              </li>
            </ul>
          </div>




          {
            sidebar_right_end.map((order, id) => {
              return (
                <div key={id} className={styles.friend}>
                  <div className={styles.div_friend}>
                    <div className={styles.image}>
                      <Image src={order.img} alt="" width={30} height={30} />
                      <span className={order.condition == 'ONLINE' ? styles.span_colot_online :
                        order.condition == 'AT WORK!' ? styles.span_colot_atwork : order.condition == 'AWAY' ? styles.span_colot_away : order.condition == 'OFFLINE' ? styles.span_colot_offline : order.condition == "INVISIBLE" ? styles.span_colot_invisible : ''}></span>
                    </div>

                    <div className={isOpen == true ? styles.data : styles.none_data}>
                      <Link href='/'>{order.name}</Link>

                      <h6>{order.condition}</h6>
                    </div>
                  </div>
                  <div className={styles.dotBtn}>
                    <GoKebabHorizontal />
                  </div>
                </div>
              )
            })
          }
        </div>


        <div className={styles.lcose_olympus_chat}>
          <div className={styles.form_icon_closr}>
            <form action="" className={isOpen == true ? styles.form : styles.form_none}>

              <input type="search" name="search" id="search" placeholder='Search Friens...' />

            </form>

            <div className={isOpen == true ? styles.icon_settings : styles.icon_settings_none}>

              <Link href="/"><VscSettings /></Link>
            </div>

            <button className={styles.btn} onClick={toggleSidebarCollapseHandler}>

              <div className={isOpen == true ? styles.btnOpen : styles.btnClose}><HiOutlineMenuAlt3 /></div>

              <div className={isOpen == true ? styles.btnClose : styles.btnOpen}><TfiClose /></div>
            </button>

          </div>



          <div className={styles.olympus_chat_icon}>
            <Link href='/'>
              <h6 className={isOpen == true ? styles.h6_chat : styles.none_h6}>OLYMPUS CHAT</h6>
              <div className={styles.icon_chat}><HiOutlineChatBubbleLeftRight /></div>
            </Link>

          </div>
        </div>
      </div >



      {/* <div className={styles.chat}>
        <div className={styles.name_chat}>

          <div className={styles.span_name}>
            <span className={styles.span_colot_online}></span>
            <h6>Chat</h6>
          </div>

          <div className={styles.icon_chat}>
            <div className={styles.dotBtn}>
              <GoKebabHorizontal />
            </div>
            <Link href="/"><VscClose /></Link>
          </div>
        </div>

        <div className={styles.pody_chat}>
          <Image src="/images/sidebar-right/avatar62-sm.webp" alt="" width={35} height={35}/>
          <p>Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</p>
        </div>

        <div className={styles.list_bar_bottom_chat}>
          <textarea name="comment" id="comment" placeholder='commernt'>
            
          </textarea>
        </div>
      </div> */}
    </div>
  )
}

export default Sidebar_right