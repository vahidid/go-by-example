import React, { useState, useEffect } from "react";

function useContent(contentKey: string) {
	const [title, setTitle] = useState("");
	const [code, setCode] = useState(null);
	const [content, setContent] = useState("");
	const [prevRef, setPrevRef] = useState(null);
	const [nextRef, setNextRef] = useState(null);

	useEffect(() => {
		// Get MDContent from file
		async function getContentFromFile() {
			try {
				// Read File
				const file = await import(`./../Contents/${contentKey}`);

				// Get MDContent
				fetch(file.default.mdContent)
					.then((result) => {
						result.text().then((plaintext) => {
							setContent(plaintext);
						});
					})
					.catch((error) => {
						throw error;
					});

				setTitle(file.default.title);
				setCode(file.default.code);
				setPrevRef(file.default.prevRef);
				setNextRef(file.default.nextRef);
			} catch (e) {
				setTitle("Not Found");
				setContent(
					"There is no content on this link, try a content from sidebar"
				);
				setCode(null);
				setPrevRef(null);
				setNextRef(null);
			}
		}

		getContentFromFile();
	});

	return { title, code, content, prevRef, nextRef };
}

export { useContent };
