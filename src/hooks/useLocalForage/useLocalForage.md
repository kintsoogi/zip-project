# Use Local Forage Demo

This demo demonstrates the ability to save and retrieve data from IndexedDB using local forage.

## Example: setInStore, getAllFromStore

```jsx
import React, { useState, useEffect } from 'react'
import useLocalForage from './useLocalForage'

function Component() {
  const [storeData, setStoreData] = useState([])
  const { setInStore, getAllFromStore } = useLocalForage('styleguide')

  useEffect(() => {
    const getResult = async () => {
      setStoreData(await getAllFromStore())
    }
    getResult()
  }, [])

  setInStore('key1', { val1: 'val1' })
  setInStore('key2', { val2: 'val2' })
  setInStore('key3', { val3: 'val3' })

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
