import Router from "next/router";

export default function Home() {
  return (
    <div className={"layout"}>
      <img src="/bg.png" className="backdrop" alt="bg" />
      <div className="modal1">
        <div className="close-button">X</div>
        <div className="heading-big">Book Appointment</div>
        <div className="desc-small">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DropDown name="Location" value={["USA", "Canada", "Australia", "London"]} />
          <DropDown name="Service" value={["Test Kit", "Order", "Report", "Other"]} />
          <DropDown name="Test Menu" value={["Option 1", "Option 2", "Option 3", "Option 4"]} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2vw" }}>
          <div onClick={() => Router.push("/demo2")} style={{ width: "10.3vw", height: "2.06vw", cursor: "pointer", }}>
            <div style={{ width: "10.3vw", height: "2.06vw", paddingTop: "0.5vw", paddingBottom: "0.5vw", paddingLeft: "2.56vw", paddingRight: "2.18vw", backgroundColor: 'rgba(238, 129, 85, 1)', borderRadius: 22, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
              <div style={{ width: "5.75vw", height: "0.875vw", fontSize: "1vw", fontWeight: '600', color: 'black', textTransform: 'uppercase', }}>proceed</div>
              <div style={{ width: "0.625vw", }} />
              <img style={{ width: "0.5vw", height: "0.5vw", }} src="/arrow.png" />
            </div>
          </div></div>
      </div>
    </div>
  )
}

function DropDown({ name, value }) {
  return (
    <div style={{ paddingLeft: "3vw", marginTop: "2vw", position: "relative", width: "15.18vw", height: "3.75vw", display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', }}>
      <div style={{ fontSize: "1.125vw", fontWeight: '300', color: 'black', }}>Select {name}</div>
      <div style={{ height: "0.25vw", }} />
      <img style={{ width: "1vw", height: "1vw", borderRadius: "0.5vw", position: "absolute", right: "-2vw", top: "2.15vw", pointerEvents: "none" }} src="/icon.png" />
      <select style={{ width: "15.18vw", paddingTop: "0.625vw", paddingBottom: "0.625vw", paddingLeft: "1vw", paddingRight: "0.75vw", backgroundColor: 'white', borderRadius: "0.5vw", borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} name="cars" id="cars">
        <option value="volvo">{value[0]}</option>
        <option value="saab">{value[1]}</option>
        <option value="mercedes">{value[2]}</option>
        <option value="audi">{value[3]}</option>
      </select>
    </div>
  )
}
