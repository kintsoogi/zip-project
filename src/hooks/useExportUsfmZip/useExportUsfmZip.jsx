import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import PropTypes from 'prop-types'

import { usfmDataToFileData } from '../../utils/zipUsfmHelpers'

const useExportUsfmZip = (usfmData, zipFilename = 'usfm_files') => {
  const handleExportZip = async () => {
    const { blob } = await usfmDataToFileData(usfmData)
    saveAs(blob, `${zipFilename}.zip`)
  }

  return { handleExportZip }
}

useExportUsfmZip.propTypes = {
  /** Filename to write the zip file to */
  zipFilename: PropTypes.string,
  /** Array of USFM data objects to be zipped */
  usfmData: PropTypes.array,
}

export default useExportUsfmZip
