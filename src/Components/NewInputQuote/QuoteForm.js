import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

const QuoteForm = (props) => {
    const [enteredQuote, setEnteredQuote] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [quoteIsInvalid, setQuoteIsInvalid] = useState(false);
    const [authorIsInvalid, setAuthorIsInvalid] = useState(false);

    const quoteChangeHandler = (event) => {
        setEnteredQuote(event.target.value);
        setQuoteIsInvalid(false);
    };

    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
        setAuthorIsInvalid(false);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // Prevents the page from reloading

        let formIsValid = true;

        if (!enteredQuote) {
            setQuoteIsInvalid(true);
            formIsValid = false;
        }

        if (!enteredAuthor) {
            setAuthorIsInvalid(true);
            formIsValid = false;
        }

        if (!formIsValid) {
            setErrorMessage("Please fill in all fields before submitting.");
            return;
        }

        const quoteData = {
            quote: enteredQuote,
            author: enteredAuthor,
        };

        props.onSaveQuoteData(quoteData);

        setEnteredQuote("");
        setEnteredAuthor("");
        setErrorMessage("");
    };

    const resetHandler = () => {
        setEnteredQuote("");
        setEnteredAuthor("");
        setErrorMessage("");
        setQuoteIsInvalid(false);
        setAuthorIsInvalid(false);
    };

    return (
        <div className="container my-3">
            <Form onSubmit={submitHandler} className="mb-4">
                <Stack direction="horizontal" gap={3} className="align-items-end">
                    <Form.Group className="flex-grow-1">
                        <Form.Label>Quote</Form.Label>
                        <Form.Control 
                            type="text"
                            value={enteredQuote}
                            onChange={quoteChangeHandler}
                            placeholder="Enter quote"
                            isInvalid={quoteIsInvalid}
                        />
                        
                    </Form.Group>

                    <Form.Group className="flex-grow-2">
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            type="text"
                            value={enteredAuthor}
                            onChange={authorChangeHandler}
                            placeholder="Enter author"
                            isInvalid={authorIsInvalid}
                        />
                        
                    </Form.Group>

                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                    <Button variant="outline-danger" type="button" onClick={resetHandler}>
                        Reset
                    </Button>
                </Stack>
                {errorMessage && <p style={{ color: 'red' }}> {errorMessage} </p>}
            </Form>

            {Array.isArray(props.items) && props.items.length > 0 ? (
                props.items.map((inputquotes) => (
                    <Card key={inputquotes.id} className="mb-3 shadow-sm">
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p className="font-italic">"{inputquotes.quote}"</p>
                                <footer className="blockquote-footer">
                                    — <cite title="Author">{inputquotes.author}</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p></p>
            )}
        </div>
    );
};

QuoteForm.defaultProps = {
    items: [] 
};

export default QuoteForm;
