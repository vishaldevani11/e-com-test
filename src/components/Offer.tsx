import { FunctionComponent } from "react";
import "./Offer.css";

export type OfferType = {
  className?: string;
};

const Offer: FunctionComponent<OfferType> = ({ className = "" }) => {
  return (
    <section className={`offer ${className}`}>
      <div className="offer-child" />
      <div className="membership">
        <div className="exclusive-offer">
          <h1 className="member-exclusive">
            <span className="m">M</span>
            <span className="ember">{`EMBER `}</span>
            <span className="e">E</span>
            <span className="xclusive">XCLUSIVE</span>
          </h1>
        </div>
        <h1 className="off-everything">
          15% OFF EVERYTHING + EXTRA $10 OFF FOR PLUS STATUS
        </h1>
      </div>
      <div className="join-prompt">
        <div className="not-a-member-container">
          N<span className="ot-a-member">{`OT A MEMBER? `}</span>J
          <span className="oin-now-to">OIN NOW TO SHOP.</span>
        </div>
      </div>
    </section>
  );
};

export default Offer;
