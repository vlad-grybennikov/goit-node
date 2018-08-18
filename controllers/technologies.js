const {JSDOM} = require("jsdom");
const TECH = {
    html: false,
    css: false,
    javascript: false
}
module.exports.checkTechnologies = async (req, res, next) => {
    const {url} = req.query;
    const dom = await JSDOM.fromURL(url, {});
    const description = dom.window.document.querySelector(".card.wordwrap")
        .textContent.toLowerCase();
    Object.keys(TECH).forEach((tech) => {
        TECH[tech] = description.includes(tech.toLowerCase());
    });
    res.send(TECH);
};