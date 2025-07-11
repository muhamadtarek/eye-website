// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project f7da91e770e514c8 "portfolite (copy)", do not edit manually */
"use client";
import {
  Icon
} from "./chunks/chunk-BTSBQWPZ.js";
import {
  className,
  css,
  fonts
} from "./chunks/chunk-GFREWVAB.js";

// virtual:project
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/iLP93ZEzzkO3gS0UgzFh/T4p8kqEg6Vg23eZURv19/sCZXRKz5n.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ComponentViewportProvider, ControlType, cx, getFonts, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, Link, RichText, SmartComponentScopedContainer, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var PhosphorFonts = getFonts(Icon);
var enabledGestures = { bMbjrtyUm: { hover: true }, FqZa4fQli: { hover: true } };
var cycleOrder = ["FqZa4fQli", "bMbjrtyUm", "C9grw59I6"];
var serializationHash = "framer-sVY3Y";
var variantClassNames = { bMbjrtyUm: "framer-v-fgryyr", C9grw59I6: "framer-v-rtqf83", FqZa4fQli: "framer-v-1dqe5av" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 45, delay: 0, mass: 1, stiffness: 400, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { "no button": "bMbjrtyUm", mobile: "C9grw59I6", primary: "FqZa4fQli" };
var getProps = ({ height, id, image, link, newTab, width, ...props }) => {
  return { ...props, BUsa2Xtce: newTab ?? props.BUsa2Xtce, UJXDztHwQ: image ?? props.UJXDztHwQ ?? { alt: "", src: "https://framerusercontent.com/images/jlIAaI4caPj3oVLaxetMd2RvY.png?scale-down-to=512", srcSet: "https://framerusercontent.com/images/jlIAaI4caPj3oVLaxetMd2RvY.png?scale-down-to=1024 682w,https://framerusercontent.com/images/jlIAaI4caPj3oVLaxetMd2RvY.png 800w" }, UnXWWBxjj: link ?? props.UnXWWBxjj, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "FqZa4fQli" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className2, layoutId, variant, UJXDztHwQ, UnXWWBxjj, BUsa2Xtce, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "FqZa4fQli", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (gestureVariant === "bMbjrtyUm-hover") return false;
    if (baseVariant === "bMbjrtyUm") return false;
    return true;
  };
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: UnXWWBxjj, motionChild: true, nodeId: "FqZa4fQli", openInNewTab: BUsa2Xtce, scopeId: "sCZXRKz5n", smoothScroll: true, children: /* @__PURE__ */ _jsxs(motion.a, { ...restProps, ...gestureHandlers, background: { alt: "", fit: "fill" }, className: `${cx(scopingClassNames, "framer-1dqe5av", className2, classNames)} framer-4b6vqy`, "data-framer-name": "primary", draggable: "false", layoutDependency, layoutId: "FqZa4fQli", ref: refBinding, style: { borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderTopLeftRadius: 4, borderTopRightRadius: 4, filter: "grayscale(1)", WebkitFilter: "grayscale(1)", ...style }, variants: { "bMbjrtyUm-hover": { filter: "grayscale(0)", WebkitFilter: "grayscale(0)" }, "FqZa4fQli-hover": { filter: "grayscale(0)", WebkitFilter: "grayscale(0)" } }, ...addPropertyOverrides({ "bMbjrtyUm-hover": { "data-framer-name": void 0 }, "FqZa4fQli-hover": { "data-framer-name": void 0 }, bMbjrtyUm: { "data-framer-name": "no button" }, C9grw59I6: { "data-framer-name": "mobile" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsxs(motion.div, { className: "framer-s7w4jd", "data-border": true, "data-framer-name": "View Project", layoutDependency, layoutId: "Y_6arIBYf", style: { "--border-bottom-width": "1px", "--border-color": "rgb(214, 214, 214)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backdropFilter: "blur(6px)", backgroundColor: "rgba(99, 99, 99, 0.3)", borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40, boxShadow: "0px 0px 20px 4px rgba(92, 92, 92, 0.3)", WebkitBackdropFilter: "blur(6px)" }, variants: { "FqZa4fQli-hover": { backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" } }, children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1af6am0", "data-styles-preset": "BqZNshx9b", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-67527bae-cc15-4839-8636-c9b28351e4d7, rgb(255, 255, 255)))" }, children: "View Casestudy" }) }), className: "framer-1i7mc4o", fonts: ["Inter"], layoutDependency, layoutId: "Y_6arIBYfY6fK27hnB", style: { "--extracted-r6o4lv": "var(--token-67527bae-cc15-4839-8636-c9b28351e4d7, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsxs(motion.div, { className: "framer-1i72ip", "data-framer-name": "arrow container", layoutDependency, layoutId: "BvMBq8Sfz", children: [/* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(SmartComponentScopedContainer, { className: "framer-bgd7gf-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Y_6arIBYfktldzRJrN-container", nodeId: "Y_6arIBYfktldzRJrN", rendersWithMotion: true, scopeId: "sCZXRKz5n", children: /* @__PURE__ */ _jsx(Icon, { color: "var(--token-67527bae-cc15-4839-8636-c9b28351e4d7, rgb(255, 255, 255))", height: "100%", iconSearch: "House", iconSelection: "ArrowUpRight", id: "Y_6arIBYfktldzRJrN", layoutId: "Y_6arIBYfktldzRJrN", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "regular", width: "100%" }) }) }), /* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(SmartComponentScopedContainer, { className: "framer-5a4a7h-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "A34be6lVf-container", nodeId: "A34be6lVf", rendersWithMotion: true, scopeId: "sCZXRKz5n", children: /* @__PURE__ */ _jsx(Icon, { color: "var(--token-67527bae-cc15-4839-8636-c9b28351e4d7, rgb(255, 255, 255))", height: "100%", iconSearch: "House", iconSelection: "ArrowUpRight", id: "A34be6lVf", layoutId: "A34be6lVf", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "regular", width: "100%" }) }) })] })] }), /* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0), pixelHeight: 801, pixelWidth: 1200, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(UJXDztHwQ) }, className: "framer-4ikv5p", "data-framer-name": "Image", layoutDependency, layoutId: "bhzmzLk02", style: { filter: "none", scale: 1, WebkitFilter: "none" }, variants: { "bMbjrtyUm-hover": { filter: "grayscale(0)", scale: 1, WebkitFilter: "grayscale(0)" }, "FqZa4fQli-hover": { scale: 1.1 } }, ...addPropertyOverrides({ "bMbjrtyUm-hover": { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + -9), pixelHeight: 801, pixelWidth: 1200, sizes: `calc(${componentViewport?.width || "100vw"} + 20px)`, ...toResponsiveImage(UJXDztHwQ) } } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-sVY3Y.framer-4b6vqy, .framer-sVY3Y .framer-4b6vqy { display: block; }", ".framer-sVY3Y.framer-1dqe5av { cursor: pointer; height: 343px; overflow: hidden; position: relative; text-decoration: none; width: 366px; will-change: var(--framer-will-change-override, transform); }", ".framer-sVY3Y .framer-s7w4jd { align-content: center; align-items: center; bottom: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; left: 8px; overflow: hidden; padding: 12px 20px 12px 20px; position: absolute; right: 8px; will-change: var(--framer-will-change-override, transform); z-index: 2; }", ".framer-sVY3Y .framer-1i7mc4o { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-sVY3Y .framer-1i72ip { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 25px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 25px; }", ".framer-sVY3Y .framer-bgd7gf-container { flex: none; height: 25px; position: relative; width: 100%; }", ".framer-sVY3Y .framer-5a4a7h-container { bottom: -20px; flex: none; height: 25px; left: -20px; position: absolute; width: 25px; z-index: 1; }", ".framer-sVY3Y .framer-4ikv5p { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-sVY3Y .framer-s7w4jd, .framer-sVY3Y .framer-1i72ip { gap: 0px; } .framer-sVY3Y .framer-s7w4jd > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-sVY3Y .framer-s7w4jd > :first-child { margin-left: 0px; } .framer-sVY3Y .framer-s7w4jd > :last-child { margin-right: 0px; } .framer-sVY3Y .framer-1i72ip > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-sVY3Y .framer-1i72ip > :first-child { margin-top: 0px; } .framer-sVY3Y .framer-1i72ip > :last-child { margin-bottom: 0px; } }", ".framer-sVY3Y.framer-v-fgryyr.framer-1dqe5av, .framer-sVY3Y.framer-v-1dqe5av.hover.framer-1dqe5av { aspect-ratio: 1.0666666666666667 / 1; height: var(--framer-aspect-ratio-supported, 343px); }", ".framer-sVY3Y.framer-v-rtqf83.framer-1dqe5av { aspect-ratio: 1.0666666666666667 / 1; cursor: unset; height: var(--framer-aspect-ratio-supported, 343px); }", ".framer-sVY3Y.framer-v-1dqe5av.hover .framer-bgd7gf-container { position: absolute; right: -20px; top: -20px; width: 25px; z-index: 1; }", ".framer-sVY3Y.framer-v-1dqe5av.hover .framer-5a4a7h-container { bottom: unset; left: unset; position: relative; }", ".framer-sVY3Y.framer-v-fgryyr.hover .framer-4ikv5p { bottom: -9px; left: -10px; right: -10px; top: -9px; }", ...css, '.framer-sVY3Y[data-border="true"]::after, .framer-sVY3Y [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramersCZXRKz5n = withCSS(Component, css2, "framer-sVY3Y");
var stdin_default = FramersCZXRKz5n;
FramersCZXRKz5n.displayName = "project";
FramersCZXRKz5n.defaultProps = { height: 343, width: 366 };
addPropertyControls(FramersCZXRKz5n, { variant: { options: ["FqZa4fQli", "bMbjrtyUm", "C9grw59I6"], optionTitles: ["primary", "no button", "mobile"], title: "Variant", type: ControlType.Enum }, UJXDztHwQ: { __defaultAssetReference: "data:framer/asset-reference,jlIAaI4caPj3oVLaxetMd2RvY.png?originalFilename=QmTJRNLSXTY2HJY17hcmydvngZDBoHyyxoypemjRxdPo6N%3Fauto%3Dformat%26h%3D1200.png&preferredSize=auto", __vekterDefault: { alt: "", assetReference: "data:framer/asset-reference,jlIAaI4caPj3oVLaxetMd2RvY.png?originalFilename=QmTJRNLSXTY2HJY17hcmydvngZDBoHyyxoypemjRxdPo6N%3Fauto%3Dformat%26h%3D1200.png&preferredSize=auto" }, title: "Image", type: ControlType.ResponsiveImage }, UnXWWBxjj: { title: "Link", type: ControlType.Link }, BUsa2Xtce: { defaultValue: false, title: "New Tab", type: ControlType.Boolean } });
addFonts(FramersCZXRKz5n, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...PhosphorFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:project
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
  "base": "C9grw59I6",
  "xl": "FqZa4fQli"
};
stdin_default.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "augiA20Il": { "path": "/" }, "fz6QcpNXS": { "path": "/blog" }, "gSWbG5WG4": { "path": "/404" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default,
          variants: defaultResponsiveVariants,
          ...rest
        }
      ),
      framerSiteId: "f7da91e770e514c8c53b897bc21d22b1cb70d52563dff3ae47cf007ba316fd39",
      locale,
      locales
    }
  );
};
function ComponentWithRoot({ locale, ...rest }) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: {
        "augiA20Il": {
          "path": "/"
        },
        "fz6QcpNXS": {
          "path": "/blog"
        },
        "gSWbG5WG4": {
          "path": "/404"
        }
      },
      children: /* @__PURE__ */ jsx(stdin_default, { ...rest }),
      framerSiteId: "f7da91e770e514c8c53b897bc21d22b1cb70d52563dff3ae47cf007ba316fd39",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default);
export {
  ComponentWithRoot as default
};
