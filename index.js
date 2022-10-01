const download = (url, callback) => {
    console.log(`Downloading from ${url}`)
    callback()
}

download(url1, () => {
    download(url2, () => {
        download(url3, () => {
            console.log("DONLOAD COMPLETE");
        })
    })
})