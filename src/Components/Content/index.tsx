import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import { Fragment, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useHistory } from "react-router-dom";
import Camalize from "../../Utils/Camalize";
import { useContent } from "../../Hooks/useContent";
import Skeleton from "@material-ui/lab/Skeleton";

function Content() {
	const history = useHistory();
	const content = useContent(Camalize(history.location.pathname));

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
						<Typography variant="h4">
							{content.title.length ? (
								content.title
							) : (
								<Skeleton variant="text" animation="wave" />
							)}
						</Typography>

						<Typography variant="body1">
							{content.content.length ? (
								<ReactMarkdown>{content.content}</ReactMarkdown>
							) : (
								<>
									<Skeleton variant="text" animation="wave" />
									<Skeleton variant="text" animation="wave" />
									<Skeleton variant="text" animation="wave" />
									<Skeleton variant="text" animation="wave" />
									<Skeleton variant="text" animation="wave" />
									<Skeleton variant="text" animation="wave" />
									<Skeleton variant="text" animation="wave" />
									<Skeleton variant="text" animation="wave" />
								</>
							)}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} lg={5}>
						<SyntaxHighlighter language="go" style={darcula}>
							{content.code ? content.code : "There is no code"}
						</SyntaxHighlighter>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default Content;
