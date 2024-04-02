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
        content_type: 'manga-2',
        locale: 'fr',
    })


    console.log("[debug]", data[0].sys.environment)
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                ICI CEST PARIS
            </div>

            <div className={styles.description}>

                {/*{data.map((item, index) => {*/}

                {/*    console.log("[debug]", index ,item)*/}
                {/*    return ( <div key={index}>*/}
                {/*        <h2>{item.fields.title}</h2>*/}
                {/*        /!*<RichText richText={item.fields.description} />*!/*/}
                {/*    </div>)*/}
                {/*})}*/}
                <MangasDisplay data={data} />
            </div>

        </main>
    );
}
