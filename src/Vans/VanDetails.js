import React from 'react';
import '../server'; //the mirage server where we 'fetched our api'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

/* 
 I dont know why the element below is wrapped in a conditional, 
 but i do no that without that conditional statement, the page will not render and give some sort of error.
*/

export default function VanDetails() {
    const params = useParams()
    console.log(params.id)

    const [vansDetail, setVansDetail] = React.useState();
    React.useEffect(function(){
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVansDetail(data.vans))
    }, [params.id]) //The dependency runs the effect whenever the param.id changes
    console.log(vansDetail)
    return (
        <>
            <section className="van-detail">
                <Link to='/vans' className='back'> #Back to vans
                </Link>
                {vansDetail ? <div className="van-details-container">
                    <figure>
                        <img src={vansDetail.imageUrl} alt="No pishure for u boo" />
                    </figure>

                    <article>
                        <button>
                            {vansDetail.type}
                        </button>
                    
                        <h1>{vansDetail.name}</h1>

                        <p>{vansDetail.price}/day</p>

                        <p className="description">{vansDetail.description}</p>

                        <button className="rent">
                            Rent This Van
                        </button>
                    </article>
                </div> : <h2>Loading...</h2>}
            </section>
        </>
    )
}