/** @type {import('next').NextConfig} */

const withImages = require('next-images')

module.exports = withImages({
  images: {
    disableStaticImages: true //next-images -> error:TypeError: unsupported file type: undefined (file: undefined)
  },
  esModule: true,
  reactStrictMode: true,
})