import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Quote(props) {
    return (
        <div>
            {props.items.map((inputquotes) => (
                <Card 
                    key={inputquotes.id} 
                    className="mb-3" 
                    onClick={() => props.onDeleteQuote(inputquotes.id)} 
                    style={{ cursor: 'pointer' }} 
                >
                    <Card.Header>
                        Quote
                        <Button 
                            variant="link" 
                            className="float-end"
                            onClick={(event) => {
                                event.stopPropagation(); 
                                props.onToggleFavorite(inputquotes.id);
                            }}
                        >
                            <i 
                                className={inputquotes.isFavorite ? "fas fa-heart" : "far fa-heart"} 
                                style={{ color: inputquotes.isFavorite ? 'red' : 'gray', fontSize: '1.5rem' }}
                            ></i>
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                "{inputquotes.quote}"
                            </p>
                            <footer className="blockquote-footer">
                                {inputquotes.author}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Quote;
