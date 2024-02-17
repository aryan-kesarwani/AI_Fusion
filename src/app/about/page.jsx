import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
        Empowering Hope: AI-Driven Drone Deliveries Transforming Healthcare in Remote and War-Torn Regions
        </h1>
        <p className={styles.desc}>
        MedSwift's AI-powered delivery drone service revolutionizes medical supply logistics with advanced navigation, dynamic route planning, and predictive maintenance. The system ensures swift, secure, and adaptive deliveries to remote areas, supported by real-time monitoring and biometric security features. Embracing cutting-edge technology, MedSwift transforms the landscape of healthcare delivery with efficient and intelligent aerial solutions.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.jpg"
          alt="About Image"
          height={500} width={500}
          className={styles.img} 
        />
      </div>
    </div>
  );
};

export default AboutPage;