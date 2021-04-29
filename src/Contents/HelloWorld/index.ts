import { IContent } from "../IContent";
import MDContent from "./HelloWorld.md";

const HelloWorldContent: IContent = {
	title: "Hello World",
	mdContent: MDContent,
	code: `package main
    import "fmt"
    func main() {
        fmt.Println("hello world")
    }`,
	prevRef: "Home",
};

export default HelloWorldContent;
