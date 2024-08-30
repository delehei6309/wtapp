// ** React Imports
import { useCallback, useRef } from 'react'

// ** Third Party Imports
import copy from 'clipboard-copy'

const isInputLike = node => {
  return node && (node.nodeName === 'TEXTAREA' || node.nodeName === 'INPUT')
}

const useClipboard = (options = {}) => {
  const targetref = useRef(null)

  const handleSuccess = () => {
    if (options.onSuccess) {
      options.onSuccess()
    }
    if (options.selectOnCopy && isInputLike(targetref.current)) {
      targetref.current.select()
    }
  }

  const handleError = () => {
    if (options.onError) {
      options.onError()
    }
    const selectOnError = options.selectOnError !== false
    if (selectOnError && isInputLike(targetref.current)) {
      targetref.current.select()
    }
  }

  const clipboardCopy = text => {
    copy(text).then(handleSuccess).catch(handleError)
  }

  const copyHandler = useCallback(text => {
    if (typeof text === 'string') {
      clipboardCopy(text)
    } else if (targetref.current) {
      clipboardCopy(targetref.current.value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    copy: copyHandler,
    target: targetref
  }
}

export default useClipboard
