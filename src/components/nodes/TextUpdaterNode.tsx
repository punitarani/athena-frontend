import { ChangeEvent, FC, useCallback, useEffect, useRef } from 'react'

interface TextUpdaterNodeProps {
  data: { label: string }
  isConnectable: boolean
}

const TextUpdaterNode: FC<TextUpdaterNodeProps> = ({ data, isConnectable }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const onChange = useCallback((evt: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(evt.target.value)
  }, [])

  const onInput = useCallback(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '20px' // Min height for reset
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }, [])

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '20px' // Set initial height to one line
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }, [])

  return (
    <div className="text-updater-node nodrag">
      <div>
        <textarea
          ref={textAreaRef}
          id="text"
          name="text"
          onChange={onChange}
          onInput={onInput}
          className="nodrag auto-expand"
        />
      </div>
    </div>
  )
}

export default TextUpdaterNode
