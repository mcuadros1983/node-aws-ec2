const {MOCK_VIDEO} = require("../models/videos.js")

const getAllVideos = () => {
    return MOCK_VIDEO
}

module.exports = {getAllVideos}