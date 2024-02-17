import Links from "./links/Links"
import styles from"./navbar.module.css"
import Link from "next/link"
import Image from "next/image"
function Navbar1() {

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}><Image src="/logo.png" height={50} width={100} alt="Image Not found"/></Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar1
