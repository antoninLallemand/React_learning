import '../styles/Card.css'

function Card(){
    const firstArticle = 12
    const secondArticle = 15
    const thirdArticle = 5
    return(
        <div className="sdf-card">
            <h2>Bag : </h2>
            <ul>
                <li>First article : {firstArticle}€</li>
                <li>First article : {secondArticle}€</li>
                <li>First article : {thirdArticle}€</li>
            </ul>
            Total price : {firstArticle + secondArticle + thirdArticle}€
        </div>
    )
}

export default Card