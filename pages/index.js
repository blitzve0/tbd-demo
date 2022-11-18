import Router from 'next/router'
/// Imports

//& Page 1
export default function Home() {
  //& View
  return (
    <div className={'layout'}>
      {/* //$ Temporary Background */}
      <img src="/bg.png" className="backdrop" alt="bg" />
      <img src="/mobilebg.png" className="backdrop-mobile" alt="bg" />

      {/* //$ Modal View */}
      <div className="modal1">
        <div className="close-button">X</div>
        <div className="heading-big">Book Appointment</div>
        <div className="desc-small">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
          consectetur,{' '}
        </div>
        {/* //@ Dropdowns */}
        <div className="selector">
          <DropDown name="Location" value={['USA', 'Canada', 'Australia', 'London']} />
          <DropDown name="Service" value={['Test Kit', 'Order', 'Report', 'Other']} />
          <DropDown name="Test Menu" value={['Option 1', 'Option 2', 'Option 3', 'Option 4']} />
        </div>
        {/* //@ Button */}
        <Button click={() => Router.push('/demo2')} label="proceed" />
      </div>
    </div>
  )
}

//$ Dropdown Component
function DropDown({ name, value }) {
  return (
    <div
      className="drop"
    >
      <div className="drop-label">Select {name}</div>
      <div className="drop-break" />
      <img className="drop-icon" src="/icon.png" />
      <select
        className="drop-select"
        name="cars"
        id="cars"
      >
        <option value="volvo">{value[0]}</option>
        <option value="saab">{value[1]}</option>
        <option value="mercedes">{value[2]}</option>
        <option value="audi">{value[3]}</option>
      </select>
    </div>
  )
}

//$ Button
function Button({ click, label }) {
  return (
    <div className="clicker">
      <div onClick={click} className="clicker-button">
        <div
          className="clicker-text"
        >
          <div className="clicker-label">{label}</div>
          <div className="clicker-break" />
          <img className="clicker-arrow" src="/arrow.png" />
        </div>
      </div>
    </div>
  )
}
