import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addNewQuoteHandler = (formData) => {
    console.log(formData);

    history.push("/quotes");
  };

  return (
    <div>
      <QuoteForm onAddQuote={addNewQuoteHandler} />
    </div>
  );
};

export default NewQuote;
