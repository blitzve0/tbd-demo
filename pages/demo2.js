import Router from "next/router";

export default function Home() {
  return (
    <div className={"layout"}>
      <img src="/bg2.png" className="backdrop" alt="bg" />
      <div className="modal2">
        <div className="heading-big">Fill More Information</div>
        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputField name="Username" value="Harsh" />
            <InputField name="Last Name" value="Dangi" />
            <InputField name="Apartment Suite No. etc" value="Texas" />
            <DropDown name="State" value={["USA", "Canada", "Australia", "London"]} />
            <InputField name="DOB" value="20-12-2022" type="date" id="birthday" />
            <InputField name="Phone No" value="408-456-1245" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <InputField name="Email" value="abc@gmail.com" />
            <InputField name="Street Name" value="Street No 2" />
            <DropDown name="City" value={["USA", "Canada", "Australia", "London"]} />
            <InputField name="ZIP" value="88901" />
            <DropDown name="Gender" value={["Male", "Female", "Other"]} />
            <InputField name="Additional Notes" value="" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "2vw", marginRight: "7vw" }}>
          <div onClick={() => alert("Booking Done")} style={{ width: "11.56vw", height: "2.06vw", cursor: "pointer", }}>
            <div style={{ width: "11.56vw", height: "2.06vw", paddingTop: "0.5vw", paddingBottom: "0.5vw", paddingLeft: "2.56vw", paddingRight: "2.18vw", backgroundColor: '#E8BFAF', borderRadius: 22, borderWidth: 1, borderStyle: "solid", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
              <div style={{ width: "11.56vw", height: "0.875vw", fontSize: "1vw", fontWeight: '600', color: 'black', textTransform: 'uppercase', }}>BOOK SLOT</div>
              <div style={{ width: "0.625vw", }} />
              <img style={{ width: "0.5vw", height: "0.5vw", }} src="/arrow.png" />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", margin: "2vw", marginTop: "-1.5vw" }}>
          <div style={{ textDecoration: "underline", fontWeight: "600", fontSize: "1.15vw" }}>Clear</div>
        </div>
      </div>
    </div>
  )
}

function DropDown({ name, value }) {
  return (
    <div style={{ marginTop: "2vw", position: "relative", width: "21.875vw", height: "4.06vw", display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', }}>
      <div style={{ fontSize: "1.125vw", fontWeight: '300', color: 'black', }}>Select {name}</div>
      <div style={{ height: "0.25vw", }} />
      <img style={{ width: "1vw", height: "1vw", borderRadius: "0.5vw", position: "absolute", right: "1vw", top: "2.5vw", pointerEvents: "none" }} src="/icon.png" />
      <select style={{ width: "21.875vw", height: "2.5vw", paddingTop: "0.75vw", paddingBottom: "0.5vw", paddingLeft: "1vw", paddingRight: "1vw", backgroundColor: 'white', borderRadius: "0.5vw", borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }} name="cars" id="cars">
        <option value="volvo">{value[0]}</option>
        <option value="saab">{value[1]}</option>
        <option value="mercedes">{value[2]}</option>
        <option value="audi">{value[3]}</option>
      </select>
    </div >
  )
}

function InputField({ name, value, type }) {
  return (
    <div style={{ marginTop: "2vw", width: "21.875vw", height: "4.06vw", display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', }}>
      <p style={{ width: "auto", height: "0.97vw", fontSize: "1.125vw", fontWeight: '300', color: 'rgba(50, 50, 77, 1)', }}>{name}</p>
      <div style={{ height: "0.58vw", }} />
      <div style={{ width: "21.875vw", height: "2.5vw", paddingTop: "0.75vw", paddingBottom: "0.5vw", paddingLeft: "1vw", paddingRight: "1vw", backgroundColor: 'white', borderRadius: "0.5vw", borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
        <input type={type} style={{ width: "21.875vw", height: "1.25vw", fontSize: "1vw", color: 'rgba(0, 0, 0, 0.85)', border: "none" }} placeholder={value} />
      </div>
    </div>
  )
}