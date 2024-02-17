"use client"
import NavLink1 from "./navLink/NavLink1"
import styles from "./links.module.css"
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about"
    }, {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Features",
        path: "/blog",
    },
];
const Links = () => {
    const [open, setOpen] = useState(false);


    // TEMPORARY
    const session = true;
    const isAdmin = true;

    return (

        <div className="styles.container">

            <div className={styles.links}>
                {links.map((link => (
                    <NavLink1 item={link} key={link.title} />
                )))}
                {session ? (
                    <>
                        {
                            isAdmin &&
                            (
                                <NavLink1 item={{ title: "Admin", path: "/admin" }} />
                            )
                        }
                        <Link className={styles.logout} href="/login">Log-in</Link>
                    </>
                ) : (
                    <NavLink1 item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <Image 
            className={styles.menuBtn}
            src="/menu.png" 
            width={30} 
            height={30} 
            onClick={() => setOpen((prev) => !prev)} />


            {
                open && (
                    <div className={styles.mobileLinks}>
                        {links.map((link) => (
                            <NavLink1 item={link} key={link.title} />
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default Links;