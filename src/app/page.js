import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Ai Powered Drone Delivery Service.</h1>
        <p className={styles.desc}>
        
        </p>
        <div className={styles.buttons}>
          <Link href="/about" className={styles.button} >Learn More</Link>
          <Link className={styles.button} href="/contact">Contact</Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/drone.jpg" alt=""  className={styles.heroImg} height={500} width={500}/>
      </div>
    </div>
  );
};

export default Home;