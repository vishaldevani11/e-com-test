import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ItemTitleTwo.css";

export type ItemTitleTwoType = {
  className?: string;
  rectangle71?: string;
  smallCandleInASmallJar?: string;
  group111?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propTextTransform?: CSSProperties["textTransform"];
  propWidth1?: CSSProperties["width"];
};

const ItemTitleTwo: FunctionComponent<ItemTitleTwoType> = ({
  className = "",
  rectangle71,
  smallCandleInASmallJar,
  group111,
  prop,
  propWidth,
  propAlignSelf,
  propTextTransform,
  propWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const smallCandleInStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      textTransform: propTextTransform,
    };
  }, [propAlignSelf, propTextTransform]);

  const groupIcon2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={`item-title-two ${className}`}>
      <img
        className="item-title-two-child"
        loading="lazy"
        alt=""
        src={rectangle71}
      />
      <div className="small-candle-in-a-small-jar-parent" style={frameDivStyle}>
        <b className="small-candle-in" style={smallCandleInStyle}>
          {smallCandleInASmallJar}
        </b>
        <div className="frame-container">
          <img
            className="frame-child2"
            alt=""
            src={group111}
            style={groupIcon2Style}
          />
          <b className="b2">
            <p className="p2">{prop}</p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default ItemTitleTwo;
