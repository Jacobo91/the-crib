


export function Card({ property }){
    console.log(property.img)
    return(
        <a href={property.link} className="card" target='_blank'>
            <img src={property.img} alt={property.id} className='image'/>
            <article className='card-info' >
                <p>{property.title}</p>
                <p>
                    <i className="fa-regular fa-user"></i>
                    {property.guests} Guests
                </p>
                <p>{property.location}</p>
            </article>
            <p className='price' >{property.price}</p>
        </a>
    )
}

