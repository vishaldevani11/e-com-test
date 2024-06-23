import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./PreviewItems1.css";

export type PreviewItems1Type = {
  className?: string;
  placeholder?: string;
  velvetCovvered?: string;
  group111?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propTextTransform?: CSSProperties["textTransform"];
  propWidth1?: CSSProperties["width"];
};

const PreviewItems1: FunctionComponent<PreviewItems1Type> = ({
  className = "",
  placeholder,
  velvetCovvered,
  group111,
  prop,
  propWidth,
  propMinWidth,
  propTextTransform,
  propWidth1,
}) => {
  const previewItemsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const velvetCovveredStyle: CSSProperties = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={`preview-items ${className}`} style={previewItemsStyle}>
      <div className="preview-image">
        <div className="preview-image-child" />
        <img
          className="placeholder-icon"
          loading="lazy"
          alt=""
          src={placeholder}
        />
      </div>
      <div className="preview-details">
        <b className="velvet-covvered" style={velvetCovveredStyle}>
          {velvetCovvered}
        </b>
        <div className="frame-parent">
          <img
            className="frame-inner"
            loading="lazy"
            alt=""
            src={group111}
            style={groupIconStyle}
          />
          <b className="separator">
            <p className="p">{prop}</p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default PreviewItems1;
