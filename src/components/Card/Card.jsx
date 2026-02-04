import "./Card.scss"

function Card({ icon, header, text }) {
    return (
        <div className="card__container">
            <div className="card__icon-container">
                <img src={icon} className="card__icon" />
            </div>
            <span className="card__header">{header}</span>
            <p className="card__text">{text}</p>
        </div>
    )
}

export default Card;