import JSZip from 'jszip'

const USFM_REGEX = /([a-zA-Z0-9\s_\\.\-():])+(.usfm)$/i
const BOOK_ID_REGEX = /^\\id ([A-Z0-9]{3})/

const getUsfmDataFromZip = async zip => {
  const usfmPromises = zip
    .file(USFM_REGEX)
    // Transforms zip file objects to promises to get file data
    .map(zipObj => zipObj.async('string'))

  return await Promise.all(usfmPromises)
}

const extractBookIdFromText = usfmText => {
  try {
    const found = usfmText.match(BOOK_ID_REGEX)
    const textBookId = found[1]
    return textBookId
  } catch (error) {
    throw new Error('USFM Text Invalid! ~ Did not contain Book ID')
  }
}

export const fileBufferToUsfmData = async zipArrayBuffer => {
  // Create jszip and load data from array buffer
  const zip = await JSZip.loadAsync(zipArrayBuffer)

  const usfmTexts = await getUsfmDataFromZip(zip)

  const usfmDataArray = zip.file(USFM_REGEX).map((zipObj, fileIndex) => {
    return {
      filename: zipObj.name,
      usfmText: usfmTexts[fileIndex],
      bookId: extractBookIdFromText(usfmTexts[fileIndex]),
    }
  })

  return usfmDataArray
}

export const usfmDataToFileData = async usfmData => {
  const zip = new JSZip()

  usfmData.forEach(({ filename, usfmText }) => {
    zip.file(filename, usfmText)
  })

  const blob = await zip.generateAsync({ type: 'blob' })
  return blob
}

export const storeBufferToUsfmData = async storeArrayBuffer => {
  const zip = await JSZip.loadAsync(storeArrayBuffer)
  const usfmDataStrings = await getUsfmDataFromZip(zip)
  const usfmDataArray = usfmDataStrings.map(usfmDataString =>
    JSON.parse(usfmDataString)
  )
  return usfmDataArray
}

export const usfmDataToStoreBuffer = async usfmData => {
  const zip = new JSZip()

  usfmData.forEach(usfmDataObj => {
    const usfmDataToStore = JSON.stringify(usfmDataObj)
    zip.file(usfmDataObj.filename, usfmDataToStore)
  })

  const blob = await zip.generateAsync({ type: 'blob' })
  const arrayBuffer = await blob.arrayBuffer()
  return arrayBuffer
}
