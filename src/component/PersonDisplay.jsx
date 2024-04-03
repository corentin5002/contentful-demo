import {contentfulClient} from "@/component/contentfulClient";
import PersonDisplayClient from "@/component/PersonDisplayClient";

async function fetchMangaList(params) {

    const request = {
        content_type: 'topicPerson',
        locale: params.locale === 'defaults' ? 'fr' : params.locale,

    }
    const response = await contentfulClient.getEntries(request);

    if (!response.items) {
        throw new Error('No data found');
    }

    return response.items;
}


export default async function PersonDisplay({params}) {

    const data = await fetchMangaList(params);

    return (
        <PersonDisplayClient data={data}/>
    )
}