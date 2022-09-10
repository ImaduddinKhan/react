import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addNewQuoteHandler = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <QuoteForm onAddQuote={addNewQuoteHandler} />
    </div>
  );
};

export default NewQuote;
