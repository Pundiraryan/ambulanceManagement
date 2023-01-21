import PlacesCards from './PlacesCard'
const places = [
 {id:1, AmbulanceNo: '12345', AmbulanceCapacity: '5', DriverName: 'Aryan Pundir',DriverContactNo: '79094584936',HospitalName: 'Delta' },
 {id:2, AmbulanceNo: '12345', AmbulanceCapacity: '5', DriverName: 'Aryan Pundir',DriverContactNo: '9094584936',HospitalName: 'Delta' },
 {id:3, AmbulanceNo: '12345', AmbulanceCapacity: '5', DriverName: 'Aryan Pundir',DriverContactNo: '9094584936' ,HospitalName: 'Delta'},
 {id:4, AmbulanceNo: '12345', AmbulanceCapacity: '5', DriverName: 'Aryan Pundir',DriverContactNo: '9094584936' ,HospitalName: 'Delta'},
 {id:5, AmbulanceNo: '12345', AmbulanceCapacity: '5', DriverName: 'Aryan Pundir',DriverContactNo: '9094584936',HospitalName: 'Delta' },
 {id:6, AmbulanceNo: '12345', AmbulanceCapacity: '5', DriverName: 'Aryan Pundir',DriverContactNo: '9094584936' ,HospitalName: 'Delta'},
 {id:7, AmbulanceNo: '12345', AmbulanceCapacity: '5', DriverName: 'Aryan Pundir',DriverContactNo: '9094584936' ,HospitalName: 'Delta'},
 {id:8, AmbulanceNo: '12345', AmbulanceCapacity: '5', DriverName: 'Aryan Pundir',DriverContactNo: '9094584936' ,HospitalName: 'Delta'},
 ]

function App() {
  return (
    <div>
      <PlacesCards places={places} />
    </div>
  );
}
export default App;
