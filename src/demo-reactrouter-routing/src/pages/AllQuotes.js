import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Author",
    text: "Learning is so cool..",
  },
  {
    id: "q2",
    author: "Author 2",
    text: "Learning 2 is so cool..",
  },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
