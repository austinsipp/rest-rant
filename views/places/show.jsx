const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = ( 
        <h3 className="inactive">
            No Comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6">
                    <h1>{data.place.name}</h1>
                    <img src={data.place.pic} alt={data.place.name}></img>
                    <p className='text-center'>
                        Located in {data.place.city}, {data.place.state}
                    </p>
                </div>
            
            <div className="col-sm-6">
                <h2>
                Description
                </h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>

            <div>
                <h2>Comments</h2>
                {comments}
            </div>
            <a href={`/places/${data.place.id}/comment`} className="btn btn-warning"> 
                Make a Comment
            </a> 
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                Edit
            </a> 
            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                Delete
                </button>
            </form>  
            </div>   

            </div>
          </main>
        </Def>
    )
}

module.exports = show
