import Carousel from 'react-bootstrap/Carousel'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8rem',
            gap: '40px',
          }}
        >
          <div className="left-content">
            <h1>ERPs Global Provider</h1>
            <div className="button-group mt-6">
              <button className="btn">Learn more</button>
              <button className="btn">Contact us</button>
            </div>
          </div>
          <div className="right-content">
            <img src="/images/Asset-5.png" alt="car-img" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8rem',
            gap: '40px',
          }}
        >
          <div className="left-content">
            <h1>ERPs Global Provider</h1>
            <div className="button-group mt-6">
              <button className="btn">Learn more</button>
              <button className="btn">Contact us</button>
            </div>
          </div>
          <div className="right-content">
            <img src="/images/Asset-5.png" alt="car-img" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8rem',
            gap: '40px',
          }}
        >
          <div className="left-content">
            <h1>ERPs Global Provider</h1>
            <div className="button-group mt-6">
              <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                Save Changes
              </button>
              <button className="btn">Contact us</button>
            </div>
          </div>
          <div className="right-content">
            <img src="/images/Asset-5.png" alt="car-img" width={500} />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default UncontrolledExample

