const React = require('react')
const Def = require('./default')

function home () {
    return (
    <Def>
        <main>
            <h1>HOME</h1>
            <img src='/images/fruit-drink.jpg' alt='Fruit Drink'></img>
            <div>
            Photo by <a href="https://unsplash.com/ja/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </main>
        <a href="/places">
        <button className="btn-primary">Places Page</button>
        </a>

    </Def>
    )
}

module.exports = home