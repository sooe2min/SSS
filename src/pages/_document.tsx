import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from 'next/document'

class MyDocument extends Document {
	// static async getInitialProps(ctx: DocumentContext) {
	// 	const originalRenderPage = ctx.renderPage

	// 	ctx.renderPage = () =>
	// 		originalRenderPage({
	// 			// useful for wrapping the whole react tree
	// 			enhanceApp: App => App,
	// 			// useful for wrapping in a per-page basis
	// 			enhanceComponent: Component => Component
	// 		})

	// 	// Run the parent `getInitialProps`, it now includes the custom `renderPage`
	// 	const initialProps = await Document.getInitialProps(ctx)

	// 	return initialProps
	// }

	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Gothic:wght@400;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
