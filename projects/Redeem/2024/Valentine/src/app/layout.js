import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700", "900"],
	preload: true,
	fallback: ["sans-serif"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}