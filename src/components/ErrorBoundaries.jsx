function ErrorBoundary({ error }) {
  return <p className="errors">{error}</p>;
}

export default ErrorBoundary;
