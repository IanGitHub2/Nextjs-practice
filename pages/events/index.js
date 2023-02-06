import { EventsPage } from '../../src/components/events/events-page';

export default function IndexEventsPage({ data }) {
    return <EventsPage data={data}/>
};

export async function getStaticProps() {
    
    const { events_categories } = await import('../../data/data.json')
    return {
        props:{
            data: events_categories,
        },
    };
};