import React from 'react';
import '../server'; //the mirage server where we 'fetched our api'
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

/* 
 I dont know why the element below is wrapped in a conditional, 
 but i do no that without that conditional statement, the page will not render and give some sort of error.
*/

export default function VanDetails() {
    const params = useParams()
    console.log(params.id)
    const location = useLocation()

    const [vansDetail, setVansDetail] = React.useState();
    React.useEffect(function(){
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVansDetail(data.vans))
    }, [params.id]) //The dependency runs the effect whenever the param.id changes
    console.log(vansDetail)

    const search = location.state && location.state.search || null
    // basically, when a user filters the products, and then click on one of the filtered vans, and then wants to go back to the filtered listed vans, we do all this. Import useloacation, 'state = {{search: `?${searchparams.toString()}`}}' in the mapped navlink on vans page. 'search' can be anything you want, but state is constant as it is from react. 
    //explaining the code above is basically get the state location in vans.js, the get the state's obj search property and if they don't exists go back to all vans page

    const type = location.state && location.state.type || "all"
    //here, we want the back to vans text in vandetails to say back to the previously applied filtered vans. So in vans.js, we added a type property to our state object and rendered the type variable above in our back to text
    return (
        <>
            <section className="van-detail">
                <Link to={`/vans${search}`} 
                className='back'>  &larr; Back to all {type} vans
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