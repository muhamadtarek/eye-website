// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project f7da91e770e514c8 "portfolite (copy)", do not edit manually */
"use client";

// virtual:elements/on-off
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/1p0nFYtJZV9XpWrb7VaX/5WhlbCI63OR9UCTtArd8/yOOmeTSWl.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var cycleOrder = ["ZlLcJoaKS", "lgehuRi4E"];
var serializationHash = "framer-qKG9f";
var variantClassNames = { lgehuRi4E: "framer-v-greys1", ZlLcJoaKS: "framer-v-1vb5qbg" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { duration: 0, type: "tween" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { off: "lgehuRi4E", on: "ZlLcJoaKS" };
var getProps = ({ colorOff, colorOn, height, id, width, ...props }) => {
  return { ...props, tV6RQgjy4: colorOn ?? props.tV6RQgjy4 ?? "var(--token-824b0275-9b90-4fdc-a563-7ec722d766de, rgb(213, 192, 43))", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "ZlLcJoaKS", ZyC20jIX2: colorOff ?? props.ZyC20jIX2 ?? "rgba(133, 222, 255, 0.5)" };
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
  const { style, className, layoutId, variant, tV6RQgjy4, ZyC20jIX2, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "ZlLcJoaKS", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onAppear1f7mxo0 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("lgehuRi4E"), 1e3);
  });
  const onAppearxsl9u9 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("ZlLcJoaKS"), 1e3);
  });
  useOnVariantChange(baseVariant, { default: onAppear1f7mxo0, lgehuRi4E: onAppearxsl9u9 });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1vb5qbg", className, classNames), "data-framer-name": "on", "data-highlight": true, layoutDependency, layoutId: "ZlLcJoaKS", ref: refBinding, style: { backgroundColor: tV6RQgjy4, borderBottomLeftRadius: 84, borderBottomRightRadius: 84, borderTopLeftRadius: 84, borderTopRightRadius: 84, boxShadow: "0px 0px 14px 1px rgb(189, 189, 189)", ...style }, variants: { lgehuRi4E: { backgroundColor: ZyC20jIX2, boxShadow: "none" } }, ...addPropertyOverrides({ lgehuRi4E: { "data-framer-name": "off" } }, baseVariant, gestureVariant) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-qKG9f.framer-1hwk5rl, .framer-qKG9f .framer-1hwk5rl { display: block; }", ".framer-qKG9f.framer-1vb5qbg { height: 5px; overflow: hidden; position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }"];
var FrameryOOmeTSWl = withCSS(Component, css, "framer-qKG9f");
var stdin_default = FrameryOOmeTSWl;
FrameryOOmeTSWl.displayName = "Elements / on&off";
FrameryOOmeTSWl.defaultProps = { height: 5, width: 5 };
addPropertyControls(FrameryOOmeTSWl, { variant: { options: ["ZlLcJoaKS", "lgehuRi4E"], optionTitles: ["on", "off"], title: "Variant", type: ControlType.Enum }, tV6RQgjy4: { defaultValue: 'var(--token-824b0275-9b90-4fdc-a563-7ec722d766de, rgb(213, 192, 43)) /* {"name":"Primary Color Yellow"} */', title: "color/on", type: ControlType.Color }, ZyC20jIX2: { defaultValue: "rgba(133, 222, 255, 0.5)", title: "color/off", type: ControlType.Color } });
addFonts(FrameryOOmeTSWl, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// virtual:elements/on-off
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
  "base": "ZlLcJoaKS"
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
