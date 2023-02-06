import Image from 'next/image';
import Link from 'next/link';

export const EventsPage = ({ data }) => {
    return (
        <div className='events-idv-page'>
            { data.map(event => 
                <Link className='events-place-container' key={event?.id} href={`/events/${event?.id}`}>
                    <Image className='events-img' alt={event?.alt} width={390} height={400} src={event?.image}/> 
                    <h2>{event?.title}</h2>
                </Link>
            )}
        </div>
    )
}
