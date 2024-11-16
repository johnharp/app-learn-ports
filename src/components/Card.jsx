import PropTypes from 'prop-types';

function Card({ title, children }) {
  return (
    <div className="max-w-xl p-6 border-2 bg-gray-700 border-gray-800 rounded-lg shadow">
        {title && (
            <h5 className="text-2xl font-bold text-white mb-3">{title}</h5>

        )}

      {children}
    </div>
  );
}

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default Card;
