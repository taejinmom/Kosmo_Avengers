import { Link } from 'react-router-dom';
import './Product.css'

function ProductList() {
  return (
    <>
      <div className="product-list">
        <div className="inner">
          <h2 className='title'>여성</h2>
          <div className="category">
            <ul>
              <li><a href="" className='active'>전체</a></li>
              <li><a href="">상의</a></li>
              <li><a href="">하의</a></li>
            </ul>
            <div className="select-box">
              <select>
                <option value="1" selected>인기순</option>
                <option value="2" >구매후기순</option>
                <option value="3">낮은가격순</option>
                <option value="4">높은가격순</option>
              </select>
            </div>
          </div>
          <ul className="item">
            <li>
              <Link to={'/productDetail'}>
                <div className='item-img'></div>
                <p className='item-name'>제품명</p>
                <p className='item-price'>제품가격</p>
              </Link>
            </li><li>
              <Link to={'/productDetail'}>
                <div className='item-img'></div>
                <p className='item-name'>제품명</p>
                <p className='item-price'>제품가격</p>
              </Link>
            </li><li>
              <Link to={'/productDetail'}>
                <div className='item-img'></div>
                <p className='item-name'>제품명</p>
                <p className='item-price'>제품가격</p>
              </Link>
            </li><li>
              <Link to={'/productDetail'}>
                <div className='item-img'></div>
                <p className='item-name'>제품명</p>
                <p className='item-price'>제품가격</p>
              </Link>
            </li><li>
              <Link to={'/productDetail'}>
                <div className='item-img'></div>
                <p className='item-name'>제품명</p>
                <p className='item-price'>제품가격</p>
              </Link>
            </li><li>
              <Link to={'/productDetail'}>
                <div className='item-img'></div>
                <p className='item-name'>제품명</p>
                <p className='item-price'>제품가격</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductList