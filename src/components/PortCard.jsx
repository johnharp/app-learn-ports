import PropTypes from "prop-types";
import Card from "./Card";
import { useState } from "react";

// Example:
// portNumber           80
// transProtocol        TCP
// appProtocol          HTTP
// appProtocalName      HyperText Transfer Protocol
// appProtocolDescr     ...

function PortCard({ portNumber, transProtocol }) {
  const [isFlipped] = useState(false);

  return (
    <Card>
      {!isFlipped && (
        <>
          <p className="flex justify-end">{transProtocol}</p>
          <p className="flex justify-center text-gray-400 text-5xl">
            {portNumber}
          </p>
        </>
      )}

      <p className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-gray-800 rounded">
          &gt;
        </button>
      </p>
    </Card>
  );
}

PortCard.propTypes = {
  portNumber: PropTypes.number,
  transProtocol: PropTypes.string,
};

export default PortCard;
