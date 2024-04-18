import Home from "./pages/home";

export default function App() {
	return (
		// <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<div className="bg-primary text-primary-foreground">
				<h1 className="text-3xl font-bold underline">Hello world!</h1>
				<Home />
			</div>
		// </ThemeProvider>
	);
}
