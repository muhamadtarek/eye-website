// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project f7da91e770e514c8 "portfolite (copy)", do not edit manually */
"use client";
import {
  className,
  css,
  fonts
} from "./chunks/chunk-GFREWVAB.js";

// virtual:heading-badge
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/4RdvCpO1MJEPOVjPuZwr/RklXBWKoKTX2ue2WI0lm/nGB55akVI.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var serializationHash = "framer-TRIRR";
var variantClassNames = { OftRm7dLs: "framer-v-1f7uyzf" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, text, width, ...props }) => {
  return { ...props, YZumv1zMk: text ?? props.YZumv1zMk ?? "badge" };
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
  const { style, className: className2, layoutId, variant, YZumv1zMk, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "OftRm7dLs", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1f7uyzf", className2, classNames), "data-framer-name": "Primary", layoutDependency, layoutId: "OftRm7dLs", ref: refBinding, style: { backgroundColor: "var(--token-0c62d1bb-1ac3-4cd6-8f0f-8ee3950e02c0, rgb(13, 13, 13))", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, boxShadow: "16px 24px 20px 8px rgba(0, 0, 0, 0.4), inset 0px 2px 0px 0px rgba(184, 180, 180, 0.08)", ...style }, children: [/* @__PURE__ */ _jsx(motion.div, { className: "framer-sj2l21", "data-framer-name": "icon shape", layoutDependency, layoutId: "dxBHyVp3J", style: { backgroundColor: "var(--token-67527bae-cc15-4839-8636-c9b28351e4d7, rgb(255, 255, 255))", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-d7s6b0", "data-framer-name": "circle container", layoutDependency, layoutId: "awkkxG9pd", style: { backgroundColor: "var(--token-0c62d1bb-1ac3-4cd6-8f0f-8ee3950e02c0, rgb(13, 13, 13))", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-nff6vi", "data-framer-name": "circle", layoutDependency, layoutId: "QSqI2z03P", style: { backgroundColor: "var(--token-67527bae-cc15-4839-8636-c9b28351e4d7, rgb(255, 255, 255))", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 } }) }) }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1af6am0", "data-styles-preset": "BqZNshx9b", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-67527bae-cc15-4839-8636-c9b28351e4d7, rgb(255, 255, 255)))" }, children: "100% online" }) }), className: "framer-1ggx9rq", fonts: ["Inter"], layoutDependency, layoutId: "rncOVNpbt", style: { "--extracted-r6o4lv": "var(--token-67527bae-cc15-4839-8636-c9b28351e4d7, rgb(255, 255, 255))" }, text: YZumv1zMk, verticalAlignment: "top", withExternalLayout: true })] }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-TRIRR.framer-2306o5, .framer-TRIRR .framer-2306o5 { display: block; }", ".framer-TRIRR.framer-1f7uyzf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 6px 16px 6px 16px; position: relative; width: min-content; }", ".framer-TRIRR .framer-sj2l21 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 11px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 11px; will-change: var(--framer-will-change-override, transform); }", ".framer-TRIRR .framer-d7s6b0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 9px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }", ".framer-TRIRR .framer-nff6vi { flex: none; height: 5px; overflow: hidden; position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }", ".framer-TRIRR .framer-1ggx9rq { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TRIRR.framer-1f7uyzf, .framer-TRIRR .framer-sj2l21, .framer-TRIRR .framer-d7s6b0 { gap: 0px; } .framer-TRIRR.framer-1f7uyzf > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-TRIRR.framer-1f7uyzf > :first-child, .framer-TRIRR .framer-sj2l21 > :first-child, .framer-TRIRR .framer-d7s6b0 > :first-child { margin-left: 0px; } .framer-TRIRR.framer-1f7uyzf > :last-child, .framer-TRIRR .framer-sj2l21 > :last-child, .framer-TRIRR .framer-d7s6b0 > :last-child { margin-right: 0px; } .framer-TRIRR .framer-sj2l21 > *, .framer-TRIRR .framer-d7s6b0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", ...css];
var FramernGB55akVI = withCSS(Component, css2, "framer-TRIRR");
var stdin_default = FramernGB55akVI;
FramernGB55akVI.displayName = "heading Badge";
FramernGB55akVI.defaultProps = { height: 35, width: 92 };
addPropertyControls(FramernGB55akVI, { YZumv1zMk: { defaultValue: "badge", displayTextArea: false, title: "Text", type: ControlType.String } });
addFonts(FramernGB55akVI, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:heading-badge
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {};
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
