import styles from '../styles/components/navbar/navbar.module.css'
import { GoSearch, GoKebabHorizontal } from 'react-icons/go';
import { MdTagFaces, MdCheck } from 'react-icons/md';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { BsLightning } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { VscClose } from 'react-icons/vsc';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaRegStar } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'
import Link from 'next/link';
import Image from 'next/image';
import { chat, list_requests, notifications } from '@/pages/api/data';



const Navbar = () => {
    return (
        <nav className={styles.navbar}>

            {/* ====== start of nav====== */}
            <div className={styles.nav}>

                <h6>FAV PAGES FEED</h6>

                {/* ====== start of form ====== */}
                <form action="">
                    <input type="search" name="search" id="search" placeholder='search here people or pages...' />
                    <label htmlFor="search"> <GoSearch /> </label>
                </form>

                <Link href="/" className={styles.find_friends}>Find Friends</Link>

                <div className={styles.control_block}>

                    {/* ====== start of icon ====== */}
                    <div className={styles.icon}>



                        {/* ====== start of friend_requests====== */}
                        <div className={styles.friend_requests}>
                            <MdTagFaces />
                            <span>6</span>

                            <div className={styles.arro}></div>
                            <div className={styles.list_requests}>
                                <div className={styles.navListRequests}>
                                    <h6>FRIEND REQUESTS</h6>
                                    <div className={styles.linkNav}>
                                        <Link href="/">SETTINGS</Link>
                                        <Link href="/">FIND FRIENDS</Link>
                                    </div>
                                </div>

                                <hr />
                                <div className={styles.div_scroll}>
                                    {
                                        list_requests.map((order, id) => {
                                            return (
                                                <div key={id} className={styles.acciuntRequests}>
                                                    <div className={styles.div_friend}>
                                                        <div className={styles.image}>
                                                            <Image src={order.img} alt="c" width={38} height={38} />
                                                        </div>
                                                        <div className={styles.data}>
                                                            <Link href='/'>{order.name}</Link>
                                                            <h6>{order.mutual_friend}</h6>
                                                        </div>
                                                    </div>

                                                    <div className={styles.divEmoji}>
                                                        <div className={styles.emojiBtnPlus}>
                                                            <div className={styles.fIcon}><MdTagFaces /></div>
                                                            <div className={styles.plus}>+</div>
                                                        </div>

                                                        <div className={styles.emojiBtnMinus}>
                                                            <div className={styles.fIcon}><MdTagFaces /></div>
                                                            <div className={styles.plus}>-</div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.choicesAbdClose}>
                                                        <div className={styles.dotBtn}>
                                                            <Link href="/">
                                                                {<GoKebabHorizontal />}
                                                            </Link>
                                                        </div>
                                                        <div className={styles.close}>
                                                            <Link href="/">
                                                                <VscClose />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>

                                <ul>
                                    <li>
                                        <Link href="/">Check all your Events</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        {/* ====== start of chat====== */}
                        <div className={styles.chat}>
                            <HiOutlineChatBubbleLeftRight />
                            <span>2</span>

                            <div className={styles.arro}></div>
                            <div className={styles.list_requests}>
                                <div className={styles.navListRequests}>
                                    <h6>CHAT / MESSAGES</h6>
                                    <div className={styles.linkNav}>
                                        <Link href="/">SETTINGS</Link>
                                        <Link href="/">MARK ALL AS READ</Link>
                                    </div>
                                </div>

                                <hr />
                                <div className={styles.div_scroll}>
                                    {
                                        chat.map((order, id) => {
                                            return (
                                                <div key={id} className={styles.acciuntRequests}>
                                                    <div className={styles.div_friend}>

                                                        <div className={styles.image}>
                                                            <Image className={order.img == '' ? styles.imgNone : styles.image} src={order.img} alt="m" width={38} height={38} />



                                                            <div className=
                                                                {
                                                                    order.images.image1 == '' ? styles.imgNone : styles.images
                                                                }>
                                                                <Image src={order.images.image1} alt="u" width={15} height={15} />
                                                                <Image src={order.images.image2} alt="u" width={15} height={15} />
                                                                <Image src={order.images.image3} alt="u" width={15} height={15} />
                                                                <Image src={order.images.image4} alt="u" width={15} height={15} />
                                                            </div>
                                                        </div>

                                                        <div className={styles.data}>
                                                            <Link href='/'>{order.name}</Link>
                                                            <p>{order.description}</p>

                                                            <h6>{order.time}</h6>
                                                        </div>
                                                    </div>

                                                    <div className={styles.fIcon}>{order.icon}</div>

                                                    <div className={styles.choicesAbdClose}>
                                                        <div className={styles.dotBtn}>
                                                            <Link href="/">
                                                                {<GoKebabHorizontal />}
                                                            </Link>
                                                        </div>
                                                        <div className={styles.close}>
                                                            <Link href="/">
                                                                <VscClose />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>

                                <ul>
                                    <li>
                                        <Link href="/">View All Messages</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>



                        {/* ====== start of notifications====== */}
                        <div className={styles.notifications}>
                            <BsLightning />
                            <span>8</span>


                            <div className={styles.arro}></div>
                            <div className={styles.list_requests}>
                                <div className={styles.navListRequests}>
                                    <h6>NOTIFICATIONS</h6>
                                    <div className={styles.linkNav}>
                                        <Link href="/">SETTINGS</Link>
                                        <Link href="/">MARK ALL AS READ</Link>
                                    </div>
                                </div>

                                <hr />
                                <div className={styles.div_scroll}>
                                    {
                                        notifications.map((order, id) => {
                                            return (
                                                <div key={id} className={styles.acciuntRequests}>
                                                    <div className={styles.div_friend}>
                                                        <div className={styles.image}>
                                                            <Image src={order.img} alt="d" width={38} height={38} />
                                                        </div>

                                                        <div className={styles.data}>
                                                            <Link href='/'>{order.name}</Link>

                                                            <p>{order.description}</p>

                                                            <Link className={styles.link_data} href='/'>{order.link}</Link>
                                                            <p>{order.time}</p>
                                                        </div>

                                                    </div>

                                                    <div className={styles.fIcon}>{order.icon}</div>

                                                    <div className={styles.choicesAbdClose}>
                                                        <div className={styles.dotBtn}>
                                                            <Link href="/">
                                                                {<GoKebabHorizontal />}
                                                            </Link>
                                                        </div>
                                                        <div className={styles.close}>
                                                            <Link href="/">
                                                                <VscClose />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>

                                <ul>
                                    <li>
                                        <Link href="/">View All Notifications</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/* ====== start of form_responsiv====== */}
                        <form action="" className={styles.form_responsiv}>
                            <label htmlFor="search"> <GoSearch /> </label>
                            <input type="search" name="search" id="search" placeholder='search here people or pages...' />
                            <div className={styles.arro}></div>

                        </form>
                    </div>





                    {/* ====== start of you_acciunt====== */}
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
                        <div className={styles.arrowBtn}>
                            <RiArrowDropDownLine />
                        </div>


                        <div className={styles.arro}></div>
                        <div className={styles.list_requests}>
                            <div className={styles.div_scroll}>
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
                                    <h6>CHAT SETTINGS</h6>
                                </div>
                                <hr />


                                <div className={styles.chat_settings}>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <span className={styles.Online}></span>
                                                <p>Online</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <span className={styles.Away}></span>
                                                <p> Away</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <span className={styles.Disconnected}></span>
                                                <p> Disconnected</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <span className={styles.Invisible}></span>
                                                <p> Invisible</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <hr />
                                <div className={styles.navListRequests}>
                                    <h6>CUSTOM STATUS</h6>
                                </div>
                                <hr />

                                <form action="" className={styles.form}>
                                    <input type="search" name="search" id="search" defaultValue='Space Cowboy' />
                                    <label htmlFor="search"><MdCheck /></label>
                                </form>



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

                            {/* <ul>
                                <li>
                                    <Link href="/">Check all your Events</Link>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar