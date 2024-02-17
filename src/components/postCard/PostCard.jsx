import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"
function postCard({post}) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/drone.jpg" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.25</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link  className = {styles.Link} href={`/blog/${post.id}`}>Read more</Link>
      </div>
    </div>
  )
}

export default postCard
