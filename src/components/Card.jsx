function Card({ headline, children }) {
  return (
    <div className="max-w-xl p-6 border bg-gray-700 border-gray-800 rounded-lg shadow">
        {headline && (
            <h5 className="text-2xl font-bold text-white mb-3">{headline}</h5>

        )}

      {children}
    </div>
  );
}

export default Card;
