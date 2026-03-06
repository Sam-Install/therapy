import React, { useState, useEffect } from "react";
import { FaHome, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {

  const [active, setActive] = useState("dashboard");
  const [bookings, setBookings] = useState([]);

  const token = localStorage.getItem("token");

  
  const fetchBookings = async () => {

    const response = await fetch("http://127.0.0.1:8000/api/bookings",{
      headers:{
        "Authorization":"Bearer " + token,
        "Accept":"application/json"
      }
    });

    const data = await response.json();

    setBookings(data.bookings);

  };

  useEffect(()=>{
    fetchBookings();
  },[]);


  const approveBooking = async(id)=>{

    await fetch(`http://127.0.0.1:8000/api/bookings/${id}/approve`,{
      method:"PUT",
      headers:{
        "Authorization":"Bearer " + token,
        "Accept":"application/json"
      }
    });

    fetchBookings();

  };

  
  const denyBooking = async(id)=>{

    await fetch(`http://127.0.0.1:8000/api/bookings/${id}/deny`,{
      method:"PUT",
      headers:{
        "Authorization":"Bearer " + token,
        "Accept":"application/json"
      }
    });

    fetchBookings();

  };

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user_id");

    window.location.href = "/";

  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      
      <div className="w-64 bg-white shadow-lg flex flex-col">

        <div className="p-6 text-2xl font-bold border-b">
          Therapy Admin
        </div>

        <ul className="flex-1 p-4 space-y-2">

          <li
            onClick={()=>setActive("dashboard")}
            className={`flex items-center gap-3 p-3 rounded cursor-pointer ${
              active === "dashboard"
                ? "bg-green-100 text-green-700"
                : "hover:bg-gray-100"
            }`}
          >
            <FaHome />
            Dashboard
          </li>

          <li
            onClick={()=>setActive("bookings")}
            className={`flex items-center gap-3 p-3 rounded cursor-pointer ${
              active === "bookings"
                ? "bg-green-100 text-green-700"
                : "hover:bg-gray-100"
            }`}
          >
            <FaCalendarAlt />
            Bookings
          </li>

        </ul>

        <div className="p-4 border-t">

          <button
            onClick={logout}
            className="flex items-center gap-3 text-red-500 hover:text-red-700"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>

      
      <div className="flex-1 p-10">

        {active === "dashboard" && (

          <div>

            <h1 className="text-3xl font-bold mb-6">
              Dashboard
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-gray-500">Total Bookings</h2>
                <p className="text-3xl font-bold mt-2">
                  {bookings.length}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-gray-500">Pending</h2>
                <p className="text-3xl font-bold mt-2">
                  {bookings.filter(b=>b.status==="Pending").length}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-gray-500">Approved</h2>
                <p className="text-3xl font-bold mt-2">
                  {bookings.filter(b=>b.status==="Approved").length}
                </p>
              </div>

            </div>

          </div>

        )}

        {active === "bookings" && (

          <div>

            <h1 className="text-3xl font-bold mb-6">
              Bookings
            </h1>

            <div className="bg-white shadow rounded-lg overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-100">

                  <tr className="text-left">
                    <th className="p-4">First Name</th>
                    <th className="p-4">Second Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Message</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Action</th>
                  </tr>

                </thead>

                <tbody>

                  {bookings.map((booking)=>(

                    <tr key={booking.id} className="border-t">

                      <td className="p-4">{booking.first_name}</td>
                      <td className="p-4">{booking.second_name}</td>
                      <td className="p-4">{booking.email}</td>
                      <td className="p-4">{booking.date}</td>

                      <td className="p-4 max-w-xs">
                        {booking.message ? booking.message : "No message"}
                      </td>

                      <td className="p-4">

                        {booking.status === "Pending" && (
                          <span className="text-yellow-500">Pending</span>
                        )}

                        {booking.status === "Approved" && (
                          <span className="text-green-600">Approved</span>
                        )}

                        {booking.status === "Denied" && (
                          <span className="text-red-500">Denied</span>
                        )}

                      </td>

                      <td className="p-4 flex gap-2">

                        <button
                          onClick={()=>approveBooking(booking.id)}
                          className="bg-green-500 text-white px-3 py-1 rounded"
                        >
                          Approve
                        </button>

                        <button
                          onClick={()=>denyBooking(booking.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                          Deny
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        )}

      </div>

    </div>

  );

};

export default Dashboard;