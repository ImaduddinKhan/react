import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Test",
    text: "Learning is so cool..",
  },
  {
    id: "q2",
    author: "Test 2",
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
