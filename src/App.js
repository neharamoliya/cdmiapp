import './App.css';
import { TfiEmail } from "react-icons/tfi";
import { FaCertificate } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import myimg1 from './img/i1.SVG';
import myimg2 from './img/i2.jpg';
import myimg3 from './img/i3.jpg';
import myimg4 from './img/i4.jpg';
import myimg5 from './img/i5.jpg';
import myimg6 from './img/F_logo.SVG';

function App() {
  return (
  <body>
    <header>
        <div className="bg-blue">
          <div className="container">
    {/* /* ==========================top header========================== */} 
              <div className="top-header flex">
                <div className="left_info flex">
                  <ul>
                    <li>
                        <a><TfiEmail></TfiEmail></a>
                        <span>info@cdmi.in </span>
                        <a><FaCertificate></FaCertificate></a>
                        <span> Verify Certificate</span>
                    </li>
                  </ul>
                </div>
                <div className="center_info">
                    <span>HAVE ANY QUESTION ? +91 90333 16003</span>
                </div>
                <div className="right_social">
                    <a><FaFacebookF></FaFacebookF></a>
                    <a><FaTwitter></FaTwitter></a>
                    <a><TiSocialGooglePlus></TiSocialGooglePlus></a>
                    <a><FaLinkedin></FaLinkedin></a>
                    <a><ImInstagram></ImInstagram></a>
                    <a><CiYoutube></CiYoutube></a>
                    <a><FaWhatsapp></FaWhatsapp></a>
                </div>
              </div>
            </div>
        </div>
    {/*=================================== end to[ header======================== */}
    {/*====================================start logo header======================  */}
    <div className="container">
      <div className="logo-header flex">
            <div className="main_logo">
                <img src={require('./img/i1.SVG')}></img>
            </div>
    {/*====================================end logo header========================  */}
    {/* ===================================start navigation========================= */}
      <nav>
          <div className="logo-header">
            <ul className="main_menu flex">
              <li>HOME</li>
              <li>COURSE<a><IoIosArrowDown></IoIosArrowDown></a></li>
              <li>ACTIVITIES<a><IoIosArrowDown></IoIosArrowDown></a></li>
              <li>BLOG</li>
              <li>KNOW US<a><IoIosArrowDown></IoIosArrowDown></a></li>
              <li>GET IN TOUCH</li>
              <li>STUDENT ZONE<a><IoIosArrowDown></IoIosArrowDown></a></li>
            </ul>
          </div>
      </nav>
    </div>
  </div>
{/*====================================end navigation============================ */}
 </header>
 {/* ==================================Start main================================ */}
 <main>
    <div className='item'>
    <img src={require('./img/i2.jpg')}></img>
    </div>
 </main>
 {/* =================================end main=================================== */}
 {/* ===============================TItle section================================= */}
 <section>
  <div className="container">
    <div className="title">
      <div className="main-title">
          <p className="title">CREATIVE COURSE</p>
          <p className="sub-title">OFFERD COURSES</p>
        </div>
      </div>
    </div>
</section>
{/* ====================================end title section============================= */}
{/* =====================================Course section============================= */}
<section>
  <div className="container">
    <div className="main-course flex">
        <div className="sub-course flex">
        <div className="content_box">
          <div className="course-img">
            <img src={require('./img/i3.jpg')}></img>
          <div className="c-title">Development Courses</div><hr></hr>
          <div className="icon"><IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar><IoIosStarHalf></IoIosStarHalf><button>Know More..!</button>
          </div>
        </div>
      </div>
      <div className="content_box">
        <div className="course-img">
          <img src={require('./img/i4.jpg')}></img>
            <div className="c-title">Design Courses</div><hr></hr>
            <div className="icon"><IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar><IoIosStarHalf></IoIosStarHalf><button>Know More..!</button>
            </div>
          </div>
        </div>
        <div className="content_box">
        <div className="course-img">
          <img src={require('./img/i5.jpg')}></img>
            <div className="c-title">Programming IT</div><hr></hr>
            <div className="icon"><IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar><IoIosStarHalf></IoIosStarHalf><button>Know More..!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-course flex">
        <div className="sub-course flex">
        <div className="content_box">
          <div className="course-img">
            <img src={require('./img/i6.jpg')}></img>
          <div className="c-title">Trendy Courses</div><hr></hr>
          <div className="icon"><IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar><IoIosStarHalf></IoIosStarHalf><button>Know More..!</button>
          </div>
        </div>
      </div>
      <div className="content_box">
        <div className="course-img">
          <img src={require('./img/i7.jpg')}></img>
            <div className="c-title">Civil-Mech. Engineering</div><hr></hr>
            <div className="icon"><IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar><IoIosStarHalf></IoIosStarHalf><button>Know More..!</button>
            </div>
          </div>
        </div>
        <div className="content_box">
        <div className="course-img">
          <img src={require('./img/i0.jpg')}></img>
            <div className="c-title">Business Development</div><hr></hr>
            <div className="icon"><IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar> <IoIosStar></IoIosStar><IoIosStarHalf></IoIosStarHalf><button>Know More..!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="container">
    <div>
      <button className="btn1 justify-content-center">View All Courses</button>
    </div>
</div>
{/* ====================================course section=============================== */}
{/* ====================================About Us====================================== */}
<section>
  <div className="about-us flex">
    <div className="info">
      <div className="info-1">ABOUT US</div>
      <div className="info-2">IT CAREER IN SURAT, MOVING TOWARDS THE BETTER <br></br>TOMORROW!</div>
      <div className="info-3">Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</div>
      <div>
        <button className="btn2">Enroll Now..!</button>
      </div>
    </div>
    <div className="about-img flex">
      <img src={require('./img/i8.jpg')}></img>
    </div>
  </div>
</section>
{/* ====================================About Us======================================= */}
{/* =====================================parrelex======================================= */}
<section>
      <div className="count1">
        <img src={require ('./img/key.jpg')}></img>
      </div>

      <div className="container">
        <div className="count_icon flex">
          <div className="flex">
            <div className="count_img">
              <img src={require ('./img/i20.png')}></img>
              <p className="count">18000+</p>
              <p className="count_text">HAPPY STUDENTS</p>
            </div>
            <div className="count_img">
              <img src={require ('./img/i21.png')}></img>
              <p className="count">10+</p>
              <p className="count_text">CERTIFICATION APPROVAL</p>
            </div>
            <div className="count_img">
              <img src={require ('./img/i22.png')}></img>
              <p className="count">100+</p>
              <p className="count_text">CERTIFIED TEACHERS</p>
            </div>
            <div className="count_img">
              <img src={require ('./img/i23.png')}></img>
              <p className="count">12000+</p>
              <p className="count_text">STUDENTS PLACED</p>
            </div>  
          </div>
        </div>
      </div>
    </section>
{/* ====================================parrelex========================================= */}
{/* ====================================Testimonial======================================= */}
<section>
  <div className="container">
    <div className="s-info flex">
      <div className="t-info">
        <p className="t1">HAPPY STUDENT</p>
        <p className="t2">ALUMIT SPEAK</p>
        <p className="t3"><FaQuoteRight></FaQuoteRight></p>
        <p className="t4">Good teaching. Well nature staff.. Good education they provide for every student in the institution... Staff's are very quite,decent ,multi talented and well matured to........ Thank you creative multimedia!!!!</p>
        <div className="t-img">
        <img src={require('./img/i13.jpg')}></img>
        </div>
        <div className="user">
          <p className="i1 flex">Ishita Beladiya</p>
          <p className="i2">Flutter Devloper</p>
          <p className="i3">@Samp Technology</p>
        </div>
      </div>
    <div className="side-image flex">
      <img src={require('./img/s.png')} style={{objectFit:"cover",width:"100%"}}></img>
    </div>
    </div>
  </div>
</section>
{/* ====================================Testimonial======================================= */}
{/* ================================Difference================================================ */}
<section className="difference">
  <div className="container">
    <div className="title">
      <div className="main-title1">
          <p className="title">READ YOUR DIFFERENCS</p>
          <p className="sub-title">WHY CHOOSE <br></br>CREATIVE</p>
        </div>
      </div>
      <div className="main-dif1">
        <div className="single-dif">
          <div className="content_box2">
            <div className="inner-box">
              <div className="fbox">
                <div className="fbox1"><img src={require('./img/icon.png')}></img></div>
                </div>
              <h1 className="f-title">Industry Experts As Trainers</h1>
              <p className="f-text">Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
            </div>
          </div>
        </div>
        <div className="single-dif">
          <div className="content_box2">
            <div className="inner-box">
              <div className="fbox">
                <div className="fbox2"><img src={require('./img/icon.png')}></img></div>
                </div>
              <h1 className="f-title">Latest Curriculum</h1>
              <p className="f-text">We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
            </div>
          </div>
        </div>
        <div className="single-dif">
          <div className="content_box2">
            <div className="inner-box">
              <div className="fbox">
                <div className="fbox3"><img src={require('./img/icon.png')}></img></div>
                </div>
              <h1 className="f-title">Latest Technology</h1>
              <p className="f-text">We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-dif1">
        <div className="single-dif">
          <div className="content_box2">
            <div className="inner-box">
              <div className="fbox">
                <div className="fbox4"><img src={require('./img/icon.png')}></img></div>
                </div>
              <h1 className="f-title">Interview Assistance</h1>
              <p className="f-text">At the end of each training,our training instructor will go through the possible technical questions you may be asked</p>
            </div>
          </div>
        </div>
        <div className="single-dif">
          <div className="content_box2">
            <div className="inner-box">
              <div className="fbox">
                <div className="fbox5"><img src={require('./img/icon.png')}></img></div>
                </div>
              <h1 className="f-title">Free Upgradation</h1>
              <p className="f-text">We will be provided free upgradation for any newer version of the course you have.</p>
            </div>
          </div>
        </div>
        <div className="single-dif">
          <div className="content_box2">
            <div className="inner-box">
              <div className="fbox">
                <div className="fbox6"><img src={require('./img/icon.png')}></img></div>
                </div>
              <h1 className="f-title">Lifetime Support</h1>
              <p className="f-text">We will provide you lifetime support on all the courses you learned from us.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
{/* ================================Difference================================================ */}
<section>
  <div className="container">
    <div className="title">
      <div className="main-title">
          <p className="title">STUDENT PLACEMENT</p>
          <p className="sub-title">OUR RECRUITMENT <br></br>PARTNERS</p>
        </div>
      </div>
      <div className="image-box flex">
        <div className="ibox flex">
          <img src={require('./img/p1.jpg')}></img>
        </div>
        <div className="ibox flex">
          <img src={require('./img/p2.jpg')}></img>
        </div>
        <div className="ibox flex">
          <img src={require('./img/p3.jpg')}></img>
        </div>
        <div className="ibox flex">
          <img src={require('./img/p4.jpg')}></img>
        </div>
        <div className="ibox flex">
          <img src={require('./img/p5.jpg')}></img>
        </div>
        <div className="ibox flex">
          <img src={require('./img/p6.jpg')}></img>
        </div>
      </div>
    </div>
</section>
  {/* ===============================student placement================= */}
  {/* ====================================Demannded=================== */}
  <section className="demand">
    <div className="container">
      <p className="d-title">Our Demanded Course-</p>
    <div className="d-name flex">
      <div className="item-name flex">
        <p>Codeigniter Training Institute In Mota Varachha</p>
       <p>Flutter Training In Surat</p>
      <p>PHP Training Institute In Surat</p>
      <p>Ios App Training Institute </p>
      <p>Unity 3d Training Institute In Katargam</p>
    </div>
  </div>
  <div className="d-name1 flex">
      <div className="item-name1 flex">
      <p>Angular Js Training Course</p>
       <p>Civil Engineering Training Institute In Katargam </p>
      <p>Adobe Xd Design Course</p>
      <p>PHP Training Institute In Katargam</p>
      <p>Solidworks Training Institute In Katargam</p>
    </div>
  </div>
  <div className="d-name2 flex">
      <div className="item-name2 flex">
        <p>Codeigniter Training Institute In Mota Varachha</p>
       <p>Flutter Training In Surat</p>
      <p>PHP Training Institute In Surat</p>
      <p>Ios App Training Institute </p>
      <p>Unity 3d Training Institute In Katargam</p>
    </div>
  </div>
  <div className="d-name3 flex">
      <div className="item-name3 flex">
        <p>Codeigniter Training Institute In Mota Varachha</p>
       <p>Flutter Training In Surat</p>
      <p>PHP Training Institute In Surat</p>
    </div>
  </div>
    </div>
  </section>
  {/* ====================================Demannded=================== */}
  {/* ==================================Footer======================= */}

<footer>
    <section>
      <div className="container">
        <div className="main_table flex">
          <div className="single_table1 flex">
            <div className="part_1">
              <img src={require ('./img/F_logo.SVG')}></img>
              <p className="logo_text">Creative Design and Multimedia Institute is leading computer training 
                institute in surat. We offers government approved computer training courses in Surat.</p>
              <p className="logo_text1">FOLLOW US ON</p>
              <div className="main_logo1 flex">
                <p className="side_logo"><FaFacebookF></FaFacebookF></p>
                <p className="side_logo"><FaTwitter></FaTwitter></p>
                <p className="side_logo"><TiSocialGooglePlus></TiSocialGooglePlus></p>
                <p className="side_logo"><FaLinkedin></FaLinkedin></p>
                <p className="side_logo"><ImInstagram></ImInstagram></p>
                <p className="side_logo"><CiYoutube></CiYoutube></p>
                <p className="side_logo"><FaWhatsapp></FaWhatsapp></p>
            </div>
          </div>
        </div>

        <div className="single_table2 flex">
            <div className="part_2">
              <p className="main_f">FEATURE LINKS</p>
              <p className="simple_text"><FaHandPointRight></FaHandPointRight> About Us</p>
              <p className="simple_text"><FaHandPointRight></FaHandPointRight> Blogs</p>
              <p className="simple_text"><FaHandPointRight></FaHandPointRight> Join Us</p>
              <p className="simple_text"><FaHandPointRight></FaHandPointRight> Company Login</p>
              <p className="simple_text"><FaHandPointRight></FaHandPointRight> Certificate Verification</p>
          </div>
        </div>

        <div className="single_table3 flex">
            <div className="part_3">
              <p className="add_info">CONTACT US</p>
              <p className="office">HEAD OFFICE - YOGICHOWK</p>
              <p className="address">401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <p className="simple_mo">Mo :<p className="number">+91 90333 16003</p></p>
              <p className="other">OTHER BRANCHES</p>
              <p className="simple_text3"><MdLocationCity></MdLocationCity> Katargam</p>
              <p className="simple_text3"><MdLocationCity></MdLocationCity> Mota Varachha</p>
              <p className="simple_text3"><MdLocationCity></MdLocationCity> Adajan</p>
              <p className="simple_text3"><MdLocationCity></MdLocationCity> Navsari</p>
          </div>
        </div>
      </div>
      </div>
      <div className="copyright">
        <div className="container">
        <p class="copyright-text">
                    © <span id="date">2023</span>All Rights Reserved by Creative Design & Multimedia Institute.
        </p>
        </div>
      </div>
    </section>
</footer>
  {/* ==================================FOOTER=========================== */}
  </body>
  )
}

export default App