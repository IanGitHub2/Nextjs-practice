import Image from 'next/image';
import Link from 'next/link';

export default function categoryEvent ({ data, id }) {
    return (
        <div className='category-events'>
            <h1> Events in {id}</h1>
            <div className='category-events-container'>
                { data?.map(event => 
                    <Link className='category-event' key={event?.id} href={`/events/${event.city}/${event.id}`}> 
                        <Image className='category-event-img' alt={event?.alt} width={350} height={330} src={event?.image}/> 
                        <h2>{event?.title}</h2>
                        <p>{event?.description}</p>
                    </Link>
                )}
            </div>
        </div>
    )
};