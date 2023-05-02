const React = require('react')
const Def = require('../default.jsx')

function comment_form (data) {
    console.log(data)
    return (
        <Def>
          <main>
            <h1>Comment on {data.place.name}</h1>
          </main>
          <form method="POST" action={`/places/${data.place.id}/comment`}>
            <div className="form-group">
                <label htmlFor="author">Review Author</label>
                <input 
                className="form-control" 
                id="author" 
                name="author"  
                required />
            </div>
            <div className="form-group">
                <label htmlFor="content">Comments</label>
                <input 
                className="form-control" 
                id="content" 
                name="content" 
                required />
            </div>
            <div className="form-group">
                <label htmlFor="stars">Star Rating</label>
                <select name="stars" id="stars">
                    <option value='0.0' key='0.0'>0.0</option>
                    <option value='0.5' key='0.5'>0.5</option>
                    <option value='1.0' key='1.0'>1.0</option>
                    <option value='1.5' key='1.5'>1.5</option>
                    <option value='2.0' key='2.0'>2.0</option>
                    <option value='2.5' key='2.5'>2.5</option>
                    <option value='3.0' key='3.0'>3.0</option>
                    <option value='3.5' key='3.5'>3.5</option>
                    <option value='4.0' key='4.0'>4.0</option>
                    <option value='4.5' key='4.5'>4.5</option>
                    <option value='5.0' key='5.0'>5.0</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="rant">Rant</label>
                <input 
                type="checkbox"
                id="rant" 
                name="rant" 
                 />
            </div>
            <input type="submit" value="Submit Comment" />
          </form>


        </Def>
    )
}

module.exports = comment_form
