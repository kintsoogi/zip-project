# Use Local Forage Demo

This demo demonstrates the ability to save and retrieve data from IndexedDB using local forage.

## Example: setInStore, getAllFromStore

```jsx
import React, { useState, useEffect } from 'react'
import {createStore, setInStore, getAllFromStore} from '../../utils/LocalForageHelpers.js'

function Component() {
  const [storeData, setStoreData] = useState([])
  const { setInStore, getAllFromStore } = useLocalForage('styleguide')
  const styleguideStore = createStore('styleguide')

  useEffect(() => {
    const getResult = async () => {
      setStoreData(await getAllFromStore(styleguideStore))
    }
    getResult()
  }, [])

  setInStore(styleguideStore, 'key1', { val1: 'val1' })
  setInStore(styleguideStore, 'key2', { val2: 'val2' })
  setInStore(styleguideStore, 'key3', { val3: 'val3' })

  const renderedData = storeData.map(data => (
    <p>
      Id: {data.id} | Key: {data.key} | Value: {JSON.stringify(data.value)}
    </p>
  ))

  return <div>{renderedData}</div>
}

;<Component />
```

## Example: getFromStore

## Example: setInStore

## Example: deleteFromStore
