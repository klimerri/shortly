import "./LinkInput.scss";

function LinkInput() {
    return (
        <form className="link-input">
            <div className="link-input__container">
                <input className="link-input__input" type="text" placeholder="Shorten a link here..."></input>
                <input className="link-input__button" type="submit" value="Shorten it!"></input>
            </div>
        </form>
        
    );
};

export default LinkInput;