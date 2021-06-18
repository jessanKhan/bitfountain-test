import React from "react"
interface componentProps {
  onClick: any
  model: any
  type: any
  brand: any
  image: any
}
const ModelDataModal: React.FC<componentProps> = ({
  onClick,
  model,
  type,
  brand,
  image,
}) => {
  return (
    <div>
      <button onClick={onClick}>close</button>
      <div>I am a modal</div>
      <div>
        <img src={image} height="300px" alt="image" />
        <h1>{model}</h1>
        <p>{type}</p>
        <h3>{brand}</h3>
      </div>
    </div>
  )
}

export default ModelDataModal
