import CategoryEvent from '../../../src/components/events/categoryEvent.jsx';

export default function IndexCategorysPage ({ data, id }) { return <CategoryEvent data={data} id={id} /> };

export async function getStaticPaths() {

    const { events_categories } = await import('../../../data/data.json');
    const allPaths = events_categories.map(event => {
        return {
            params: {
                category: event.id.toString(),
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    };
};

export async function getStaticProps(context) {
    const id = context?.params.category;
    const { allEvents } = await import('../../../data/data.json');
    const data = allEvents.filter(event => event.city === id)

    return {
        props:{
            data,
            id
        },
    };
};