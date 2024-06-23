import { FunctionComponent } from "react";
import "./Footer.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-columns">
        <div className="footer-columns-child" />
        <div className="brand-info">
          <h2 className="urban-outfitters">URBAN OUTFITTERS</h2>
          <div className="brand-description">
            <div className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
          <div className="brand-address">
            <div className="address-details">
              <b className="king-street-melbourne-container">
                {`121 `}
                <span className="k">k</span>
                <span className="ing">ing</span>
                <span className="street-melbourne-3000">
                  {" "}
                  street, Melbourne 3000
                </span>
              </b>
              <b className="location-contact">+61 3 8376 6284</b>
              <b className="contacturbanoutfitterscom">
                contact@urbanoutfitters.com
              </b>
            </div>
          </div>
          <div className="social-icons">
            <div className="icons-image">
              <img className="vector-icon" alt="" src="/vector-2.svg" />
              <img
                className="ant-designtwitter-outlined-icon"
                loading="lazy"
                alt=""
                src="/antdesigntwitteroutlined.svg"
              />
              <img
                className="ant-designinstagram-filled-icon"
                loading="lazy"
                alt=""
                src="/antdesigninstagramfilled.svg"
              />
              <img
                className="vaadinyoutube-icon"
                loading="lazy"
                alt=""
                src="/vaadinyoutube.svg"
              />
            </div>
          </div>
        </div>
        <div className="shopping-more">
          <b className="shopping">SHOPPING</b>
          <div className="shopping-links">
            <div className="your-cart">Your cart</div>
            <div className="your-orders">Your orders</div>
            <div className="compared-items">Compared items</div>
            <div className="wishlist-items">Wishlist items</div>
            <div className="shipping-detail">{`Shipping detail `}</div>
          </div>
        </div>
        <div className="shopping-more1">
          <b className="more-link">MORE LINK</b>
          <div className="blog-parent">
            <div className="blog">Blog</div>
            <div className="gift-center">Gift Center</div>
            <div className="buying-guides">Buying Guides</div>
            <div className="new-arrivals2">New Arrivals</div>
            <div className="clearance">Clearance</div>
          </div>
        </div>
        <div className="blog1">
          <div className="blog-title">
            <b className="from-the-blog">FROM THE BLOG</b>
          </div>
          <div className="blog-posts">
            <div className="post-columns">
              <div className="post-details">
                <div className="empty-post">26</div>
                <div className="post-month">
                  <div className="may">May</div>
                </div>
              </div>
              <div className="lorem-ipsum-dolor1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="post-comments">
                <div className="comments">3 comments</div>
              </div>
            </div>
            <img
              className="blog-posts-child"
              loading="lazy"
              alt=""
              src="/vector-8.svg"
            />
            <div className="post-columns1">
              <div className="parent">
                <div className="div6">27</div>
                <div className="may-wrapper">
                  <div className="may1">May</div>
                </div>
              </div>
              <div className="lorem-ipsum-dolor2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="comments-wrapper">
                <div className="comments1">3 comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright-child" />
        <div className="urban-outfitters1">{`Urban Outfitters © – All rights reserved `}</div>
      </div>
    </footer>
  );
};

export default Footer;
