import './Aside.css'

function Aside() {

  return (
    <>
      <aside>
        <ul>
          <li>
            <a className='material-icons' href='javascript:void(0)'>checkroom</a>
          </li>
          <li>
            <a className='material-icons red' href='javascript:void(0)'>favorite</a>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Aside