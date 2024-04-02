import styles from "./page.module.css";
import { contentfulClient } from '../component/contentfulClient';
import RichText from "@madebyconnor/rich-text-to-jsx";
import MangasDisplay from "@/component/MangasDisplay";

async function fetchData(request) {
    const response = await contentfulClient.getEntries(request);

    if (!response.items) {
        throw new Error('No data found');
    }

    return response.items;
}



export default async function Home() {

    const data = await fetchData({
        content_type: 'page',
        locale: 'fr',
        order: 'fields.pageName'
    })


    console.log("[debug]", data)
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                ICI CEST PARIS
            </div>

            <div className={styles.description}>

                {data.map((page, index) => {

                    return ( <div key={index} className={styles.description__element}>
                        <h2>{page.fields.pageName}</h2>
                        {/*<RichText richText={item.fields.description} />*/}
                    </div>)
                })}
            </div>

        </main>
    );
}
