(()=>{"use strict";const e=window.wp.blocks,t=window.wp.blockEditor,o=window.wp.data,s=window.ReactJSXRuntime,n=JSON.parse('{"UU":"rudr/latest-post"}');(0,e.registerBlockType)(n.UU,{edit:function(){const e=(0,o.useSelect)((e=>e("core").getEntityRecords("postType","post")),[]);return(0,s.jsxs)("div",{...(0,t.useBlockProps)(),children:[!e&&"Loading",e&&0===e.length&&"No Posts",e&&e.length>0&&(0,s.jsx)("a",{href:e[0].link,children:e[0].title.rendered})]})}})})();