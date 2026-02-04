import "./ThreeCards.scss"
import Card from "../Card/Card";
import brandIcon from "../../../images/icon-brand-recognition.svg";
import detailedIcon from "../../../images/icon-detailed-records.svg";
import fullyIcon from "../../../images/icon-fully-customizable.svg";

function ThreeCards () {
    return (
        <div className="three-card__container">
            <Card
            icon={brandIcon}
            header="Brand Recognition"
            text="Boost your brand recognition with each click. 
            Generic links don't mean a thing. 
            Branded links help instil confidence in your content"/>
            <div className="three-card_line"></div>
            <Card
            icon={detailedIcon}
            header="Detailed Records"
            text="Goin indightd into who id clicking your links.
            Knowing when and where people engage with your content
            helps inform better decisions"/>
            <div className="three-card_line"></div>
            <Card
            icon={fullyIcon}
            header="Fully Customizable"
            text="Improve brand awareness and content discoverability
            throught customizable links, supercharging audience engagement."/>
        </div>
    )
}

export default ThreeCards;