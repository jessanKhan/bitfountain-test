import React from "react"
import { useSelector } from "react-redux"

import "./home.css"
import ProductPic from "../../assets/image.png"
import Modal from "react-modal"
import ModelDataModal from "../../components/modeldatamodal/modelDataModal"

interface authobject {
  data: {
    access_token: string
    expires_in: string
  }
  user: { email: string; id: number }
  loggedIn: boolean
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}
interface subtitleinterface {
  style: {
    color: string
  }
}

const items = [
  {
    brand: "Tissot",
    title: "Product1",
    comment: "Good Product",
    image: ProductPic,
  },
  {
    brand: "Tissot",
    title: "Product2",
    comment: "Good Product",
    image: ProductPic,
  },
  {
    brand: "Tissot",
    title: "Product3",
    comment: "Good Product",
    image: ProductPic,
  },
  {
    brand: "Tissot",
    title: "Product4",
    comment: "Good Product",
    image: ProductPic,
  },
  {
    brand: "Tissot",
    title: "Product5",
    comment: "Good Product",
    image: ProductPic,
  },
  {
    brand: "Tissot",
    title: "Product6",
    comment: "Good Product",
    image: ProductPic,
  },
]

const HomePage: React.FC = ({}) => {
  const userData = useSelector((state: { Auth: authobject }) => ({
    Auth: state.Auth,
  }))

  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [requiredItem, setrequiredItem] = React.useState(0)
  const [data, setData] = React.useState(Object)

  function openModal(index: any) {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("Hello")
  }

  function closeModal() {
    setIsOpen(false)
  }
  function replaceModalItem(index: any) {
    setrequiredItem(index)
    openModal(index)
  }

  const brochure = items.map((item, index) => {
    return (
      <div
        className="item "
        key={index}
        onClick={() => replaceModalItem(index)}
      >
        <img src={item.image} alt="product_pic" />
        <h6>{item.brand}</h6>
        <h4>{item.title}</h4>
        <h5>{item.comment}</h5>
      </div>
    )
  })

  let modalData = items[requiredItem]
  return (
    <div className="container">
      <div className="grid">{brochure}</div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <ModelDataModal
            onClick={closeModal}
            model={modalData.title}
            type={modalData.comment}
            brand={modalData.brand}
            image={modalData.image}
          />
        </Modal>
      </div>
    </div>
  )
}

export default HomePage
