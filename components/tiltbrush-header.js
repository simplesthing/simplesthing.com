import Script from "next/dist/client/script";

const TiltBrushHeader = () => {
    return (
        <>
            {/* <!-- 🚨 REQUIRED: Web Components polyfill to support Edge and Firefox < 63 --> */}
            <Script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js" strategy="beforeInteractive" />

            {/* <!-- 💁 OPTIONAL: Intersection Observer polyfill for better performance in Safari and IE11 --> */}
            <Script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js" strategy="beforeInteractive" />

            {/* <!-- 💁 OPTIONAL: Resize Observer polyfill improves resize behavior in non-Chrome browsers --> */}
            <Script src="https://unpkg.com/resize-observer-polyfill@1.5.1/dist/ResizeObserver.js" strategy="beforeInteractive" />


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js" strategy="lazyOnload" />

            {/* <!-- Loads <model-viewer> for modern browsers: --> */}
            <Script
                type="module"
                src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js" strategy="lazyOnload" />

            {/* <!-- Loads <model-viewer> for old browsers like IE11: --> */}
            <Script
                nomodule
                src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
                strategy="lazyOnload"
            />
            <Script
                src="https://kit.fontawesome.com/1fb0988b55.js"
                crossorigin="anonymous"
                strategy="lazyOnload"
            />
            <model-viewer
                src="https://simplesthings.s3-us-west-2.amazonaws.com/simples.glb"
                camera-controls
                role="img"
                aria-label="3D model viewer web component with the word simplesthing written in script with a fox, flowers and butterfly painted in Tiltbrush VR painting application"
                camera-orbit="160deg 90deg 5%"
            ></model-viewer>
        </>
    );
};

export default TiltBrushHeader;