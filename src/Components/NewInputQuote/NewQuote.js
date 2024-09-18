import QuoteForm from "./QuoteForm"

const NewQuote = (props) => {

    const saveQuoteDataHandler = (enteredQuote) => {
        const quoteData = {
            ...enteredQuote,
            id: Math.random().toString(),
        }
        props.onAddQuote(quoteData)
    }

    return (
        <div>
            <QuoteForm onSaveQuoteData={saveQuoteDataHandler} />{" "}
        </div>
    )
}

export default NewQuote