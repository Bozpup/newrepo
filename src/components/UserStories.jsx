import React from "react";
import styles from "../styles/UserStories.module.css";
import img1 from '../assets/svgs/userstory_pic1.svg'
import img from '../assets/svgs/userstory_pic2.svg'
const UserStories = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.userstory} style={{color: "#000000"}}>
          <p>
            <h4>
              <strong>User stories</strong>{" "}
            </h4>
          </p>
          <p>See what our users have to say about us....</p>
        </div>
        <div>
          <div className={styles.flexcontainer}>
            <div className={styles.testimonial}>
             
              <div className={styles.cols}>
              <div className={styles.quote}>“</div>
                <p className={styles.testimonialtext}>
                  Having a wide-range of choices from different transport
                  companies at once has saved me so much time.
                </p>
                <h4 className={styles.testimonialauth}><strong>Michelle Dede</strong></h4>
              </div>
              <div className={styles.testimonialimg} style={{left: "341px;"}}>
                <img
                  src={img}
                  alt=""
                  width="226px"
                  height="230px"
                />
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.cols}>
              <div className={styles.quote}>“</div>
                <p className={styles.testimonialtext}>
                
                  I’m extremely happy that I know this application. I’ve wished
                  for it for so long. Booking buses is way easier now.
                </p>
                <h4 className={styles.testimonialauth}><strong>Francis Akah</strong></h4>
              </div>
              <div className={styles.testimonialimgs}>
                <img
                  src={img1}
                  width="226px"
                  height="230px"
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStories;
