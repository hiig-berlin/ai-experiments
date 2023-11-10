import { mkdirSync, cpSync } from "fs"
import generatePage from "./generate-page.js"

const createDirs = () => {
	mkdirSync("./site", {recursive: true} )
}

const copyStaticFiles = () => {
	cpSync("./content/static", "./site/static", {recursive: true})
	cpSync("./content/assets", "./site/assets", {recursive: true})
}

const generatePages = () => {
	[
		["./content/index.html", "./templates/main.html", "./site/"],
		["./content/facial-detection.html", "./templates/main.html", "./site/facial-detection/"],
		["./content/facial-recognition.html", "./templates/main.html", "./site/facial-recognition/"],
		["./content/about.html", "./templates/main.html", "./site/about/"],
	].map(item => generatePage(item[0], item[1], item[2]))
}

const build = () => {
	createDirs()
	copyStaticFiles()
	generatePages()
}

export default build
