"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    SwaggerUIBundle: {
      (config: Record<string, unknown>): void;
      presets: { apis: unknown };
    };
    SwaggerUIStandalonePreset: unknown;
  }
}

export default function ApiDocsPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/swagger-ui-dist@5/swagger-ui.css";
    document.head.appendChild(link);

    const presetScript = document.createElement("script");
    presetScript.src = "https://unpkg.com/swagger-ui-dist@5/swagger-ui-standalone-preset.js";

    const bundleScript = document.createElement("script");
    bundleScript.src = "https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js";
    bundleScript.async = true;

    bundleScript.onload = () => {
      document.body.appendChild(presetScript);
    };

    presetScript.onload = () => {
      window.SwaggerUIBundle({
        url: "/api/docs/openapi",
        dom_id: "#swagger-ui",
        deepLinking: true,
        presets: [window.SwaggerUIBundle.presets.apis, window.SwaggerUIStandalonePreset],
        layout: "StandaloneLayout",
      });
    };

    document.body.appendChild(bundleScript);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(bundleScript);
      if (presetScript.parentNode) document.body.removeChild(presetScript);
    };
  }, []);

  return <div id="swagger-ui" className="min-h-screen bg-white" />;
}
