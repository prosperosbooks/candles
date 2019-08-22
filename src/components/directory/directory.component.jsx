import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "candles",
          imageUrl:
            "https://www.galtandmaree.com/uploads/5/3/5/2/53527881/60197415-2110880252545346-1828218357858435072-o_orig.jpg",
          size: "large",
          id: 1,
          linkUrl: 'candles'
        },
        {
          title: "diffusers",
          imageUrl: "https://www.galtandmaree.com/uploads/5/3/5/2/53527881/fullsizeoutput-25b9_orig.jpeg",
          size: "large",
          id: 2,
          linkUrl: 'diffusers'
        },
        {
          title: "flameless",
          imageUrl: "https://www.westelm.com/weimgs/ab/images/wcm/products/201917/0014/premium-flameless-candles-c.jpg",
          size: 'large',
          id: 3,
          linkUrl: 'flameless'
        },
        {
          title: "accessories",
          imageUrl: "https://tetontimberlinetrading.com/wp-content/uploads/2015/05/LED-Pillars-Ivory-Deco-799x450.jpg",
          id: 5,
          linkUrl: 'accessories'
        },
        {
          title: "gifts",
          imageUrl: "https://www.galtandmaree.com/uploads/5/3/5/2/53527881/img-8497_orig.jpg",
          id: 6,
          linkUrl: 'gifts'
        }
      ]
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem  key={id} id={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
