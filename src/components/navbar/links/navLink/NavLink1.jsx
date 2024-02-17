"use client"
import { usePathname } from "next/navigation"
import styles from "./navLink.module.css"
import Link from "next/link"
function navLink({item}) {

   const pathName = usePathname();
  return (
    <div>
       <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`} >
        {item.title}
       </Link>
    </div>
  )
}

export default navLink
