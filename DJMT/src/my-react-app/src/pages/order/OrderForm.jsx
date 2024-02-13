function OrderForm() {
  return (
    <>
      <div className="container">
        <h1 className="fs-3">주문 정보</h1>
        <div className="mb-3">
          <label for="basic-url" className="form-label">
            구매자 이름
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="basic-url" className="form-label">
            연락처
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="basic-url" className="form-label">
            배송지
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="basic-url" className="form-label">
            메모
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container">
        <h1 className="fs-3">상품 정보</h1>
        <div className="mb-3">
          <label for="basic-url" className="form-label">
            상품명
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="basic-url" className="form-label">
            가격
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="basic-url" className="form-label">
            수량
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderForm;
