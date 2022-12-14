import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuoteDetails = () => {
  const params = useParams();
  const quoteId = params.quoteId;

  return (
    <>
      <h1>Quote Detail Page</h1> <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
