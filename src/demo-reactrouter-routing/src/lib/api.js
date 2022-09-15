export const getAllQuotes = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_QUOTES_API_KEY}quotes.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObjFromJson = {
      id: key,
      ...data[key],
    };
    transformedQuotes.push(quoteObjFromJson);
  }

  return transformedQuotes;
};

export const getSingleQuote = async (quoteId) => {
  const response = await fetch(
    `${process.env.REACT_APP_QUOTES_API_KEY}quotes/${quoteId}.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Somthing bad happened");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
};

export const addQuote = async (quoteData) => {
  const response = await fetch(
    `${process.env.REACT_APP_QUOTES_API_KEY}quotes.json`,
    {
      method: "POST",
      body: JSON.stringify(quoteData),
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went really wrong");
  }

  if (response.ok) return response.status.ok;
};

export const addComment = async (reqData) => {
  const response = await fetch(
    `${process.env.REACT_APP_QUOTES_API_KEY}comments/${reqData.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(reqData.commentData),
      headers: { "content-type": "application/json" },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return { commentId: data.name };
};

export const getAllComments = async (quoteId) => {
  const response = await fetch(
    `${process.env.REACT_APP_QUOTES_API_KEY}comments/${quoteId}.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Couldn't get comments");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
};
