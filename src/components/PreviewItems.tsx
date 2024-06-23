import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./PreviewItems.css";

export type PreviewItemsType = {
  className?: string;
  rectangle47?: string;
  c?: string;
  aNDLEIN?: string;
  lASS?: string;
  oLDER?: string;
  group111?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const PreviewItems: FunctionComponent<PreviewItemsType> = ({
  className = "",
  rectangle47,
  c,
  aNDLEIN,
  lASS,
  oLDER,
  group111,
  prop,
  propWidth,
}) => {
  const groupIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`preview-items1 ${className}`}>
      <img
        className="preview-items-child"
        loading="lazy"
        alt=""
        src={rectangle47}
      />
      <div className="candle-in-glass-holder-parent">
        <b className="candle-in-glass-container">
          <span className="c">{c}</span>
          <span className="andle-in">{aNDLEIN}</span>G
          <span className="lass">{lASS}</span>H
          <span className="older">{oLDER}</span>
        </b>
        <div className="frame-group">
          <img
            className="frame-child1"
            alt=""
            src={group111}
            style={groupIcon1Style}
          />
          <b className="b1">
            <p className="p1">{prop}</p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default PreviewItems;
