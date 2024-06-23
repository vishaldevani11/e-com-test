import { FunctionComponent } from "react";
import PreviewItems1 from "./PreviewItems_1";
import PreviewItems from "./PreviewItems";
import ItemTitleTwo from "./ItemTitleTwo";
import "./NavigationColumn.css";
import rectangle from '../assets/rectangle_62.svg'
import filter from '../assets/filter.svg'
import candel from '../assets/candel.svg'
import MetalPhoto from '../assets/metal_photo.svg'
import circle from '../assets/circle.svg'
export type NavigationColumnType = {
  className?: string;
};

const NavigationColumn: FunctionComponent<NavigationColumnType> = ({
  className = "",
}) => {
  return (
    <div className={`navigation-column ${className}`}>
      <div className="navigation-items">
        <div className="navigation-list">
          <div className="navigation-category">
            <div className="navigation-link">
              <b className="new-arrivals">
                <span className="n">N</span>
                <span className="ew-arrivals">ew arrivals</span>
              </b>
              <div className="new-link">
                <div className="new-arrivals1">
                  <span className="n1">N</span>
                  <span className="ew-arrivals1">ew arrivals</span>
                </div>
              </div>
            </div>
            <div className="room-link">
              <b className="shop-by-room-container">
                <span className="s">s</span>
                <span className="hop-by-room">hop by room</span>
              </b>
            </div>
          </div>
        </div>
        <div className="breadcrumb">
          <h1 className="bedroom">BEDROOM</h1>
          <div className="its-easy-to-container">
            <span className="i">I</span>
            <span className="ts-easy-to">
              TS EASY TO TRANSFORM YOUR BEDROOM INTERIOR WITH OUR GREAT
              SELECTION OF ACCESSORIES.
            </span>
          </div>
        </div>
      </div>
      <div className="content-header">
        <div className="page-title">
          <div className="bedroom1">bedroom</div>
          <div className="filter-bar">
            <div className="filter-options">
              <div className="filter-icon-container">
                <img className="filter-icon" alt="" src={filter} />
              </div>
              <div className="filter-sort">{`filter & sort`}</div>
            </div>
          </div>
          <div className="product-count">
            <div className="count-label">
              <div className="models">
                <span className="m1">M</span>
                <span className="odels">odels</span>
              </div>
              <div className="products">products</div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-label">
        <div className="duvet-cover-sets">duvet cover sets</div>
      </div>
      <div className="subcategory">
        <div className="subcategory-options">
          <div className="subcategory-list">
            <div className="subcategory-items">
              <div className="subcategory-values">
                <div className="sheets">sheets</div>
              </div>
              <div className="subcategory-values1">
                <div className="bedspreads-blankets">{`bedspreads & blankets`}</div>
              </div>
              <div className="subcategory-values2">
                <div className="blankets">blankets</div>
              </div>
              <div className="subcategory-values3">
                <div className="cutains">cutains</div>
              </div>
              <div className="subcategory-values4">
                <div className="pillowcases">pillowcases</div>
              </div>
              <div className="subcategory-values5">
                <div className="rugs">rugs</div>
              </div>
              <div className="living-room">living room</div>
              <div className="child-room">child room</div>
              <div className="bathroom">bathroom</div>
              <div className="outdoor">Outdoor</div>
            </div>
            <div className="concept-filter">
              <div className="concept-options">
                <b className="shop-by-concept-container">
                  <span className="s1">s</span>
                  <span className="hop-by-concept">hop by concept</span>
                </b>
                <div className="conscious">
                  <span className="c1">C</span>
                  <span className="onscious">onscious</span>
                </div>
                <div className="premium-quality">
                  <span className="p3">p</span>
                  <span className="remium-quality">remium quality</span>
                </div>
                <div className="classic-collection">
                  <span className="c2">c</span>
                  <span className="lassic-collection">lassic collection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-preview">
          <PreviewItems1
            placeholder={rectangle}
            velvetCovvered="Velvet Covvered"
            group111={rectangle}
            prop="39$"
          />
          <PreviewItems
            rectangle47={candel}
            c="C"
            aNDLEIN="ANDLE IN "
            lASS="LASS "
            oLDER="OLDER"
            group111={candel}
            prop="14$"
          />
          <PreviewItems
            rectangle47={MetalPhoto}
            c="M"
            aNDLEIN="ETAL "
            lASS="HOTO "
            oLDER="RAME"
            group111={MetalPhoto}
            prop="25$"
            propWidth="28px"
          />
        </div>
      </div>
      <div className="gender-filter">
        <b className="gender">
          <span className="g">g</span>
          <span className="ender">ender</span>
        </b>
      </div>
      <div className="gender-options">
        <div className="gender-selection">
          <div className="gender-items">
            <div className="gender-image">
              <div className="gender-placeholder" />
              <div className="gender-name">
                <div className="man">
                  <span className="m2">M</span>
                  <span className="an">an</span>
                </div>
              </div>
            </div>
            <div className="gender-image1">
              <div className="gender-image-child" />
              <div className="woman-wrapper">
                <div className="woman">
                  <span className="w">w</span>
                  <span className="oman">oman</span>
                </div>
              </div>
            </div>
          </div>
          <div className="color-filter">
            <div className="color-label">
              <b className="color">Color</b>
            </div>
            <div className="color-selection">
              <div className="color-swatches" />
              <div className="color-swatches1" />
              <div className="color-swatches2" />
              <div className="color-swatches3" />
              <div className="color-swatches4" />
              <div className="color-swatches5" />
              <div className="color-swatches6" />
              <div className="color-swatches7" />
              <div className="color-swatches8" />
              <div className="color-swatches9" />
              <div className="color-swatches10" />
              <div className="color-swatches11" />
              <div className="color-swatches12" />
              <div className="color-swatches13" />
              <div className="color-swatches14" />
              <div className="color-swatches15" />
              <div className="color-swatches16" />
              <div className="color-swatches17" />
            </div>
          </div>
          <div className="price-filter">
            <div className="price-label">
              <b className="price">Price</b>
            </div>
            <div className="price-range">
              <div className="range-slider">
                <div className="price-markers" />
                <div className="price-values">
                  <div className="div">0$ – 40$</div>
                </div>
              </div>
              <div className="range-slider1">
                <div className="range-slider-child" />
                <div className="wrapper">
                  <div className="div1">40$ – 100$</div>
                </div>
              </div>
              <div className="range-slider2">
                <div className="range-slider-item" />
                <div className="frame">
                  <div className="div2">100$ – 150$</div>
                </div>
              </div>
              <div className="range-slider3">
                <div className="range-slider-inner" />
                <div className="frame-div">
                  <div className="div3">150$ – 175$</div>
                </div>
              </div>
              <div className="range-slider4">
                <div className="range-slider-child1" />
                <div className="wrapper1">
                  <div className="div4">175$ – 250$</div>
                </div>
              </div>
              <div className="range-slider5">
                <div className="range-slider-child2" />
                <div className="wrapper2">
                  <div className="div5">250$ – 350$</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-one">
          <PreviewItems1
            placeholder={circle}
            velvetCovvered="Round floor mat"
            group111="/group-111-3.svg"
            prop="34$"
            propWidth="unset"
            propMinWidth="unset"
            propTextTransform="capitalize"
            propWidth1="28px"
          />
          <div className="item-images-one">
            <div className="rectangle-parent">
              <img
                className="rectangle-icon"
                alt=""
                src={circle}
              />
              <div className="frame-child3" />
            </div>
            <div className="frame-parent1">
              <div className="class-light-holder-parent">
                <b className="class-light-holder">Class light holder</b>
                <img className="frame-child4" alt="" src={circle} />
              </div>
              <b className="b3">
                <p className="p4">22$</p>
              </b>
            </div>
          </div>
          <div className="item-images-one1">
            <img
              className="item-images-one-child"
              loading="lazy"
              alt=""
              src={circle}
            />
            <div className="flannel-duvet-cover-set-parent">
              <b className="flannel-duvet-cover-container">
                F<span className="lannel">{`lannel `}</span>D
                <span className="uvet">{`uvet `}</span>C
                <span className="over">{`over `}</span>S
                <span className="et">et</span>
              </b>
              <div className="frame-parent2">
                <img className="frame-child5" alt="" src="/group-111-5.svg" />
                <b className="b4">
                  <p className="p5">44$</p>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-two">
        <div className="item-images-two">
          <div className="image-pair-two">
            <PreviewItems1
              placeholder="/rectangle-70@2x.png"
              velvetCovvered="Fitted Cotton Sheet"
              group111="/group-111-6.svg"
              prop="24$"
              propWidth="306px"
              propMinWidth="291px"
              propTextTransform="unset"
              propWidth1="46px"
            />
            <ItemTitleTwo
              rectangle71="/rectangle-71@2x.png"
              smallCandleInASmallJar="Small Candle in a Small Jar"
              group111="/group-111-7.svg"
              prop="14$"
            />
            <ItemTitleTwo
              rectangle71="/rectangle-72@2x.png"
              smallCandleInASmallJar="Checked Duvet Cover Set"
              group111="/group-111-8.svg"
              prop="24$"
              propWidth="229px"
              propAlignSelf="stretch"
              propTextTransform="unset"
              propWidth1="28px"
            />
            <PreviewItems1
              placeholder="/rectangle-75@2x.png"
              velvetCovvered="Washed Linen Pillowcase"
              group111="/group-111-9.svg"
              prop="18$"
              propWidth="306px"
              propMinWidth="291px"
              propTextTransform="unset"
              propWidth1="46px"
            />
            <ItemTitleTwo
              rectangle71="/rectangle-76@2x.png"
              smallCandleInASmallJar="Ribbed Wool-blend Throw"
              group111="/group-111-10.svg"
              prop="24$"
              propWidth="229px"
              propAlignSelf="stretch"
              propTextTransform="unset"
              propWidth1="28px"
            />
            <ItemTitleTwo
              rectangle71="/rectangle-77@2x.png"
              smallCandleInASmallJar="Mini Porcelain Dish"
              group111="/group-111-6.svg"
              prop="8$"
              propWidth="229px"
              propAlignSelf="stretch"
              propTextTransform="capitalize"
              propWidth1="46px"
            />
          </div>
          <div className="load-more">
            <div className="rectangle-group">
              <div className="frame-child6" />
              <b className="load-more-products">load more products</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationColumn;
