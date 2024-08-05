import { Accordion } from "react-bootstrap"

const Category = ({data}) => {

    /**
     * restaurantMenu?.itemCards?.map(item => (
                <ItemList restaurantMenu={item} />
              ))
     */
    return (
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    )
}

export default Category;