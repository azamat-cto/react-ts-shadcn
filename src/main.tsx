import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";

const rootElement = document.getElementById("root") as Element;

if (!rootElement.innerHTML) {
	const root = createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}
