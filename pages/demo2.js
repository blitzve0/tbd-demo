import Router from "next/router";
/// Imports

//& Page 2
export default function Home() {

  //& View
  return (
    <div className={"layout"}>
      {/* //$ Temporary Background */}
      <img src="/bg2.png" className="backdrop" alt="bg" />
      <img src="/mobilebg2.png" className="backdrop-mobile" alt="bg" />

      {/* //$ Modal View */}
      <div className="modal2">
        <div className="heading-big">Fill More Information</div>

        {/* //@ Input Fields */}
        <div className="modal2-row">
          <div className="modal2-row1">
            <InputField name="Username" value="Harsh" />
            <InputField name="Last Name" value="Dangi" />
            <InputField name="Apartment Suite No. etc" value="Texas" />
            <DropDown name="State" value={["USA", "Canada", "Australia", "London"]} />
            <InputField name="DOB" value="20-12-2022" type="date" id="birthday" />
            <InputField name="Phone No" value="408-456-1245" />
          </div>
          <div className="modal2-row1">
            <InputField name="Email" value="abc@gmail.com" />
            <InputField name="Street Name" value="Street No 2" />
            <DropDown name="City" value={["USA", "Canada", "Australia", "London"]} />
            <InputField name="ZIP" value="88901" />
            <DropDown name="Gender" value={["Male", "Female", "Other"]} />
            <InputField name="Additional Notes" value="" />
          </div>
        </div>

        {/* //@ Book Slot Button */}
        <Button click={() => alert("Booking Done")} label="BOOK SLOT" />

        {/* //@ Clear Fields */}
        <div className="clear-fields">
          <div className="clear-text">Clear</div>
        </div>
      </div>
    </div >
  )
}

//$ Dropdown Component
function DropDown({ name, value }) {
  return (
    <div className="drop2">
      <div className="drop2-label">Select {name}</div>
      <div className="drop2-break" />
      <img className="drop2-icon" src="/icon.png" />
      <select className="drop2-select" name="cars" id="cars">
        <option value="volvo">{value[0]}</option>
        <option value="saab">{value[1]}</option>
        <option value="mercedes">{value[2]}</option>
        <option value="audi">{value[3]}</option>
      </select>
    </div >
  )
}

//$ Input Component
function InputField({ name, value, type }) {
  return (
    <div className="textinput">
      <p className="textinput-label">{name}</p>
      <div className="textinput-break" />
      <div className="textinput-row" >
        <input type={type} className="textinput-input" placeholder={value} />
      </div>
    </div>
  )
}

//$ Button Component
function Button({ click, label }) {
  return (
    <div className="button2" >
      <div onClick={click} className="button2-click" >
        <div className="button2-row" >
          <div className="button2-label" >{label}</div>
          <div className="button2-break" />
          <img className="button2-icon" src="/arrow.png" />
        </div>
      </div>
    </div>
  )
}