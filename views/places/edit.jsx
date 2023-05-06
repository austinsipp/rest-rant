const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    console.log(data)
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
          </main>
          <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <div className="form-group">
                <label htmlFor="name">Place Name</label>
                <input 
                className="form-control" 
                id="name" 
                name="name" 
                value={data.place.name} 
                required />
            </div>
            <div className="form-group">
                <label htmlFor="pic">Place Picture</label>
                <input 
                className="form-control" 
                id="pic" 
                name="pic" 
                value={data.place.pic} 
                required />
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input 
                className="form-control" 
                id="city" 
                name="city" 
                value={data.place.city} 
                required />
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input 
                className="form-control" 
                id="state" 
                name="state" 
                value={data.place.state} 
                required />
            </div>
            <div className="form-group">
                <label htmlFor="cuisines">Cuisines</label>
                <input 
                className="form-control" 
                id="cuisines" 
                name="cuisines" 
                value={data.place.cuisines} 
                required />
            </div>
            <div className="form-group">
                <label htmlFor="founded">Founded</label>
                <input 
                className="form-control" 
                id="founded" 
                name="founded" 
                value={data.place.founded} 
                />
            </div>
            <input type="submit" value="Submit Changes" />
          </form>


        </Def>
    )
}

module.exports = edit_form
