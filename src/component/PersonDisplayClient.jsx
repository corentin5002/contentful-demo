'use client'

import styles from "@/app/page.module.css";
import RichText from "@madebyconnor/rich-text-to-jsx";
import Image from "next/image";
export default function PersonDisplayClient({ data }) {
    // console.log("[debug] data",data)
    // console.log("[debug] AVATAR", data[0].fields.avatar)

    return (
        <div className={styles.grid__wrapper}>
            <div className={styles.grid}>
            {data.map((item, index) => {
                return (
                    <div key={index} className={styles.card}>
                        <h2>{item.fields.name}</h2>
                        <RichText richText={item.fields.bio}/>
                        <Image
                            src={'https:' + item.fields.avatar.fields.file.url}
                            alt={item.fields.avatar.fields.title}
                            width={item.fields.avatar.fields.file.details.image.width}
                            height={item.fields.avatar.fields.file.details.image.height}
                        />
                    </div>
                )
            })}
        </div>
    </div>
    )
}

