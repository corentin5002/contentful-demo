import styles from "@/app/page.module.css";
import RichText from "@madebyconnor/rich-text-to-jsx";
import {contentfulClient} from "@/component/contentfulClient";
import PersonDisplayClient from "@/component/PersonDisplayClient";

async function fetchMangaList() {

    const request = {
        content_type: 'topicPerson',
        locale: 'en-US',
    }
    const response = await contentfulClient.getEntries(request);

    if (!response.items) {
        throw new Error('No data found');
    }

    return response.items;
}


export default async function PersonDisplay() {

    const data = await fetchMangaList();

    return (
        <PersonDisplayClient data={data}/>
    )
}