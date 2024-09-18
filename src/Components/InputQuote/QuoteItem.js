

function QuoteItem (props) {
    return (
        <div>
            <div>
                <h2>{props.quote}</h2>
            </div>
            <div>{props.author}</div>
        </div>
    )
}

export default QuoteItem