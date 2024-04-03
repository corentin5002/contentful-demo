import styles from "@/app/page.module.css";
import { contentfulClient } from '@/component/contentfulClient';
import PersonDisplay from "@/component/PersonDisplay";

async function fetchData(request) {
    const response = await contentfulClient.getEntries(request);

    if (!response.items) {
        throw new Error('No data found');
    }

    return response.items;
}



export default async function Home({params}) {

    const data = await fetchData({
        content_type: 'page',
        locale: params.locale === 'defaults' ? 'fr' : params.locale,
        order: 'fields.pageName'
    })

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

            <PersonDisplay params={params}/>
        </main>
    );
}
