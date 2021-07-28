import React from "react";
import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";

// Import main site styles as a string to inject into the CMS preview pane
// import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../sass/main.scss";

CMS.registerMediaLibrary(uploadcare);
// CMS.registerPreviewStyle(styles, { raw: true });
CMS.init();
