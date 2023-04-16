import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/sidebar_left/sidebar_left.module.css'
import { HiOutlineMenuAlt3, HiOutlineNewspaper, HiOutlineEmojiHappy, HiOutlineCake } from 'react-icons/hi'
import { TfiClose, TfiLayoutListLargeImage } from 'react-icons/tfi'
import { FaRegStar } from 'react-icons/fa'
import { TiHeadphones, TiWeatherPartlySunny } from 'react-icons/ti'
import { GoCalendar } from 'react-icons/go'
import { TbWaveSawTool, TbPlaystationCircle } from 'react-icons/tb'
import { BiLogOutCircle } from 'react-icons/bi'




const Sidebar_left = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebarCollapseHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={
      isOpen == true ? styles.sidebar_left : styles.open}>

      <button className={styles.btnOpenResponsiv} onClick={toggleSidebarCollapseHandler}></button>

      <Link href="/">
        <div className={styles.logo}>
          <Image
            src="/images/logo.webp" height={37} width={37} alt="Your logo"
          />
          <h6>OLYMPUS</h6>
        </div>
      </Link>



      <div className={styles.div_you_acciunt}>
        <div className={styles.you_acciunt}>
          <div className={styles.image}>
            <Image src="/images/navbar/author-page.webp" alt="d" width={38} height={38} />
            <span></span>
          </div>
          <div className={styles.data}>
            <Link href='/'>
              <h5>James Spiegel </h5>
              <h6>SPACE COWBOY</h6>
            </Link>
          </div>
        </div>

        <div className={styles.main_sections}>
          <hr />
          <h6>MAIN SECTIONS</h6>
          <hr />
        </div>
      </div>



      <div className={styles.listing}>
        <ul>
          <li>
            <button className={styles.btn} onClick={toggleSidebarCollapseHandler}>

              <div className={isOpen == true ? styles.btnOpen : styles.btnClose}><HiOutlineMenuAlt3 /></div>

              <div className={isOpen == true ? styles.btnClose : styles.btnOpen}><TfiClose /></div>

              <span>Collapse Menu</span>
            </button>
          </li>


          <li>
            <Link href="/">
              <div><HiOutlineNewspaper /></div>
              <span>Newsfeed</span>
            </Link>
          </li>

          <li>
            <Link href="/">
              <div><FaRegStar /></div>
              <span>Fav Pages Feed</span>
            </Link>
          </li>

          <li>
            <Link href="/">
              <div><TiHeadphones /></div>
              <span>Friend Groups</span>
            </Link>
          </li>

          <li>
            <Link href="/">
              <div><HiOutlineEmojiHappy /></div>
              <span>Music & Playlists</span>
            </Link>
          </li>

          <li>
            <Link href="/">
              <div><TiWeatherPartlySunny /></div>
              <span>Weather App</span>
            </Link>
          </li>

          <li>
            <Link href="/">
              <div><GoCalendar /></div>
              <span>Calendar and Events</span>
            </Link>
          </li>

          <li>
            <Link href="/">
              <div><TbPlaystationCircle /></div>
              <span>Community Badges</span>
            </Link>
          </li>

          <li>
            <Link href="/">
              <div><HiOutlineCake /></div>
              <span>Friends Birthdays</span>
            </Link>
          </li>

          <li>
            <Link href="/">
              <div><TbWaveSawTool /></div>
              <span>Account Stats</span>
            </Link>
          </li>

          <li>
            <Link href="/">
              <div><TfiLayoutListLargeImage /></div>
              <span>Manage Widgets</span>
            </Link>
          </li>
        </ul>
      </div>


      <div className={styles.list_you_acciunt}>

        <hr />
        <div className={styles.navListRequests}>
          <h6>YOUR ACCOUNT</h6>
        </div>
        <hr />

        <div className={styles.list_you_acciunt}>
          <ul>
            <li>
              <Link href="/">
                <div><HiOutlineMenuAlt3 /></div>
                <p> Profile Settings</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div> <FaRegStar /></div>
                <p>Create Fav Page</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div><BiLogOutCircle /></div>
                <p>Log Out</p>
              </Link>
            </li>
          </ul>
        </div>

        <hr />
        <div className={styles.navListRequests}>
          <h6>ABOUT OLYMPUS</h6>
        </div>
        <hr />


        <div className={styles.about_olympus}>
          <ul>
            <li>
              <Link href="/">Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/">FAQs
              </Link>
            </li>
            <li>
              <Link href="/">Careers
              </Link>
            </li>
            <li>
              <Link href="/">Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar_left