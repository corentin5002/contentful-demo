import styles from "@/app/page.module.css";
import RichText from "@madebyconnor/rich-text-to-jsx";

export default function MangasDisplay({data}) {
    return (
        <div className={styles.manga__list}>
            {data.map((item, index) => {
                return (
                    <div key={index} className={styles.manga__item}>
                        <h2>{item.fields.title}</h2>
                        <RichText richText={item.fields.description} />
                    </div>
                )
            })}
        </div>
    )
}