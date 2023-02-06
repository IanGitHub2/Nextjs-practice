import Link from "next/link";
import Image from "next/image";

export default function HomePage({ data }) {
    return (
        <div className='home-body'>
            { data.map(event => 
                <Link className='link-card' key={event?.id} href={`/events/${event?.id}`}>
                    <Image className='link-img' alt={event?.alt} width={600} height={280} src={event?.image}/>
                    <div className='link-content'>
                        <h2>{event?.title}</h2> 
                        <p>{event?.description}</p> 
                    </div>
                </Link>
            )}
        </div>
    )
}
