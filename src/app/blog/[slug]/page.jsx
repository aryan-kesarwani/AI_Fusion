import styles from "./singlePost.module.css"
import Image from "next/image"
function SinglePostPage({params}) {
  console.log(params)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/1.jpg" alt="not found" className={styles.img}  fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
            <Image className={styles.avatar}  src="/1.jpg" 
            height={50} width={50}
            />
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValue}>Shivam Thakkar</span>
            </div>
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>Shivam Thakkar</span>
            </div>
        </div>
        <div className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nulla recusandae voluptates odio voluptate sunt porro quo explicabo beatae vitae!
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
