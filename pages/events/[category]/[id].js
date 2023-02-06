import SingleEvent from '../../../src/components/events/singleEvent';

export default function CategoryIdPage({ data }) { return <SingleEvent data={data}/> };

export async function getStaticPaths() {
    const { allEvents } = await import('../../../data/data.json');
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                category: path.city,
                id: path.id
            },
        };
    });
    return {
        paths: allPaths,
        fallback: false,
    }
};

export async function getStaticProps(context) {
    const id = context?.params.id;
    const { allEvents } = await import('../../../data/data.json');
    const eventData = allEvents.find(event => id === event.id)

    return {
        props:{
            data: eventData,
            id
        },
    };
};