import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Content() {
	const code = `package main

    import "fmt"
    
    func zeroval(ival int) {
        ival = 0
    }
    
    func zeroptr(iptr *int) {
        *iptr = 0
    }
    
    func main() {
        i := 1
        fmt.Println("initial:", i)
    
        zeroval(i)
        fmt.Println("zeroval:", i)
    
        zeroptr(&i)
        fmt.Println("zeroptr:", i)
    
        fmt.Println("pointer:", &i)
    }`;
	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Grid
					container
					direction="row"
					justify="space-between"
					alignItems="flex-start"
				>
					<Grid item xs={12} sm={6} lg={5}>
						<Typography variant="h4">Functions</Typography>

						<Typography variant="body1">
							<ReactMarkdown># Hello, *world*!</ReactMarkdown>
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} lg={5}>
						<SyntaxHighlighter language="go" style={darcula}>
							{code}
						</SyntaxHighlighter>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default Content;
